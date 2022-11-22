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
import { FilmActor } from 'src/film-actor/film-actor.entity';
import { Film } from 'src/film/film.entity';

@Table({ tableName: 'actor' })
export class Actor extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  actor_id: number;

  @BelongsToMany(() => Film, () => FilmActor)
  movies: Film[];

  @Column(DataTypes.CHAR(45))
  first_name: string;

  @Column(DataTypes.CHAR(45))
  last_name: string;

  @Column
  @UpdatedAt
  last_update: Date;
}
