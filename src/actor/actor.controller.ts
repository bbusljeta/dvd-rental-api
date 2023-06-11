import {
  Controller,
  Get,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { PaginatedResponseDTO } from 'src/common/paginated-response/paginated-response';
import { PaginationParams } from 'src/common/pagination-params/pagination-params';
import { Actor } from './entities/actor.entity';
import { ActorService } from './actor.service';

@Controller('actors')
export class ActorController {
  constructor(private actorService: ActorService) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async getActors(@Query() query: PaginationParams, @Req() req: Request) {
    const { limit, offset, page } = query;
    const { rows, count } = await this.actorService.getActors(offset, limit);

    return new PaginatedResponseDTO<Actor[]>(rows, page, limit, count, req);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.actorService.findById(id);
  }

  @Get(':id/films')
  async getActorFilms(@Param('id') id: string) {
    return this.actorService.getActorFilms(Number(id));
  }
}
