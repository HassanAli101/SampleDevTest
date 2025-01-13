import { useState, useRef } from "react";

const usePicturesField = (
  maxPictures: number,
  onPicturesChange: (pictures: File[]) => void
) => {
  const [pictures, setPictures] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);

      const duplicateFiles = fileArray.filter((file) =>
        pictures.some((picture) => picture.name === file.name)
      );

      if (duplicateFiles.length > 0) {
        const duplicateNames = duplicateFiles
          .map((file) => file.name)
          .join(", ");
        setError(`The following files already exist: ${duplicateNames}`);
        setSnackbarOpen(true);
        return;
      }

      if (fileArray.length + pictures.length > maxPictures) {
        setError(`You can only upload up to ${maxPictures} pictures.`);
        setSnackbarOpen(true);
        return;
      }

      setError(null);
      const updatedPictures = [...pictures, ...fileArray];
      setPictures(updatedPictures);
      onPicturesChange(updatedPictures);
    }
  };

  const handleRemovePicture = (index: number) => {
    const updatedPictures = pictures.filter((_, i) => i !== index);
    setPictures(updatedPictures);
    onPicturesChange(updatedPictures);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return {
    pictures,
    error,
    snackbarOpen,
    fileInputRef,
    handleFileChange,
    handleRemovePicture,
    handleButtonClick,
    handleSnackbarClose,
  };
};

export default usePicturesField;
