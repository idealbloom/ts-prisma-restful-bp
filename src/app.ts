import express, {Request, Response, NextFunction } from 'express';
import testRouter, {funcA, funcB} from './routes/test';
const app: express.Application = express();

app.use('/test', testRouter);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello world!');
});

// app.get('/resJsonTest', (req: express.Request, res: express.Response) => {
//     res.json([
//       { id: 1, content: 'hello' },
//       { id: 2, content: 'hello2' },
//       { id: 3, content: 'hello3' },
//     ]);
// });


app.listen('3000', ()=>{
    console.log(`ts-express Server listening on port: 3000`)
});