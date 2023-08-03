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
import { FilmActor } from 'src/film-actor/entities/film-actor.entity';
import { Film } from 'src/film/entities/film.entity';

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
  films: Array<Film>;

  @Column(DataType.STRING(45))
  first_name: string;

  @Column(DataType.STRING(45))
  last_name: string;

  @Column
  @UpdatedAt
  last_update: Date;
}
