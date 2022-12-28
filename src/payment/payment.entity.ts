import {
  Table,
  Column,
  Model,
  DataType,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
  HasOne,
} from 'sequelize-typescript';
import { Customer } from 'src/customer/customer.entity';
import tableNames from 'src/db-context/tableNames';
import { Rental } from 'src/rental/rental.entity';
import { Staff } from 'src/staff/staff.entity';

@Table({ tableName: tableNames.payment })
export class Payment extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  payment_id: number;

  @HasOne(() => Customer)
  customer: Customer;

  @HasOne(() => Staff)
  staff: Staff;

  @HasOne(() => Rental)
  rental: Rental;

  @Column
  @UpdatedAt
  last_update: Date;
}
