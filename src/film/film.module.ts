import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmController } from './film.controller';
import { FilmProfile } from './profile/film.profile/film.profile';
import { SequelizeModule } from '@nestjs/sequelize';
import { Film } from './entities/film.entity';

@Module({
  imports: [SequelizeModule.forFeature([Film])],
  controllers: [FilmController],
  providers: [FilmService, FilmProfile],
})
export class FilmModule {}
