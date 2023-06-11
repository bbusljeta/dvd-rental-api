import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Actor } from './entities/actor.entity';
import { ActorRepository } from './actor.repository';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';
import { FilmActorModule } from 'src/film-actor/film-actor.module';
import { ActorProfile } from './profile/actor-profile/actor-profile';

@Module({
  imports: [SequelizeModule.forFeature([Actor]), FilmActorModule],
  providers: [ActorRepository, ActorService, ActorProfile],
  controllers: [ActorController],
})
export class ActorModule {}
