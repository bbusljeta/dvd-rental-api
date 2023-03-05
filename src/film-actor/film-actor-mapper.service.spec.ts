import { Test, TestingModule } from '@nestjs/testing';
import { FilmActorMapperService } from './film-actor-mapper.service';

describe('FilmActorMapperService', () => {
  let service: FilmActorMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmActorMapperService],
    }).compile();

    service = module.get<FilmActorMapperService>(FilmActorMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
