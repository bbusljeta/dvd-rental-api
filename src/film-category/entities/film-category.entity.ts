import {
  Table,
  Column,
  Model,
  ForeignKey,
  UpdatedAt,
  BelongsTo,
} from 'sequelize-typescript';
import { Category } from 'src/category/entities/category.entity';
import { Film } from 'src/film/entities/film.entity';

@Table({
  tableName: 'film_category',
  createdAt: false,
  underscored: true,
})
export class FilmCategory extends Model {
  @ForeignKey(() => Film)
  @Column
  film_id: number;

  @BelongsTo(() => Film)
  film: Film;

  @ForeignKey(() => Category)
  @Column
  category_id: number;

  @BelongsTo(() => Category)
  category: Category;

  @Column
  @UpdatedAt
  last_update: Date;
}
