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
import { Address } from 'src/address/entities/address.entity';
import tableNames from 'src/db-context/tableNames';
import { Store } from 'src/store/entities/store.entity';

@Table({ tableName: tableNames?.staff })
export class Staff extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  staff_id: number;

  @Column(DataType.STRING(45))
  first_name: string;

  @Column(DataType.STRING(45))
  last_name: string;

  @ForeignKey(() => Address)
  @Column(DataType.INTEGER)
  address_id: number;

  /* @HasOne(() => Address)
    address: Address; */

  @Column(DataType.BOOLEAN)
  active: boolean;

  @ForeignKey(() => Store)
  @Column(DataType.INTEGER)
  store_id: number;

  @BelongsTo(() => Store)
  store: Store;

  @Column(DataType.STRING(16))
  username: string;

  @Column(DataType.STRING(40))
  password: string;

  @Column(DataType.STRING(50))
  emai: string;

  @Column(DataType.BLOB)
  picture: string;

  @Column
  @UpdatedAt
  last_update: Date;
}
