import { Test, TestingModule } from '@nestjs/testing';
import { FilmActorProfile } from './film-actor.profile';

describe('FilmActorProfile', () => {
  let provider: FilmActorProfile;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmActorProfile],
    }).compile();

    provider = module.get<FilmActorProfile>(FilmActorProfile);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
