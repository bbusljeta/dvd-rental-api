import { Controller, Get } from '@nestjs/common';
import { ActorService } from './actor.service';

@Controller('actor')
export class ActorController {
  constructor(private actorService: ActorService) {}

  @Get()
  async findAll() {
    return this.actorService.findAll();
  }
}
