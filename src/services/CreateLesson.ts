import { LessonsRepository } from '../repositories/LessonsRepository';

interface ICreateLessonRequest {
  title: string,
  description?: string
}

export class CreateLesson {
  constructor(
    private lessonsRepository: LessonsRepository,
  ) {}

  async execute({ title, description }: ICreateLessonRequest) {
    if (!title) {
      throw new Error('title is required');
    }

    await this.lessonsRepository.create({ title, description });
  }
}
