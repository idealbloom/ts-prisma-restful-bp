import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import passport from 'passport';
import dotenv from 'dotenv';
import authRouter from './routes/auth';

import passportConfig from './passport';

const app: express.Application = express();

dotenv.config();
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET || 'default_cookie_secret_16'));

app.use(passport.initialize());
// app.use(passport.session());
passportConfig(passport);

app.use('/auth', authRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('hello world!!!');
});

// app.get('/resJsonTest', (req: express.Request, res: express.Response) => {
//     res.json([
//       { id: 1, content: 'hello' },
//       { id: 2, content: 'hello2' },
//       { id: 3, content: 'hello3' },
//     ]);
// });

// app.listen(process.env.PORT, () => {
//   console.log(`ts-express Server listening on port: ${process.env.PORT}`);
// });

export default app;
