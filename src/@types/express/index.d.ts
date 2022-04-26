// reference https://javascript.plainenglish.io/typed-express-request-and-response-with-typescript-7277aea028c
import { IBResFormat } from '@src/utils';
import { Send } from '@types/express-serve-static-core';
import { User } from '@prisma/client';

export {};
declare global {
  // interface ISignUpRequest {
  //   email: string;
  //   password: string;
  //   name: string;
  // }

  namespace Express {
    export interface IBAuthGuardRequest extends Express.Request {
      locals?: {
        user?: User;
        resMessages?: IBResFormat;
      };
    }

    export interface IBTypedReqBody<T> extends IBAuthGuardRequest {
      body: T;
    }

    export interface IBTypedResponse<ResBody> extends Express.Response {
      status(code: StatusCode): this;
      json: Send<ResBody, this>;
    }
    // export interface Request {
    //   locals?: {
    //     resMessages: IBResFormat;
    //   };
    // }
  }
}
