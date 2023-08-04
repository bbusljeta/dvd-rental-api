import { AutoMap } from '@automapper/classes';

// notice missing films compared to ActorDto
export class FilmActorDto {
  @AutoMap()
  actor_id: number;
  @AutoMap()
  first_name: string;
  @AutoMap()
  last_name: string;
}
