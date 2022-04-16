import { ICreateLesson } from '../dtos/ILessons';
import { Lesson } from '../entities/Lesson';

export interface LessonsRepository {
  create(data: ICreateLesson): Promise<void>
  list(): Promise<Lesson[]>
}
