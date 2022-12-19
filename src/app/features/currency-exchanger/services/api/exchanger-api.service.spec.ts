import { TestBed } from '@angular/core/testing';

import { ExchangerApiService } from './exchanger-api.service';

describe('ExchangerApiService', () => {
  let service: ExchangerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
