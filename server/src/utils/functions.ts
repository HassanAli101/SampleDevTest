import { Request } from "express";

// Though this function is coupled with express "requests", i will leave it as is since it was part of the requirements to use express
export const generatePictureUrls = (req: Request): string[] => {
  if (!req.files || !(req.files instanceof Array)) {
    throw new Error("No files found on request");
  }
  
  const pictureUrls = (req.files as Express.Multer.File[]).map((file) => {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    return `${baseUrl}/UserUploads/${file.filename}`;
  });

  return pictureUrls;
};
