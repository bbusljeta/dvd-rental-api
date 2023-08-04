import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Actor } from 'src/actor/entities/actor.entity';
import { Film } from './entities/film.entity';

@Injectable()
export class FilmRepository {
  constructor(
    @InjectModel(Film)
    private film: typeof Film,
  ) {}

  findById(id: number) {
    return this.film.findByPk(id, {
      attributes: [
        'film_id',
        'title',
        'description',
        'release_year',
        'rating',
        'special_features',
      ],
      include: [
        {
          model: Actor,
          as: 'actors',
          attributes: ['actor_id', 'first_name', 'last_name'],
          through: { attributes: [] },
        },
      ],
    });
  }
}
