import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { FilmModule } from './film/film.module';
import { LanguageModule } from './language/language.module';
import { FilmCategoryModule } from './film-category/film-category.module';
import { ActorModule } from './actor/actor.module';
import { FilmActorModule } from './film-actor/film-actor.module';
import { CustomerModule } from './customer/customer.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CategoryModule,
    FilmModule,
    LanguageModule,
    FilmCategoryModule,
    ActorModule,
    FilmActorModule,
    CustomerModule,
    AddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
