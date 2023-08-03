import { AutoMap } from '@automapper/classes';
import { FilmDto } from 'src/film/dto/film.dto';
import { Film } from 'src/film/entities/film.entity';

export class ActorDto {
  @AutoMap()
  actor_id: number;
  @AutoMap()
  first_name: string;
  @AutoMap()
  last_name: string;

  @AutoMap()
  films!: FilmDto[];
}
