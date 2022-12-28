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

@Table({ tableName: tableNames.store })
export class Store extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  store_id: number;

  @Column(DataType.INTEGER)
  manager_staff_id: number;

  @Column(DataType.INTEGER)
  address_id: number;

  @Column
  @UpdatedAt
  last_update: Date;
}
