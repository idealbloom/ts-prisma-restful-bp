// reference https://javascript.plainenglish.io/typed-express-request-and-response-with-typescript-7277aea028c
import { IBResFormat } from '@src/utils';
import type { Send } from 'express-serve-static-core';
import { User } from '@prisma/client';

export {};
declare global {
  // interface ISignUpRequest {
  //   email: string;
  //   password: string;
  //   name: string;
  // }

  type StatusCode =
    | 100
    | 101
    | 200
    | 201
    | 202
    | 203
    | 204
    | 205
    | 206
    | 300
    | 301
    | 302
    | 303
    | 304
    | 307
    | 400
    | 401
    | 402
    | 403
    | 404
    | 405
    | 406
    | 407
    | 408
    | 409
    | 410
    | 411
    | 412
    | 413
    | 414
    | 415
    | 416
    | 417
    | 500
    | 501
    | 502
    | 503
    | 504
    | 505;

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
