import express, { Request, Response } from 'express';

const testRouter: express.Application = express();

export const funcA = (req: Request, res: Response): void => {
  res.json('this is funcA');
};
export const funcB = (req: Request, res: Response): void => {
  console.log(req.body);
  res.json('this is funcB');
};

testRouter.get('/funcA', funcA);
testRouter.post('/funcB', funcB);

export default testRouter;
