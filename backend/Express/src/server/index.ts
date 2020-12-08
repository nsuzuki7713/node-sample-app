import Express from 'express';
import cors from 'cors';
import { Health } from '../types/api';

const app = Express();

// CORS対応
app.use(cors());

// Router
app.get('/', (req, res) => {
  const data = { message: 'pong' };
  res.send(data);
});
app.get('/api/health', (req, res) => {
  const data: Health = { message: 'health' };
  res.send(data);
});
// routeに一致しないRequest
app.use((req, res, next) => {
  res.sendStatus(404);
  next({ statusCode: 404 });
});
// Error Route
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: { statusCode: number }, req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  console.log(err.statusCode);
});

// Express Serverの起動
const port = 8888;
const host = 'localhost';
app.listen(port, host, () => {
  console.log(`Runnig on http://${host}:${port}`);
});
