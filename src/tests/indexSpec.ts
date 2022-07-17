import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('should test the endpoint of the api', () => {
    it('should get satus 200', async () => {
        const respose = await request.get('/images');
        expect(respose.status).toEqual(200);
    });
    it('should get satus 404', async () => {
        const respose = await request.get('/hellowrold');
        expect(respose.status).toEqual(404);
    });
});
