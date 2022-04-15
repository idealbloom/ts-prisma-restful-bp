import { IBResFormat } from '@src/utils';

declare global {
  namespace Express {
    export interface Request {
      locals?: {
        resMessages: IBResFormat;
      };
    }
  }
}
