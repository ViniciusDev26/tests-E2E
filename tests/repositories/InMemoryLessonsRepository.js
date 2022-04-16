"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryLessonsRepository = void 0;
const Lesson_1 = require("../../src/entities/Lesson");
class InMemoryLessonsRepository {
    constructor() {
        this.lessons = [];
    }
    async list() {
        return this.lessons;
    }
    async create({ title, description }) {
        const newLesson = new Lesson_1.Lesson({ title, description });
        this.lessons.push(newLesson);
    }
}
exports.InMemoryLessonsRepository = InMemoryLessonsRepository;
