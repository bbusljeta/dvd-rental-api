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

@Injectable()
export class ActorProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  /*  get profile(): MappingProfile {
    return (mapper: Mapper) => {
      createMap(
        mapper,
        Actor,
        ActorDto,
        forMember(
          (destination) => destination.first_name,
          mapFrom((source) => source.first_name),
        ),
        forMember(
          (destination) => destination.isRambo,
          mapFrom((source) => source.first_name === 'Sylvester'),
        ),
      );
    };
  } */

  get profile(): MappingProfile {
    return (mapper: Mapper) => {
      createMap(mapper, Actor, ActorDto);
    };
  }
}
