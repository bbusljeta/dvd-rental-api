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
import { FilmCategory } from 'src/film-category/entities/film-category.entity';
import { Film } from 'src/film/entities/film.entity';

@Table({
  tableName: 'category',
  freezeTableName: true,
  underscored: true,
  createdAt: false,
})
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
