import { NextFunction, Request, Response } from 'express';

declare type AsyncFn = (req: Request, res: Response) => Promise<void>;
const asyncWrapper = (asyncFn: AsyncFn) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      asyncFn(req, res).catch(next);
    } catch (e) {
      next(e);
    }
  };
};

export default asyncWrapper;
