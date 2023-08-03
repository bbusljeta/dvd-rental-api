import { PickType } from '@nestjs/swagger';
import { ActorDto } from './actor.dto';

export class CreateActorDto extends PickType(ActorDto, [
  'first_name',
  'last_name',
] as const) {}
