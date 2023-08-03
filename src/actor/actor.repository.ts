import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from 'src/category/entities/category.entity';
import { Film } from 'src/film/entities/film.entity';
import { Language } from 'src/language/entities/language.entity';
import { Actor } from './entities/actor.entity';

@Injectable()
export class ActorRepository {
  constructor(
    @InjectModel(Actor)
    private actor: typeof Actor,
  ) {}

  getAllActors() {
    return this.actor.findAll();
  }

  create(actor: Actor) {
    return this.actor.create({
      first_name: actor.first_name,
      last_name: actor.last_name,
    });
  }

  getActors(offset: number, limit: number) {
    return this.actor.findAndCountAll({
      limit,
      offset,
    });
  }

  getMoviesForActor(actorId: number) {
    return this.actor.findAll({
      where: {
        actor_id: actorId,
      },
      include: [
        {
          model: Film,
          through: { attributes: [] },
          attributes: [
            'film_id',
            'title',
            'description',
            'release_year',
            'length',
            'rating',
            'special_features',
            'rental_duration',
          ],
          include: [
            { model: Language, attributes: ['name', 'language_id'] },
            {
              model: Category,
              // this prevents join table properties in the returned model, comment out to see the effect
              through: { attributes: [] },
              attributes: ['name'],
            },
          ],
        },
      ],
    });
  }

  findById(id: string) {
    return this.actor.findByPk(id, {
      include: [{ model: Film, as: 'films', through: { attributes: [] } }],
    });
  }

  findByFirstName(name: string) {
    return this.actor.findAll({ where: { first_name: name } });
  }
}
