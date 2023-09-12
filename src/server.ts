import cors from '@fastify/cors';
import fastify from 'fastify';
import { memoriesRoutes } from './routes/memories';

const app = fastify();

app.register(cors, {
  origin: true,
});

app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀🚀🚀 HTTP Server is running on http://localhost:3333');
  });
