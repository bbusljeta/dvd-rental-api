import { Injectable } from '@nestjs/common';
import { FilmActorDto } from './dto/film-actor.dto';
import { FilmActor } from './film-actor.entity';

@Injectable()
export class FilmActorMapperService {
  toDTO(entities: FilmActor[]): FilmActorDto[] {
    return entities.map((entity) => {
      const dto = new FilmActorDto();

      dto.film_id = entity.film_id;
      dto.title = entity.film.title;
      dto.description = entity.film.description;
      dto.release_year = entity.film.release_year;
      dto.length = entity.film.length;
      dto.rating = entity.film.rating;
      dto.special_features = [...entity.film.special_features];
      dto.language = entity.film.language.name;

      return dto;
    });
  }
}
