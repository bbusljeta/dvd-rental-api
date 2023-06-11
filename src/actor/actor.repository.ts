import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Actor } from './entities/actor.entity';

@Injectable()
export class ActorRepository {
  constructor(
    @InjectModel(Actor)
    private actor: typeof Actor,
  ) {}

  async getAllActors() {
    return this.actor.findAll();
  }

  async getActors(offset: number, limit: number) {
    return this.actor.findAndCountAll({
      limit,
      offset,
    });
  }

  async findById(id: string) {
    return this.actor.findByPk(id);
  }

  async findByFirstName(name: string) {
    return this.actor.findAll({ where: { first_name: name } });
  }
}
