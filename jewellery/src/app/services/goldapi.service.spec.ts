import { TestBed } from '@angular/core/testing';

import { GoldapiService } from './goldapi.service';

describe('GoldapiService', () => {
  let service: GoldapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoldapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
