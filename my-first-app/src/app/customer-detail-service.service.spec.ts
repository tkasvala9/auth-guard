import { TestBed } from '@angular/core/testing';

import { CustomerDetailServiceService } from './customer-detail-service.service';

describe('CustomerDetailServiceService', () => {
  let service: CustomerDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
