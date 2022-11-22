import { DataTypes } from 'sequelize';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  UpdatedAt,
  BelongsToMany,
} from 'sequelize-typescript';
import { FilmCategory } from 'src/film-category/filmCategory.entity';
import { Film } from 'src/film/film.entity';

@Table({ tableName: 'category' })
export class Category extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  category_id: number;

  @BelongsToMany(() => Film, () => FilmCategory)
  movies: Film[];

  @Column(DataTypes.CHAR(25))
  name: string;

  @Column
  @UpdatedAt
  last_update: Date;
}
