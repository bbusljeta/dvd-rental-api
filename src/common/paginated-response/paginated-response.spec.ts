import { PaginatedResponse } from './paginated-response';

describe('PaginationResponse', () => {
  it('should be defined', () => {
    expect(new PaginatedResponse()).toBeDefined();
  });
});
