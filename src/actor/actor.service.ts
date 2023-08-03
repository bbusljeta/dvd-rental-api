import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Actor } from './entities/actor.entity';
import { ActorRepository } from './actor.repository';
import { ActorDto } from './dto/actor.dto';
import { CreateActorDto } from './dto/createActor.dto';

@Injectable()
export class ActorService {
  constructor(
    private actorRepository: ActorRepository,
    @InjectMapper() private mapper: Mapper,
  ) {}

  getActors(offset: number, limit: number) {
    return this.actorRepository.getActors(offset, limit);
  }

  createActor(actor: CreateActorDto) {
    return this.actorRepository.create(new Actor({ ...actor }));
  }

  async findById(id: string) {
    const actor = await this.actorRepository.findById(id);
    if (!actor) {
      throw new NotFoundException();
    }

    return this.mapper.map(actor, Actor, ActorDto);
  }

  /*  findById(id: string) {
    return this.actorRepository.findById(id);
  } */

  findByFirstName(name: string) {
    return this.actorRepository.findByFirstName(name);
  }

  getActorFilms(actorId: number) {
    return this.actorRepository.getMoviesForActor(actorId);
  }
}
