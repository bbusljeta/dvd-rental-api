import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmCategoryModule } from './film-category/film-category.module';
import { ActorModule } from './actor/actor.module';
import { FilmActorModule } from './film-actor/film-actor.module';
import { CategoryModule } from './category/category.module';
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { CustomerModule } from './customer/customer.module';
import { FilmModule } from './film/film.module';
import { LanguageModule } from './language/language.module';
import { StaffModule } from './staff/staff.module';
import { InventoryModule } from './inventory/inventory.module';
import { RentalModule } from './rental/rental.module';
import { PaymentModule } from './payment/payment.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { DbContextEnv } from './db-context/interfaces/db-context.env';
import { Actor } from './actor/entities/actor.entity';
import { FilmCategory } from './film-category/entities/film-category.entity';
import { FilmActor } from './film-actor/entities/film-actor.entity';
import { CommonModule } from './common/common.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { StoreModule } from './store/store.module';
import { AddressModule } from './address/address.module';
import { Category } from './category/entities/category.entity';
import { Film } from './film/entities/film.entity';
import { Language } from './language/entities/language.entity';
import { Customer } from './customer/entities/customer.entity';
import { Address } from './address/entities/address.entity';
import { City } from './city/entities/city.entity';
import { Country } from './country/entities/country.entity';
import { Staff } from './staff/entities/staff.entity';
import { Store } from './store/entities/store.entity';
import { Inventory } from './inventory/entities/inventory.entity';
import { Rental } from './rental/entities/rental.entity';
import { Payment } from './payment/entities/payment.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService<DbContextEnv>) => {
        return {
          dialect: 'postgres',
          host: configService?.get('DB_HOST'),
          port: configService?.get('DB_PORT'),
          username: configService?.get('DB_USER'),
          password: configService?.get('DB_PASSWORD'),
          database: configService?.get('DB_NAME'),
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
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
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
