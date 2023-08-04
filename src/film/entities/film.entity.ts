import { AutoMap } from '@automapper/classes';
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
  BelongsTo,
} from 'sequelize-typescript';
import { Actor } from 'src/actor/entities/actor.entity';
import { Category } from 'src/category/entities/category.entity';
import { FilmActor } from 'src/film-actor/entities/film-actor.entity';
import { FilmCategory } from 'src/film-category/entities/film-category.entity';
import { Language } from 'src/language/entities/language.entity';

@Table({
  tableName: 'film',
  freezeTableName: true,
  underscored: true,
  createdAt: false,
})
export class Film extends Model {
  @AutoMap()
  @PrimaryKey
  @AutoIncrement
  @Column
  film_id: number;

  @BelongsToMany(() => Category, () => FilmCategory)
  categories: Category[];

  @AutoMap()
  @BelongsToMany(() => Actor, () => FilmActor)
  actors: Actor[];

  @AutoMap()
  @Column(DataTypes.STRING(255))
  title: string;

  @AutoMap()
  @Column(DataTypes.TEXT)
  description: string;

  @AutoMap()
  @Length({
    max: 2155,
    min: 1901,
    msg: 'Year cannot be lower than 1901 or greater than 2155',
  })
  @AutoMap()
  @Column(DataTypes.SMALLINT({ unsigned: true }))
  release_year: number;

  @ForeignKey(() => Language)
  @Column
  language_id: number;

  @BelongsTo(() => Language)
  language: Language;

  @AutoMap()
  @Column(DataTypes.SMALLINT({ unsigned: true }))
  rental_duration: number;

  @AutoMap()
  @Column(DataTypes.DECIMAL(4, 2))
  rental_rate: number;

  @AutoMap()
  @Column(DataTypes.SMALLINT({ unsigned: true }))
  length: number;

  @AutoMap()
  @Column(DataTypes.DECIMAL(5, 2))
  replacement_cost: number;

  @AutoMap()
  @Column(DataTypes.ENUM('G', 'PG', 'PG-13', 'R', 'NC-17'))
  rating: string;

  @AutoMap()
  @UpdatedAt
  @Column
  last_update: Date;

  @AutoMap()
  @Column(DataTypes.TEXT)
  special_features: string[];

  @Column(DataTypes.TSVECTOR)
  fulltext: string;
}
