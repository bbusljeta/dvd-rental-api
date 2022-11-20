import { Test, TestingModule } from '@nestjs/testing';
import { DbContext } from './db-context';

describe('DbContext', () => {
  let provider: DbContext;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbContext],
    }).compile();

    provider = module.get<DbContext>(DbContext);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
