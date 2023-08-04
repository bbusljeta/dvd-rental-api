import {
  createMap,
  forMember,
  ignore,
  Mapper,
  MappingProfile,
} from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { ActorDto } from 'src/actor/dto/actor.dto';
import { Actor } from 'src/actor/entities/actor.entity';
import { FilmActorDto } from '../dto/film-actor.dto';

@Injectable()
export class FilmActorProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  // ActorDto has films which have all films for a particular actor
  // we don't want to map them since we want to display all actors for a film without additional films in the actor dto
  // this example shows 2 ways of dealing with such a case, using a separate FilmActorDto or using the ignore function.
  get profile(): MappingProfile {
    return (mapper: Mapper) => {
      //createMap(mapper, Actor, FilmActorDto);
      createMap(
        mapper,
        Actor,
        ActorDto,
        forMember((destination) => destination.films, ignore()),
      );
    };
  }
}
