import { AutoMap } from '@automapper/classes';

export class ActorDto {
  @AutoMap()
  actor_id: number;
  @AutoMap()
  first_name: string;
}
