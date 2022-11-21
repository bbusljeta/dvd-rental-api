import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'language' })
export class Language extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  category_id: number;

  @Column
  name: string;

  @Column
  @UpdatedAt
  last_update: Date;
}