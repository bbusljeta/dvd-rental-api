import { Injectable } from '@nestjs/common';
import { FilmActorMapperService } from 'src/film-actor/film-actor-mapper.service';
import { FilmActorRepository } from 'src/film-actor/film-actor.repository';
import { ActorRepository } from './actor.repository';

@Injectable()
export class ActorService {
  constructor(
    private actorRepository: ActorRepository,
    private filmActorRepository: FilmActorRepository,
    private filmActorMapperService: FilmActorMapperService,
  ) {}

  getActors(offset: number, limit: number) {
    return this.actorRepository.getActors(offset, limit);
  }

  findById(id: string) {
    return this.actorRepository.findById(id);
  }

  findByFirstName(name: string) {
    return this.actorRepository.findByFirstName(name);
  }

  async getActorFilms(actorId: number) {
    const data = await this.filmActorRepository.getActorFilms(actorId);
    return this.filmActorMapperService.toDTO(data);
  }
}
