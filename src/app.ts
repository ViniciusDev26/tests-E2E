import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { PrismaLessonsRepository } from './repositories/prisma/PrismaLessonsRepository';
import { CreateLesson } from './services/CreateLesson';

export const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => response.send('hello gaby'));

app.post('/lessons', async (request, response) => {
  const { title, description } = request.body;

  const prismaLessonsRepository = new PrismaLessonsRepository();
  const createLesson = new CreateLesson(prismaLessonsRepository);

  try {
    await createLesson.execute({ title, description });

    return response.status(201).send();
  } catch (error: any) {
    return response.status(400).json({ error: error.message });
  }
});
