import { TestBed } from '@angular/core/testing';

import { MovideDBService } from './movide-db.service';

describe('MovideDBService', () => {
  let service: MovideDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovideDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
