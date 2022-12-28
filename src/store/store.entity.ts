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
} from 'sequelize-typescript';
import { Address } from 'src/address/address.entity';
import tableNames from 'src/db-context/tableNames';
import { Staff } from 'src/staff/staff.entity';

@Table({ tableName: tableNames.store })
export class Store extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  store_id: number;

  @ForeignKey(() => Staff)
  @Column(DataType.INTEGER)
  manager_staff_id: number;

  @HasOne(() => Staff)
  manager: Staff;

  @ForeignKey(() => Address)
  @Column(DataType.INTEGER)
  address_id: number;

  @HasOne(() => Address)
  address: Address;

  @Column
  @UpdatedAt
  last_update: Date;
}
