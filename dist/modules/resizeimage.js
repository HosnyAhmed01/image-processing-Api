"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function resizeImage(imageName, width, height) {
    const exist = fs_1.default.existsSync(`${path_1.default.resolve()}\\images\\fill\\${imageName}.jpg`);
    if (exist) {
        // get the image absolut path
        (0, sharp_1.default)(`${path_1.default.resolve()}\\images\\fill\\${imageName}.jpg`)
            // resizeing image with the ordered width and height
            .resize(width, height)
            // save the image in thumb folder with the new name
            .toFile(`${path_1.default.resolve()}\\images\\thumb\\${imageName}_${width}_${height}.jpg`);
        return `${path_1.default.resolve()}\\images\\thumb\\${imageName}_${width}_${height}.jpg`;
    }
    else {
        return 'false';
    }
}
exports.default = resizeImage;
