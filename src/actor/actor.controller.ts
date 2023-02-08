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
import { PaginatedResponse } from 'src/common/paginated-response/paginated-response';
import { PaginationParams } from 'src/common/pagination-params/pagination-params';
import { Actor } from './actor.entity';
import { ActorService } from './actor.service';

@Controller('actor')
export class ActorController {
  constructor(private actorService: ActorService) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async getActors(@Query() query: PaginationParams, @Req() req: Request) {
    const { limit, offset, page } = query;
    const { rows, count } = await this.actorService.getActors(offset, limit);

    return new PaginatedResponse<Actor[]>(rows, page, limit, count, req);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.actorService.findById(id);
  }
}
