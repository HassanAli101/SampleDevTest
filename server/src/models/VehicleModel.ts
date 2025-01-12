import mongoose from "mongoose";
const Schema = mongoose.Schema;
const vehicleSchema = new Schema(
  {
    carModel: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    numPictures: {
      type: Number,
      required: true,
    },
    pictureUrls: {
      type: [String],
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    userLoggedIn: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;
