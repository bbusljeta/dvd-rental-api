import { DataTypes } from 'sequelize';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  UpdatedAt,
  ForeignKey,
} from 'sequelize-typescript';
import { Country } from 'src/country/country.entity';
import tableNames from 'src/db-context/tableNames';

@Table({ tableName: tableNames?.city })
export class City extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  city_id: number;

  @Column(DataTypes.CHAR(50))
  city: string;

  @ForeignKey(() => Country)
  @Column(DataTypes.INTEGER)
  country_id: number;

  @Column
  @UpdatedAt
  last_update: Date;
}
