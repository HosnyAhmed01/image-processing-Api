import express, { Application } from 'express';
import fs from 'fs';
import path from 'path';
import url from 'url';
import resizeImage from './modules/resizeimage';
import validateUrl from './modules/validator';

const app: Application = express();
const port = 3000;

app.listen(port, () => {
    console.log(`app is runnin on http://localhost:${port}`);
});

function riszedImage(
    req: express.Request,
    res: express.Response
): void {
    const imageInfo = url.parse(req.url, true).query;
    const existedimgae = fs.existsSync(
        `${path.resolve()}\\images\\thumb\\${imageInfo.imageName}_${
            imageInfo.width
        }_${imageInfo.height}.jpg`
    );
    // if the resized image is allready exist 
    if (existedimgae) {
        res.sendFile(
            `${path.resolve()}\\images\\thumb\\${imageInfo.imageName}_${
                imageInfo.width
            }_${imageInfo.height}.jpg`
        );
      // if the resized image is not exist 
    } else {
        async function getImage() {
            const imageName = imageInfo.imageName;
            const width = imageInfo.width;
            const height = imageInfo.height;
            // send query to validation function
            const valid = validateUrl(
                String(imageName),
                String(width),
                String(height)
            );
            // check if the query is valid
            if (valid == true) {
                try {
                    // resize and save resized image
                    const image = await resizeImage(
                        String(imageName),
                        Number(width),
                        Number(height)
                    );
                    // check if the image is exist
                    if (image != 'false') {
                        setTimeout(() => {
                            res.sendFile(String(image));
                        }, 600);
                    } else {
                        // if the image is not found
                        res.send('sorry image not found');
                    }
                } catch (err) {
                    console.log(err);
                }
            } else {
                // if the query is not valid
                res.send('please enter a valid url');
            }
        }
        getImage();
    }
}

app.get('/images', riszedImage);

// if the server response status is 404
app.use((req, res) => {
    res.status(404).send("Sorry can't find that!");
});

export default app;
