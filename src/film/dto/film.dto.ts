import { AutoMap } from '@automapper/classes';

export class FilmDto {
  @AutoMap()
  film_id: number;

  //categories: CategoryDto[];

  @AutoMap()
  title: string;

  @AutoMap()
  rating: string;
  /*  description: string;
  release_year: number;
  language_id: number;
  language: LanguageDto;
  rental_duration: number;
  rental_rate: number;
  length: number;
  rating: string;
  special_features: string[]; */
}
