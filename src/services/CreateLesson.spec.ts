import { InMemoryLessonsRepository } from '../../tests/repositories/InMemoryLessonsRepository';
import { CreateLesson } from './CreateLesson';

describe('CreateLesson Service', () => {
  it('should be able to create a new lesson without description', async () => {
    const inMemoryLessonsRepository = new InMemoryLessonsRepository();
    const createLesson = new CreateLesson(inMemoryLessonsRepository);

    await expect(createLesson.execute({ title: 'Gaby' }))
      .resolves
      .not
      .toThrow();

    expect(await inMemoryLessonsRepository.list()).toEqual(expect.arrayContaining([
      expect.objectContaining({
        title: 'Gaby',
      }),
    ]));
  });

  test('should be able to create a new lesson with description', async () => {
    const inMemoryLessonsRepository = new InMemoryLessonsRepository();
    const createLesson = new CreateLesson(inMemoryLessonsRepository);

    await expect(createLesson.execute({ title: 'Gaby', description: 'Gaby love Carlos' }))
      .resolves
      .not
      .toThrow();

    expect(await inMemoryLessonsRepository.list()).toEqual(expect.arrayContaining([
      expect.objectContaining({
        title: 'Gaby',
        description: 'Gaby love Carlos',
      }),
    ]));
  });

  test('should NOT be able to create a new lesson with invalid title', async () => {
    const inMemoryLessonsRepository = new InMemoryLessonsRepository();
    const createLesson = new CreateLesson(inMemoryLessonsRepository);

    await expect(createLesson.execute({ title: '' }))
      .rejects
      .toThrow();

    expect(await inMemoryLessonsRepository.list()).toEqual([]);
  });
});
