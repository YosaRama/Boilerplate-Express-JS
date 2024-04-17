import app from './app';
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () =>
  console.log(`App listening at port ${HOST}:${PORT}`)
);
