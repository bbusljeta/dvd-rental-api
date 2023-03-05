import {
  Table,
  Column,
  Model,
  ForeignKey,
  UpdatedAt,
  BelongsTo,
} from 'sequelize-typescript';
import { Actor } from 'src/actor/actor.entity';
import { Film } from 'src/film/film.entity';

@Table({ tableName: 'film_actor', createdAt: false, underscored: true })
export class FilmActor extends Model {
  @ForeignKey(() => Film)
  @Column
  film_id: number;

  @BelongsTo(() => Film)
  film: Film;

  @BelongsTo(() => Actor)
  actor: Actor;

  @ForeignKey(() => Actor)
  @Column
  actor_id: number;

  @Column
  @UpdatedAt
  last_update: Date;
}
