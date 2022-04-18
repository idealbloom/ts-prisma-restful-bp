import { IBResFormat } from '@src/utils';

declare global {
  interface ISignUpRequest {
    email: string;
    password: string;
    name: string;
  }
  namespace Express {
    export interface Request {
      locals?: {
        resMessages: IBResFormat;
      };
    }
  }
}
