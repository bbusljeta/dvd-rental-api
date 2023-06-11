import {
  Table,
  Column,
  Model,
  ForeignKey,
  UpdatedAt,
  BelongsTo,
} from 'sequelize-typescript';
import { Actor } from 'src/actor/entities/actor.entity';
import { Film } from 'src/film/entities/film.entity';

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
