import { Test, TestingModule } from '@nestjs/testing';
import { FilmActorRepository } from './film-actor.repository';

describe('FilmActorRepository', () => {
  let provider: FilmActorRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmActorRepository],
    }).compile();

    provider = module.get<FilmActorRepository>(FilmActorRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
