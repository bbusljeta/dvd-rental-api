import {
  Table,
  Column,
  Model,
  DataType,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import tableNames from 'src/db-context/tableNames';

@Table({ tableName: tableNames.staff })
export class Staff extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  staff_id: number;

  @Column(DataType.CHAR(45))
  first_name: string;

  @Column(DataType.CHAR(45))
  last_name: string;

  @Column(DataType.INTEGER)
  address_id: number;

  @Column(DataType.BOOLEAN)
  active: boolean;

  @Column(DataType.INTEGER)
  store_id: number;

  @Column(DataType.CHAR(16))
  username: string;

  @Column(DataType.CHAR(40))
  password: string;

  @Column(DataType.CHAR(50))
  emai: string;

  @Column(DataType.BLOB)
  picture: string;

  @Column
  @UpdatedAt
  last_update: Date;
}
