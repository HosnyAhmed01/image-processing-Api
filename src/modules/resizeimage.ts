import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

function resizeImage(
    imageName: string | undefined,
    width: number | undefined,
    height: number | undefined
): string {
    const exist = fs.existsSync(
        `${path.resolve()}\\images\\fill\\${imageName}.jpg`
    );

    if (exist) {
        // get the image absolut path
        sharp(`${path.resolve()}\\images\\fill\\${imageName}.jpg`)
            // resizeing image with the ordered width and height
            .resize(width, height)
            // save the image in thumb folder with the new name
            .toFile(
                `${path.resolve()}\\images\\thumb\\${imageName}_${width}_${height}.jpg`
            );
        return `${path.resolve()}\\images\\thumb\\${imageName}_${width}_${height}.jpg`;
    } else {
        return 'false';
    }
}

export default resizeImage;
