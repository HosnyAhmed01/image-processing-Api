function validateUrl(
    imageName: string,
    width: string,
    height: string
): boolean {
    const stringRe = /\w+/;
    const numRe = /\d{3}(?!\w)/;

    if (
        stringRe.test(imageName) === true &&
        numRe.test(width) == true &&
        numRe.test(height) == true
    ) {
        return true;
    } else {
        return false;
    }
}

export default validateUrl;
