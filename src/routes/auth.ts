import express, { Request, Response } from 'express';

const testRouter: express.Application = express();

export const signIns = async (req: Request, res: Response) => {
  res.json('this is signIn');
};

testRouter.post('/signIn', signIns);

export default testRouter;
