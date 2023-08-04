import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmController } from './film.controller';
import { FilmProfile } from './profile/film.profile';
import { SequelizeModule } from '@nestjs/sequelize';
import { Film } from './entities/film.entity';
import { FilmRepository } from './film.repository';
import { FilmActorProfile } from './profile/film-actor.profile';

@Module({
  imports: [SequelizeModule.forFeature([Film])],
  controllers: [FilmController],
  providers: [FilmService, FilmProfile, FilmRepository, FilmActorProfile],
})
export class FilmModule {}
