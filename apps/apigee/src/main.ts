import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './db';
import studentRouter from './routers/student';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use(studentRouter);

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
