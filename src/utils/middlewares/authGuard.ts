/* eslint-disable @typescript-eslint/no-unsafe-call */
import passport from 'passport';
import { User } from '@prisma/client';
import { NextFunction } from 'express';
import { ibDefs, IBResFormat } from '../IBDefinitions';

const accessTokenValidCheck = (
  req: Express.IBAuthGuardRequest,
  res: Express.IBTypedResponse<IBResFormat>,
  next: NextFunction,
): void => {
  passport.authenticate(
    'jwt',
    (authError: Error, user: User, info: { name: string; message: string }) => {
      // console.log(authError, user, info);

      if (info && info.name === 'TokenExpiredError') {
        res.status(401).json({
          ...ibDefs.TOKENEXPIRED,
        });
        return;
      }
      if (info && info.name === 'JsonWebTokenError') {
        res.json({
          ...ibDefs.JWTERROR,
          IBdetail: info.message,
        });
        return;
      }
      if (info && info.name === 'Error') {
        res.status(401).json({
          ...ibDefs.NOAUTHTOKEN,
        });
        return;
      }

      req.locals = {
        ...req.locals,
        user,
      };
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      next();
    },
  )(req, res);
};
export default accessTokenValidCheck;
