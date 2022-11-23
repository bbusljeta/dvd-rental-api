import { DataTypes } from 'sequelize';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  UpdatedAt,
} from 'sequelize-typescript';
import { tableNames } from 'src/db-context/tableNames';

@Table({ tableName: tableNames.country })
export class Country extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  customer_id: number;

  @Column(DataTypes.CHAR(50))
  country: string;

  @Column
  @UpdatedAt
  last_update: Date;
}
