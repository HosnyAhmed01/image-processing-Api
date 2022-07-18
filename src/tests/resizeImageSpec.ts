import path from 'path';
import resizeImage from '../modules/resizeimage';

it('should return new image path', async () => {
    const resizedimage = await resizeImage(`fjord`, 400, 400);
    expect(resizedimage).toEqual(
        `${path.resolve()}\\images\\thumb\\fjord_400_400.jpg`
    );
});
