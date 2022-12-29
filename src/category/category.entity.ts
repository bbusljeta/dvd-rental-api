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
import tableNames from 'src/db-context/tableNames';
import { FilmCategory } from 'src/film-category/film-category.entity';
import { Film } from 'src/film/film.entity';

@Table({ tableName: tableNames?.category })
export class Category extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  category_id: number;

  @BelongsToMany(() => Film, () => FilmCategory)
  movies: Film[];

  @Column(DataTypes.STRING(25))
  name: string;

  @Column
  @UpdatedAt
  last_update: Date;
}
