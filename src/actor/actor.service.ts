import { Inject, Injectable } from '@nestjs/common';
import { FilmActorMapperService } from 'src/film-actor/film-actor-mapper.service';
import { FilmActorRepository } from 'src/film-actor/film-actor.repository';
import { ActorRepository } from './actor.repository';

@Injectable()
export class ActorService {
  constructor(
    private actorRepository: ActorRepository,
    @Inject(FilmActorRepository)
    private filmActorRepository: FilmActorRepository,
    @Inject(FilmActorMapperService)
    private filmActorMapperService: FilmActorMapperService,
  ) {}

  async getActors(offset: number, limit: number) {
    return this.actorRepository.getActors(offset, limit);
  }

  async findById(id: string) {
    return this.actorRepository.findById(id);
  }

  async findByFirstName(name: string) {
    return this.actorRepository.findByFirstName(name);
  }

  async getActorFilms(actorId: number) {
    const data = await this.filmActorRepository.getActorFilms(actorId);
    return this.filmActorMapperService.toDTO(data);
  }
}
