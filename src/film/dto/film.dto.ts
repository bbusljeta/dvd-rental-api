import { AutoMap } from '@automapper/classes';
import { ActorDto } from 'src/actor/dto/actor.dto';

export class FilmDto {
  @AutoMap()
  film_id: number;

  //categories: CategoryDto[];

  @AutoMap()
  actors!: ActorDto[];

  @AutoMap()
  title: string;

  @AutoMap()
  rating: string;

  @AutoMap()
  description: string;

  @AutoMap()
  special_features: string;

  @AutoMap()
  release_year: string;
  /*  
  language_id: number;
  language: LanguageDto;
  rental_duration: number;
  rental_rate: number;
  length: number;
  rating: string;
 */
}
