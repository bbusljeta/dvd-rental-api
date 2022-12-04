import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
import { StaffModule } from './staff/staff.module';
import { StoreModule } from './store/store.module';
import { InventoryModule } from './inventory/inventory.module';
import { RentalModule } from './rental/rental.module';
import { PaymentModule } from './payment/payment.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { DbContextEnv } from './db-context/interfaces/db-context.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      useFactory: async (configService: ConfigService<DbContextEnv>) => {
        return {
          dialect: 'postgres',
          host: configService.get('DATABASE_HOST'),
          port: configService.get('POSTGRES_PORT'),
          username: configService.get('POSTGRES_USER'),
          password: configService.get('POSTGRES_PASSWORD'),
          database: configService.get('POSTGRES_DB'),
        };
      },
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
    StaffModule,
    StoreModule,
    InventoryModule,
    RentalModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
