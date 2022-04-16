import { prisma } from "../../connections/prisma";
import { ICreateLesson } from "../../dtos/ILessons";
import { Lesson } from "../../entities/Lesson";
import { LessonsRepository } from "../LessonsRepository";

export class PrismaLessonsRepository implements LessonsRepository {
  
  async list(): Promise<Lesson[]> {
    return prisma.lesson.findMany();
  }
  
  async create({title, description}: ICreateLesson) {
    await prisma.lesson.create({
      data: {
        title,
        description
      }
    })
  }
}