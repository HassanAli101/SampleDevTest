import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  carModel: yup
    .string()
    .min(3, "Car Model must be at least 3 characters long")
    .required("Car Model is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required"),
  phoneNumber: yup
    .number()
    .typeError("Phone Number must be a number")
    .test(
      "len",
      "Phone Number must be exactly 11 digits",
      (value) => value?.toString().length === 11
    )
    .required("Phone Number is required"),
  maxPictures: yup
    .number()
    .min(1, "At least 1 picture is required")
    .max(10, "A maximum of 10 pictures is allowed")
    .typeError("Max Number of Pictures must be a number")
    .required("Max Number of Pictures is required"),
});

export const useSubmitVehicleForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      carModel: "",
      price: 0,
      phoneNumber: 0,
      maxPictures: 1,
    },
  });

  const maxPictures = watch("maxPictures"); 

  return { control, handleSubmit, errors, maxPictures };
};
