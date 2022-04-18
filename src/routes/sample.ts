import express, { Request, Response } from 'express';

const sampleRouter: express.Application = express();

export const funcA = (req: Request, res: Response): void => {
  res.json('this is funcA');
};
export const funcB = (req: Request, res: Response): void => {
  console.log(req.body);
  res.json('this is funcB');
};

sampleRouter.get('/funcA', funcA);
sampleRouter.post('/funcB', funcB);

export default sampleRouter;
