import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

async function resizeImage(
    imageName: string | undefined,
    width: number | undefined,
    height: number | undefined
): Promise<string> {
    const exist = fs.existsSync(
        `${path.resolve()}\\images\\fill\\${imageName}.jpg`
    );

    if (exist) {
        // get the image absolut path
        await sharp(`${path.resolve()}\\images\\fill\\${imageName}.jpg`)
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
