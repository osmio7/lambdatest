import express from 'express';
import { handler } from './handler.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  // Simular un evento como lo haría API Gateway
  const event = {
    httpMethod: 'GET',
    path: '/',
  };
  const context = {};

  const result = await handler(event, context);
  
  res.status(result.statusCode).set(result.headers).send(result.body);
});

app.listen(PORT, () => {
  console.log(`Servidor local corriendo en http://localhost:${PORT}`);
});