import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  UpdatedAt,
} from 'sequelize-typescript';
import { Category } from 'src/category/entities/category.entity';
import tableNames from 'src/db-context/tableNames';
import { Film } from 'src/film/entities/film.entity';

@Table({ tableName: tableNames?.filmCategory })
export class FilmCategory extends Model {
  @ForeignKey(() => Film)
  @Column(DataType.INTEGER)
  film_id: number;

  @ForeignKey(() => Category)
  @Column(DataType.INTEGER)
  category_id: number;

  @Column
  @UpdatedAt
  last_update: Date;
}
