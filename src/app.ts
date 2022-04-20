import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import sampleRouter from './routes/sample';
import authRouter from './routes/auth';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET || 'default_cookie_secret_16'));

app.use('/test', sampleRouter);
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
