import { v4 as uuidV4 } from 'uuid';
import { ICreateLesson } from '../dtos/ILessons';
class Lesson {
  id: string;
  title: string;
  description: string | null;

  constructor({title, description}: ICreateLesson) {
    this.id = uuidV4();
    this.title = title;
    this.description = description ?? null;
  }
}

export { Lesson }