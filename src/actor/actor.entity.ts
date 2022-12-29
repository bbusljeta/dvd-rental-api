import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  UpdatedAt,
  BelongsToMany,
  DataType,
} from 'sequelize-typescript';
import tableNames from 'src/db-context/tableNames';
import { FilmActor } from 'src/film-actor/film-actor.entity';
import { Film } from 'src/film/film.entity';

@Table({
  tableName: 'actor',
  freezeTableName: true,
  underscored: true,
  createdAt: false,
})
export class Actor extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  actor_id: number;

  @BelongsToMany(() => Film, () => FilmActor)
  movies: Film[];

  @Column(DataType.CHAR(45))
  first_name: string;

  @Column(DataType.CHAR(45))
  last_name: string;

  @Column
  @UpdatedAt
  last_update: Date;
}
