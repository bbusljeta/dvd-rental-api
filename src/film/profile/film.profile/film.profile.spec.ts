import { Test, TestingModule } from '@nestjs/testing';
import { FilmProfile } from './film.profile';

describe('FilmProfile', () => {
  let provider: FilmProfile;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmProfile],
    }).compile();

    provider = module.get<FilmProfile>(FilmProfile);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
