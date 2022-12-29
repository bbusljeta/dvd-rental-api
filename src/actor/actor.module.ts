import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Actor } from './actor.entity';
import { ActorRepository } from './actor.repository';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';

@Module({
  imports: [SequelizeModule.forFeature([Actor])],
  providers: [ActorRepository, ActorService],
  controllers: [ActorController],
})
export class ActorModule {}
