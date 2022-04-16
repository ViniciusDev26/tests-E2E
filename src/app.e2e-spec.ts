import request from 'supertest';
import { app } from './app';

test('[E2E CreateLesson]', async () => {
  const response = await request(app)
    .post('/lessons')
    .send({ title: 'Gaby' });

  expect(response.status).toBe(201);
  expect(response.body.error).toBeFalsy();
});
