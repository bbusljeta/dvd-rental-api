import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilmActor } from './film-actor.entity';
import { FilmActorRepository } from './film-actor.repository';
import { FilmActorMapperService } from './film-actor-mapper.service';

@Module({
  imports: [SequelizeModule.forFeature([FilmActor])],
  providers: [FilmActorRepository, FilmActorMapperService],
  exports: [FilmActorRepository, FilmActorMapperService],
})
export class FilmActorModule {}
