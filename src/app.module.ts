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
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';

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
    CityModule,
    CountryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
