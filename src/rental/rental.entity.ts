import {
  Table,
  Column,
  Model,
  DataType,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
  HasOne,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Customer } from 'src/customer/customer.entity';
import tableNames from 'src/db-context/tableNames';
import { Inventory } from 'src/inventory/inventory.entity';
import { Staff } from 'src/staff/staff.entity';

@Table({ tableName: tableNames?.rental })
export class Rental extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  rental_id: number;

  @Column(DataType.DATE)
  rental_date: string;

  @Column(DataType.DATE)
  return_date: string;

  @ForeignKey(() => Inventory)
  @Column(DataType.INTEGER)
  inventory_id: number;

  @BelongsTo(() => Inventory)
  inventory: Inventory;

  @ForeignKey(() => Customer)
  @Column(DataType.INTEGER)
  customer_id: number;

  /*  @HasOne(() => Customer)
  customer: Customer; */

  @ForeignKey(() => Staff)
  @Column(DataType.INTEGER)
  staff_id: number;

  /*  @HasOne(() => Staff)
  staff: Staff; */

  @Column
  @UpdatedAt
  last_update: Date;
}
