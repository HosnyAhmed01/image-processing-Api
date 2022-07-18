"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function resizeImage(imageName, width, height) {
    return __awaiter(this, void 0, void 0, function* () {
        const exist = fs_1.default.existsSync(`${path_1.default.resolve()}\\images\\fill\\${imageName}.jpg`);
        if (exist) {
            // get the image absolut path
            yield (0, sharp_1.default)(`${path_1.default.resolve()}\\images\\fill\\${imageName}.jpg`)
                // resizeing image with the ordered width and height
                .resize(width, height)
                // save the image in thumb folder with the new name
                .toFile(`${path_1.default.resolve()}\\images\\thumb\\${imageName}_${width}_${height}.jpg`);
            return `${path_1.default.resolve()}\\images\\thumb\\${imageName}_${width}_${height}.jpg`;
        }
        else {
            return 'false';
        }
    });
}
exports.default = resizeImage;
