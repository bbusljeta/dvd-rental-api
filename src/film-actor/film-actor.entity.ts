import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  UpdatedAt,
} from 'sequelize-typescript';
import { Actor } from 'src/actor/actor.entity';
import tableNames from 'src/db-context/tableNames';
import { Film } from 'src/film/film.entity';

@Table({ tableName: tableNames.filmActor })
export class FilmActor extends Model {
  @ForeignKey(() => Film)
  @Column(DataType.INTEGER)
  film_id: number;

  @ForeignKey(() => Actor)
  @Column(DataType.INTEGER)
  actor_id: number;

  @Column
  @UpdatedAt
  last_update: Date;
}
