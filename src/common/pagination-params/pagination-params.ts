import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class PaginationParams {
  @IsInt()
  @Min(1)
  @Type(() => Number)
  page: number = 1;

  @IsInt()
  @Min(10)
  @Type(() => Number)
  private readonly pageSize: number = 20;

  get limit() {
    return this.pageSize;
  }

  get offset() {
    return (this.page - 1) * this.pageSize;
  }
}
