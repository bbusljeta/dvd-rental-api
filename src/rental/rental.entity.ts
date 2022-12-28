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
import { Staff } from 'src/staff/staff.entity';

@Table({ tableName: tableNames.rental })
export class Rental extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  rental_id: number;

  @Column(DataType.DATE)
  rental_date: string;

  @Column(DataType.DATE)
  return_date: string;

  @HasOne(() => Customer)
  customer: Customer;

  @HasOne(() => Staff)
  staff: Staff;

  @Column
  @UpdatedAt
  last_update: Date;
}
