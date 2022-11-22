import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Category } from 'src/category/category.entity';
import { Film } from 'src/film/film.entity';

@Table({ tableName: 'film_category' })
export class FilmCategory extends Model {
  @ForeignKey(() => Film)
  @Column
  film_id: number;

  @ForeignKey(() => Category)
  @Column
  category_id: number;
}
