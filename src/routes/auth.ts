import express, { Request, Response } from 'express';
// import prisma from '@src/prisma';
import { ibDefs, IBDefFormat } from '@src/utils';
// import { isEmpty, isEqual } from 'lodash';
// import bcrypt from 'bcrypt';

const testRouter: express.Application = express();

// class IBError extends Error {
//   message: keyof IBErrorsFormat;

//   constructor(message: keyof IBErrorsFormat) {
//     super(message);
//     this.name = 'IBError';
//     this.message = message;
//   }
// }

export const signIn = (req: Request, res: Response) => {
  res.json('this is signIn');
};

interface ISignUpRequest {
  email: String;
  password: String;
  authNo: String;
}

export function signUp(req: Request, res: Response) {
  const { email, password, authNo }: ISignUpRequest =
    req.body as ISignUpRequest;
  const result: IBDefFormat = {
    ...ibDefs.SUCCESS,
    IBparams: {
      email,
      password,
      authNo,
    },
  };

  res.json(result);
}

export default testRouter;
