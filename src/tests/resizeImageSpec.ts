import path from 'path';
import resizeImage from '../modules/resizeimage';

it('should return new image path', async () => {
    expect(resizeImage(`fjord`, 400, 400)).toEqual(
        `${path.resolve()}\\images\\thumb\\fjord_400_400.jpg`
    );
});
