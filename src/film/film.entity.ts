import { DataTypes } from 'sequelize';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  UpdatedAt,
  Length,
  ForeignKey,
  BelongsToMany,
  HasMany,
  HasOne,
  BelongsTo,
} from 'sequelize-typescript';
import { Actor } from 'src/actor/actor.entity';
import { Category } from 'src/category/category.entity';
import tableNames from 'src/db-context/tableNames';
import { FilmActor } from 'src/film-actor/film-actor.entity';
import { FilmCategory } from 'src/film-category/film-category.entity';
import { Language } from 'src/language/language.entity';

@Table({
  tableName: 'film',
  freezeTableName: true,
  underscored: true,
  createdAt: false,
})
export class Film extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  film_id: number;

  @BelongsToMany(() => Category, () => FilmCategory)
  categories: Category[];

  @BelongsToMany(() => Actor, () => FilmActor)
  actors: Actor[];

  @Column(DataTypes.STRING(255))
  title: string;

  @Column(DataTypes.TEXT)
  description: string;

  @Length({
    max: 2155,
    min: 1901,
    msg: 'Year cannot be lower than 1901 or greater than 2155',
  })
  @Column(DataTypes.SMALLINT({ unsigned: true }))
  release_year: number;

  @ForeignKey(() => Language)
  @Column
  language_id: number;

  @BelongsTo(() => Language)
  language: Language;

  @Column(DataTypes.SMALLINT({ unsigned: true }))
  rental_duration: number;

  @Column(DataTypes.DECIMAL(4, 2))
  rental_rate: number;

  @Column(DataTypes.SMALLINT({ unsigned: true }))
  length: number;

  @Column(DataTypes.DECIMAL(5, 2))
  replacement_cost: number;

  @Column(DataTypes.ENUM('G', 'PG', 'PG-13', 'R', 'NC-17'))
  rating: string;

  @Column
  @UpdatedAt
  last_update: Date;

  @Column(DataTypes.TEXT)
  special_features: string;

  @Column(DataTypes.TSVECTOR)
  fulltext: string;
}
