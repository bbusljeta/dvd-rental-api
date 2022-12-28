import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
  HasOne,
  BelongsTo,
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

  @HasOne(() => Film)
  film: Film;

  @ForeignKey(() => Store)
  @Column(DataType.INTEGER)
  store_id: number;

  @BelongsTo(() => Store)
  store: Store;

  @Column
  @UpdatedAt
  last_update: Date;
}
