import { TestBed } from '@angular/core/testing';

import { MetalRatesService } from '../metal-rates.service';

describe('MetalRatesService', () => {
  let service: MetalRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetalRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
