import { Request } from 'express';

export class PaginatedResponse<T> {
  data: T;
  totalRecords: number;
  totalPages: number;
  pageSize: number;
  page: number;
  first: string;
  previous: string | null;
  next: string | null;
  last: string;

  private url = (request: Request, limit: number, offset: number) =>
    `${request.protocol}://${request.headers.host}${request.route.path}?page=${limit}&pageSize=${offset}`;

  constructor(
    data: T,
    page: number,
    pageSize: number,
    totalRecords: number,
    request: Request,
  ) {
    this.data = data;
    this.totalRecords = totalRecords;
    this.page = page > 0 ? page : 1;
    this.pageSize = pageSize;
    this.totalPages = Math.ceil(totalRecords / pageSize);

    this.next =
      this.page < this.totalPages
        ? this.url(request, this.page + 1, pageSize)
        : null;

    this.previous =
      this.page > 1 && this.page <= this.totalPages
        ? this.url(request, this.page - 1, pageSize)
        : null;
    this.first = this.url(request, 1, pageSize);
    this.last = this.url(request, this.totalPages, pageSize);
  }
}
