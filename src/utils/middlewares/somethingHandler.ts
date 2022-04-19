import { Express, Response } from 'express';

const somethingHandler = (
  req: Express.IBTypedReqBody<{}>,
  res: Response,
  //   next: NextFunction,
): void => {
  const {
    locals: { resMessages },
  } = req;

  if (resMessages) res.json(resMessages);
};

export default somethingHandler;
