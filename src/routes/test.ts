import express, { Request, Response } from 'express';

const testRouter: express.Application = express();

export const funcA = async (req: Request, res: Response) => {
  res.json('this is funcA');
};
export const funcB = async (req: Request, res: Response) => {
  res.json('this is funcB');
};

testRouter.get('/funcA', funcA);
testRouter.get('/funcB', funcB);

export default testRouter;
