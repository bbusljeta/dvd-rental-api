import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilmActor } from './entities/film-actor.entity';
import { FilmActorRepository } from './film-actor.repository';

@Module({
  imports: [SequelizeModule.forFeature([FilmActor])],
  providers: [FilmActorRepository],
  exports: [FilmActorRepository],
})
export class FilmActorModule {}
