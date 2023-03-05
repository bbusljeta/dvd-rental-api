import { PaginatedResponseDTO } from './paginated-response';

describe('PaginationResponse', () => {
  it('should be defined', () => {
    expect(new PaginatedResponseDTO()).toBeDefined();
  });
});
