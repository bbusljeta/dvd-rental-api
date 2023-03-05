import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  UpdatedAt,
  DataType,
} from 'sequelize-typescript';

@Table({
  tableName: 'language',
  freezeTableName: true,
  underscored: true,
  createdAt: false,
})
export class Language extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  language_id: number;

  @Column(DataType.STRING(20))
  name: string;

  @Column
  @UpdatedAt
  last_update: Date;
}
