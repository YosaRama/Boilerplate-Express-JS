import express, { json } from 'express';
import router from './routes';
import './utils/schedular';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

app.use('/', router);

export default app;
