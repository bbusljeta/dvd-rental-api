import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { Category } from 'src/category/category.entity';
import tableNames from 'src/db-context/tableNames';
import { Film } from 'src/film/film.entity';

@Table({ tableName: tableNames.filmCategory })
export class FilmCategory extends Model {
  @ForeignKey(() => Film)
  @Column(DataType.INTEGER)
  film_id: number;

  @ForeignKey(() => Category)
  @Column(DataType.INTEGER)
  category_id: number;
}
