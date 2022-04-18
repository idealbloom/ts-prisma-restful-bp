import request from 'supertest';
import app from '@src/app';

describe('Auth Express Router E2E Test', () => {
  it('POST /signIn', async () => {
    const response = await request(app).post('/auth/signIn').send({
      email: 'test@gmail.com',
      password: 'testPassword',
      name: 'testName',
    });
    console.log(response.body);
    expect(response.statusCode).toEqual(200);
  });
});
