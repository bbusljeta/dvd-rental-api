import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { FilmActorRepository } from 'src/film-actor/film-actor.repository';
import { Actor } from './entities/actor.entity';
import { ActorRepository } from './actor.repository';
import { ActorDto } from './dto/actor.dto';

@Injectable()
export class ActorService {
  constructor(
    private actorRepository: ActorRepository,
    private filmActorRepository: FilmActorRepository,
    @InjectMapper() private mapper: Mapper,
  ) {}

  getActors(offset: number, limit: number) {
    return this.actorRepository.getActors(offset, limit);
  }

  async findById(id: string) {
    const actor = await this.actorRepository.findById(id);
    return this.mapper.map(actor, Actor, ActorDto);
  }

  /*  findById(id: string) {
    return this.actorRepository.findById(id);
  } */

  findByFirstName(name: string) {
    return this.actorRepository.findByFirstName(name);
  }

  getActorFilms(actorId: number) {
    return this.filmActorRepository.getActorFilms(actorId);
  }
}
