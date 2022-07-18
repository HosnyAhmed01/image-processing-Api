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
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const url_1 = __importDefault(require("url"));
const resizeimage_1 = __importDefault(require("./modules/resizeimage"));
const validator_1 = __importDefault(require("./modules/validator"));
const app = (0, express_1.default)();
const port = 3000;
app.listen(port, () => {
    console.log(`app is runnin on http://localhost:${port}`);
});
function riszedImage(req, res) {
    const imageInfo = url_1.default.parse(req.url, true).query;
    const existedimgae = fs_1.default.existsSync(`${path_1.default.resolve()}\\images\\thumb\\${imageInfo.imageName}_${imageInfo.width}_${imageInfo.height}.jpg`);
    // if the resized image is allready exist 
    if (existedimgae) {
        res.sendFile(`${path_1.default.resolve()}\\images\\thumb\\${imageInfo.imageName}_${imageInfo.width}_${imageInfo.height}.jpg`);
        // if the resized image is not exist 
    }
    else {
        function getImage() {
            return __awaiter(this, void 0, void 0, function* () {
                const imageName = imageInfo.imageName;
                const width = imageInfo.width;
                const height = imageInfo.height;
                // send query to validation function
                const valid = (0, validator_1.default)(String(imageName), String(width), String(height));
                // check if the query is valid
                if (valid == true) {
                    try {
                        // resize and save resized image
                        const image = yield (0, resizeimage_1.default)(String(imageName), Number(width), Number(height));
                        // check if the image is exist
                        if (image != 'false') {
                            setTimeout(() => {
                                res.sendFile(String(image));
                            }, 600);
                        }
                        else {
                            // if the image is not found
                            res.send('sorry image not found');
                        }
                    }
                    catch (err) {
                        console.log(err);
                    }
                }
                else {
                    // if the query is not valid
                    res.send('please enter a valid url');
                }
            });
        }
        getImage();
    }
}
app.get('/images', riszedImage);
// if the server response status is 404
app.use((req, res) => {
    res.status(404).send("Sorry can't find that!");
});
exports.default = app;
