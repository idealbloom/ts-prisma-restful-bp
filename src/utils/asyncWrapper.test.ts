import { Request, Response } from 'express';
import app from '@src/app';
import request from 'supertest';
import asyncWrapper from './asyncWrapper';
import { IBResFormat } from './IBDefinitions';

describe('asyncWrapper E2E Test', () => {
  describe('Calling asyncWrapper', () => {
    it('Case: normal', async () => {
      expect.assertions(3);
      const asyncTestFunc = async (req: Request, res: Response) => {
        const testRet = await new Promise(resolve => {
          for (let i = 0; i < 1000000; i += 1);
          resolve(
            (() => {
              expect(1).toBe(1);
              return 'asyncFunc done';
            })(),
          );
        });
        res.status(200).json(testRet);
      };
      app.post('/asyncWrapperTest', asyncWrapper(asyncTestFunc));
      const response = await request(app).post('/asyncWrapperTest').send();
      expect(response.statusCode).toBe(200);
      expect(response.body).toBe('asyncFunc done');
    });

    it('Case: UNEXPECTED Exception Handling', async () => {
      expect.assertions(2);
      const asyncTestFunc = async (req: Request, res: Response) => {
        throw new Error('e');
        const testRet = await new Promise(resolve => {
          for (let i = 0; i < 1000000; i += 1);
          resolve(
            (() => {
              expect(1).toBe(1);
              return 'asyncFunc done';
            })(),
          );
        });

        res.status(200).json(testRet);
      };
      app.post('/asyncWrapperErrorTest', asyncWrapper(asyncTestFunc));
      const response = await request(app).post('/asyncWrapperErrorTest').send();
      const resBody: IBResFormat = response.body as IBResFormat;
      expect(response.statusCode).toBe(500);
      expect(resBody.IBcode).toBe('5000');
    });
  });
});
