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
import { City } from 'src/city/city.entity';
import tableNames from 'src/db-context/tableNames';

@Table({ tableName: tableNames?.address })
export class Address extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  address_id: number;

  @Column(DataTypes.CHAR(50))
  address: string;

  @Column(DataTypes.CHAR(50))
  address2: string;

  @Column(DataTypes.CHAR(20))
  district: string;

  @ForeignKey(() => City)
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
