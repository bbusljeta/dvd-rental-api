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

@Table({ tableName: tableNames.address })
export class Address extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  address_id: number;

  @Column(DataTypes.CHAR(50))
  address: string;

  @Column(DataTypes.CHAR(50))
  address2: string;

  @Column(DataTypes.CHAR(20))
  district: string;

  @Column(DataTypes.INTEGER)
  city_id: number;

  @Column(DataTypes.CHAR(10))
  postal_code: string;

  @Column(DataTypes.CHAR(20))
  phone: string;

  @Column
  @UpdatedAt
  last_update: Date;
}
