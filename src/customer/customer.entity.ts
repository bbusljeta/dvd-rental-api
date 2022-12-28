import { DataTypes } from 'sequelize';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  UpdatedAt,
  CreatedAt,
  ForeignKey,
} from 'sequelize-typescript';
import { Address } from 'src/address/address.entity';
import tableNames from 'src/db-context/tableNames';

@Table({ tableName: tableNames.customer })
export class Customer extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  customer_id: number;

  @Column(DataTypes.CHAR(45))
  first_name: string;

  @Column(DataTypes.CHAR(45))
  last_name: string;

  @Column(DataTypes.CHAR(45))
  email: string;

  @ForeignKey(() => Address)
  @Column(DataTypes.INTEGER)
  address_id: number;

  @Column(DataTypes.BOOLEAN)
  activebool: boolean;

  @Column(DataTypes.NUMBER({ length: 4 }))
  active: number;

  @Column
  @CreatedAt
  create_date: Date;

  @Column
  @UpdatedAt
  last_update: Date;
}
