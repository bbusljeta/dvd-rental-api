import { Test, TestingModule } from '@nestjs/testing';
import { ActorProfile } from './actor-profile';

describe('ActorProfile', () => {
  let provider: ActorProfile;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActorProfile],
    }).compile();

    provider = module.get<ActorProfile>(ActorProfile);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
