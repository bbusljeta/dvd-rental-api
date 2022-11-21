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
} from 'sequelize-typescript';
import { Language } from 'src/language/language.entity';

@Table({ tableName: 'film' })
export class Film extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  film_id: number;

  @Column(DataTypes.CHAR(255))
  title: string;

  @Column(DataTypes.TEXT)
  description: string;

  @Column(DataTypes.SMALLINT({ unsigned: true }))
  @Length({
    max: 2155,
    min: 1901,
    msg: 'Year cannot be lower than 1901 or greater than 2155',
  })
  release_year: number;

  @ForeignKey(() => Language)
  @Column
  language_id: number;

  @Column(DataTypes.TINYINT({ unsigned: true }))
  rental_duration: number;

  @Column(DataTypes.DECIMAL(4, 2))
  rental_rate: number;

  // 0 - 255
  @Column(DataTypes.TINYINT({ unsigned: true }))
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
