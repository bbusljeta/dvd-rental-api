import { ConfigModule, ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize';
import { DbContextEnv } from './interfaces/db-context.env';

export enum Provider {
  Sequelize = 'SEQUELIZE',
}

export const databaseProviders = [
  {
    provide: Provider.Sequelize,
    Inject: [ConfigModule],
    useFactory: async (configService: ConfigService<DbContextEnv>) => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
      });

      //await sequelize.sync({ force: false });
      return sequelize;
    },
  },
];
