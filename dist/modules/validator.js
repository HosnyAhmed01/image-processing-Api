"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateUrl(imageName, width, height) {
    const stringRe = /\w+/;
    const numRe = /\d{3}(?!\w)/;
    if (stringRe.test(imageName) === true &&
        numRe.test(width) == true &&
        numRe.test(height) == true) {
        return true;
    }
    else {
        return false;
    }
}
exports.default = validateUrl;
