import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  UpdatedAt,
  DataType,
} from 'sequelize-typescript';
import tableNames from 'src/db-context/tableNames';

@Table({ tableName: tableNames.language })
export class Language extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  language_id: number;

  @Column(DataType.CHAR(20))
  name: string;

  @Column
  @UpdatedAt
  last_update: Date;
}
