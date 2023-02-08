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
import { Actor } from './actor/actor.entity';
import { Category } from './category/category.entity';
import { Film } from './film/film.entity';
import { Language } from './language/language.entity';
import { FilmCategory } from './film-category/film-category.entity';
import { FilmActor } from './film-actor/film-actor.entity';
import { Customer } from './customer/customer.entity';
import { Address } from './address/address.entity';
import { City } from './city/city.entity';
import { Country } from './country/country.entity';
import { Staff } from './staff/staff.entity';
import { Store } from './store/store.entity';
import { Inventory } from './inventory/inventory.entity';
import { Rental } from './rental/rental.entity';
import { Payment } from './payment/payment.entity';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      useFactory: async (configService: ConfigService<DbContextEnv>) => {
        return {
          dialect: 'postgres',
          host: configService?.get('DATABASE_HOST') ?? '127.0.0.1',
          port: configService?.get('POSTGRES_PORT'),
          username: configService?.get('POSTGRES_USER') ?? 'postgres',
          password: configService?.get('POSTGRES_PASSWORD') ?? 'dev',
          database: configService?.get('POSTGRES_DB') ?? 'dvdrental',
          models: [
            Actor,
            Category,
            Film,
            Language,
            FilmCategory,
            FilmActor,
            Customer,
            Address,
            City,
            Country,
            Staff,
            Store,
            Inventory,
            Rental,
            Payment,
          ],
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
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
