import request from 'supertest';
import app from '@src/app';
import prisma from '@src/prisma';
import { User } from '@prisma/client';
import { IBResFormat, ibDefs } from '@src/utils';
import bcrypt from 'bcrypt';

describe('Auth Express Router E2E Test', () => {
  describe('POST /signIn', () => {
    it('Case: Correct', async () => {
      const response = await request(app).post('/auth/signIn').send();
      const result: IBResFormat = response.body as IBResFormat;

      expect(result).toEqual({ ...ibDefs.SUCCESS });
    });
  });

  describe('POST /signup', () => {
    it('Case: Correct', async () => {
      const inputParams = {
        email: 'test@gmail.com',
        password: 'testPassword',
        name: 'testName',
      };
      const response = await request(app)
        .post('/auth/signUp')
        .send(inputParams);

      const { IBcode, IBparams }: IBResFormat = response.body as IBResFormat;
      expect(IBcode).toEqual('1000');
      // expect(IBparams).not.toMatch({});
      expect(IBparams).not.toBeNull();

      const { id }: { id: number } = IBparams as User;
      const [user] = await prisma.user.findMany({
        where: {
          id,
        },
      });
      // console.log(user);
      expect(response.statusCode).toEqual(200);
      expect(user.email).toBe(inputParams.email);
      const passwordMatch = await bcrypt.compare(
        inputParams.password,
        user.password,
      );
      expect(passwordMatch).toBe(true);
      expect(user.name).toBe(inputParams.name);
    });

    it('Case: Invalid Params', async () => {
      let inputParams = {
        email: 'test@gmail.com',
        password: '',
        name: 'testName',
      };
      let response = await request(app).post('/auth/signUp').send(inputParams);

      const { IBcode }: IBResFormat = response.body as IBResFormat;
      expect(response.statusCode).toEqual(400);
      expect(IBcode).toEqual('3001');

      inputParams = {
        email: '',
        password: '1234',
        name: 'testName',
      };
      response = await request(app).post('/auth/signUp').send(inputParams);

      const { IBcode: case2IBcode }: IBResFormat = response.body as IBResFormat;
      expect(response.statusCode).toEqual(400);
      expect(case2IBcode).toEqual('3001');

      const invalidCaseParams = {};
      response = await request(app)
        .post('/auth/signUp')
        .send(invalidCaseParams);

      const { IBcode: case3IBcode }: IBResFormat = response.body as IBResFormat;
      expect(response.statusCode).toEqual(400);
      expect(case3IBcode).toEqual('3001');
    });
  });
});
