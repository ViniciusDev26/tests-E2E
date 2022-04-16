import { Lesson } from '../../src/entities/Lesson';
import { ICreateLesson } from '../../src/dtos/ILessons';
import { LessonsRepository } from '../../src/repositories/LessonsRepository';

export class InMemoryLessonsRepository implements LessonsRepository {
  private lessons: Lesson[] = [];

  async list(): Promise<Lesson[]> {
    return this.lessons;
  }

  async create({ title, description }: ICreateLesson) {
    const newLesson = new Lesson({ title, description });

    this.lessons.push(newLesson);
  }
}
