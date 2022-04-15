import { Request, Response } from 'express';

const somethingHandler = (
  req: Request,
  res: Response,
  //   next: NextFunction,
): void => {
  const {
    locals: { resMessages },
  } = req;

  if (resMessages) res.json(resMessages);
};

export default somethingHandler;
