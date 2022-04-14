import express, { Request, Response } from 'express';
import prisma from '@src/prisma';
import { ibDefs, IBDefFormat, asyncWrapper } from '@src/utils';
import _ from 'lodash';

// import bcrypt from 'bcrypt';

const authRouter: express.Application = express();

// class IBError extends Error {
//   message: keyof IBErrorsFormat;

//   constructor(message: keyof IBErrorsFormat) {
//     super(message);
//     this.name = 'IBError';
//     this.message = message;
//   }
// }

export const signIn = (req: Request, res: Response): void => {
  res.json('this is signIn');
};

interface ISignUpRequest {
  email: string;
  password: string;
  authNo: string;
}

export const signUp = asyncWrapper(async (req: Request, res: Response) => {
  const { email, password }: ISignUpRequest = req.body as ISignUpRequest;

  const createdUser = await prisma.user.create({
    data: {
      email,
      password,
    },
  });

  const userWithoutPw = _.omit(createdUser, ['password']);

  const result: IBDefFormat = {
    ...ibDefs.SUCCESS,
    IBparams: userWithoutPw,
  };

  res.json(result);
});

authRouter.post('/signIn', signIn);
authRouter.post('/signUp', signUp);

export default authRouter;
