import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Film } from 'src/film/entities/film.entity';
import { Language } from 'src/language/entities/language.entity';

import { FilmActor } from './entities/film-actor.entity';

@Injectable()
export class FilmActorRepository {
  constructor(@InjectModel(FilmActor) private filmActor: typeof FilmActor) {}

  async getActorFilms(actorId: number) {
    return this.filmActor.findAll({
      where: {
        actor_id: actorId,
      },
      include: [
        {
          model: Film,
          attributes: [
            'title',
            'description',
            'release_year',
            'length',
            'rating',
            'special_features',
          ],
          include: [{ model: Language, attributes: ['name'] }],
        },
      ],
      attributes: ['film_id'],
    });
  }
}
