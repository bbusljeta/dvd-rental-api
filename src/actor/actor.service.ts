import { Injectable } from '@nestjs/common';
import { ActorRepository } from './actor.repository';

@Injectable()
export class ActorService {
  constructor(private actorRepository: ActorRepository) {}

  async getActors(offset: number, limit: number) {
    return this.actorRepository.getActors(offset, limit);
  }

  async findById(id: string) {
    return this.actorRepository.findById(id);
  }

  async findByFirstName(name: string) {
    return this.actorRepository.findByFirstName(name);
  }
}
