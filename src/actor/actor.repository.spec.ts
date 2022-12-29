import { Test, TestingModule } from '@nestjs/testing';
import { ActorRepository } from './actor.repository';

describe('ActorRepository', () => {
  let provider: ActorRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActorRepository],
    }).compile();

    provider = module.get<ActorRepository>(ActorRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
