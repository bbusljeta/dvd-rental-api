import {
  createMap,
  forMember,
  mapFrom,
  Mapper,
  MappingProfile,
} from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Actor } from 'src/actor/entities/actor.entity';
import { ActorDto } from 'src/actor/dto/actor.dto';
import { Film } from 'src/film/entities/film.entity';
import { FilmDto } from 'src/film/dto/film.dto';

@Injectable()
export class FilmProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  get profile(): MappingProfile {
    return (mapper: Mapper) => {
      createMap(mapper, Film, FilmDto);
    };
  }
}
