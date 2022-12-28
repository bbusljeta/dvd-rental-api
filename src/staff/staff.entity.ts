import {
  Table,
  Column,
  Model,
  DataType,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  HasOne,
  BelongsTo,
} from 'sequelize-typescript';
import { Address } from 'src/address/address.entity';
import tableNames from 'src/db-context/tableNames';
import { Store } from 'src/store/store.entity';

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

  @ForeignKey(() => Address)
  @Column(DataType.INTEGER)
  address_id: number;

  @HasOne(() => Address)
  address: Address;

  @Column(DataType.BOOLEAN)
  active: boolean;

  @ForeignKey(() => Store)
  @Column(DataType.INTEGER)
  store_id: number;

  @BelongsTo(() => Store)
  store: Store;

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
