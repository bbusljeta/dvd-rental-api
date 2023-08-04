import { Test, TestingModule } from '@nestjs/testing';
import { FilmRepository } from './film.repository';

describe('FilmRepository', () => {
  let provider: FilmRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmRepository],
    }).compile();

    provider = module.get<FilmRepository>(FilmRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
