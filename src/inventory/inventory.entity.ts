import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import tableNames from 'src/db-context/tableNames';
import { Film } from 'src/film/film.entity';
import { Store } from 'src/store/store.entity';

@Table({ tableName: tableNames.inventory })
export class Inventory extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  inventory_id: number;

  @ForeignKey(() => Film)
  @Column(DataType.INTEGER)
  film_id: number;

  @ForeignKey(() => Store)
  @Column(DataType.INTEGER)
  store_id: number;

  @Column
  @UpdatedAt
  last_update: Date;
}
