import { TestBed } from '@angular/core/testing';

import { AgroServiceService } from './agro.service';

describe('AgroServiceService', () => {
  let service: AgroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
