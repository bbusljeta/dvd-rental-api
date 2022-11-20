import { Module } from '@nestjs/common';
import { databaseProviders } from './db-context';

@Module({
  providers: [...databaseProviders],
})
export class DbContextModule {}
