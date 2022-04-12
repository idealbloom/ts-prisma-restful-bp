import express, { Request, Response } from 'express';

const testRouter: express.Application = express();

export const signIn = async (req: Request, res: Response) => {
  res.json('this is signIn');
};

export const signUp = async (req: Request, res: Response) => {
  res.json('this is signUp');
};

testRouter.post('/signIn', signIn);

export default testRouter;
