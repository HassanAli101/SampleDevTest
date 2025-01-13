import multer from "multer";
import path from "path";

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "UserUploads"
    );

    console.log("upload Path is: ", uploadPath);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});
