import request from 'supertest';
import app from './app';

describe('Express App E2E Test', () => {
  describe('Responds to authRouter', () => {
    it('Case: Correct', async () => {
      const repsonse = await request(app).get('/');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(repsonse.header['content-type']).toBe('text/html; charset=utf-8');
      expect(repsonse.statusCode).toBe(200);
      expect(repsonse.text).toEqual('hello world!!!');
    });
    it('404 everything else', async () => {
      const response = await request(app).get('/foo/bar');
      expect(response.statusCode).toBe(404);
    });
  });
});
