import { ConfigModule, ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
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
        models: [__dirname + '/models/**/*.entity.ts'],
        modelMatch: (filename, member) => {
          return (
            filename.substring(0, filename.indexOf('.entity')) ===
            member.toLowerCase()
          );
        },
      });

      //await sequelize.sync({ force: false });
      return sequelize;
    },
  },
];
