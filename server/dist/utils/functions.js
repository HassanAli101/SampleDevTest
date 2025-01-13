"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePictureUrls = void 0;
// Though this function is coupled with express "requests", i will leave it as is since it was part of the requirements to use express
const generatePictureUrls = (req) => {
    if (!req.files || !(req.files instanceof Array)) {
        throw new Error("No files found on request");
    }
    const pictureUrls = req.files.map((file) => {
        const baseUrl = `${req.protocol}://${req.get("host")}`;
        return `${baseUrl}/UserUploads/${file.filename}`;
    });
    return pictureUrls;
};
exports.generatePictureUrls = generatePictureUrls;
//# sourceMappingURL=functions.js.map