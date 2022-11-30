import { DataTypes } from 'sequelize';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  UpdatedAt,
} from 'sequelize-typescript';
import tableNames from 'src/db-context/tableNames';

@Table({ tableName: tableNames.city })
export class City extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  city_id: number;

  @Column(DataTypes.CHAR(50))
  city: string;

  @Column(DataTypes.INTEGER)
  country_id: number;

  @Column
  @UpdatedAt
  last_update: Date;
}
