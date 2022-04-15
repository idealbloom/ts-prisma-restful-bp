import express, { Request, Response } from 'express';
import prisma from '@src/prisma';
import { ibDefs, asyncWrapper } from '@src/utils';
import _, { isEmpty } from 'lodash';

import bcrypt from 'bcrypt';

const authRouter: express.Application = express();

export const signIn = (req: Request, res: Response): void => {
  res.json('this is signIn');
};

interface ISignUpRequest {
  email: string;
  password: string;
  name: string;
}

export const signUp = asyncWrapper(async (req: Request, res: Response) => {
  const {
    email = null,
    password = null,
    name = null,
  }: ISignUpRequest = req.body as ISignUpRequest;

  if (isEmpty(email) || isEmpty(password)) {
    res.status(400).json({ ...ibDefs.INVALIDPARAMS });
    return;
  }

  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  const createdUser = await prisma.user.upsert({
    where: {
      email,
    },
    update: {},
    create: {
      email,
      password: hash,
      name,
    },
  });

  const userWithoutPw = _.omit(createdUser, ['password']);

  res.json({
    ...ibDefs.SUCCESS,
    IBparams: userWithoutPw,
  });
});

// export const somethingFunc = asyncWrapper(
//   async (req: Request, res: Response, next: NextFunction) => {
//     /**
//      * do some async works in somethingFunc
//      */
//     /*
//      * somethingFunc-somethingHandler 예제와 같이 라우터 컨트롤러를 복수개 유지할 경우
//      * 다음 컨트롤러 함수로 변수를 넘길때 이용은 아래와 같이
//      * req 의 프로퍼티를 만들어 넘기는 것으로 한다.
//      * req.locals = {
//      *    resMessages: {
//      *    ...ibDefs.SUCCESS,
//      *  },
//      * };
//      * next(); // run next to somethingHandler...
//      */
//   },
// );
// authRouter.post('/somethingPath', somethingFunc, somethingHandler);

authRouter.post('/signIn', signIn);
authRouter.post('/signUp', signUp);

export default authRouter;
