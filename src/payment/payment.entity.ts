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
} from 'sequelize-typescript';
import { Customer } from 'src/customer/customer.entity';
import tableNames from 'src/db-context/tableNames';
import { Rental } from 'src/rental/rental.entity';
import { Staff } from 'src/staff/staff.entity';

@Table({ tableName: tableNames?.payment })
export class Payment extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  payment_id: number;

  @ForeignKey(() => Customer)
  @Column(DataType.INTEGER)
  customer_id: number;

  /*   @HasOne(() => Customer)
  customer: Customer; */

  @ForeignKey(() => Staff)
  @Column(DataType.INTEGER)
  staff_id: Staff;

  /*  @HasOne(() => Staff)
  staff: Staff; */

  @ForeignKey(() => Rental)
  @Column(DataType.INTEGER)
  rental_id: Staff;

  /*   @HasOne(() => Rental)
  rental: Rental; */

  @Column
  @UpdatedAt
  last_update: Date;
}
