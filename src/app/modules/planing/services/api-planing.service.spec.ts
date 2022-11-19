import { TestBed } from '@angular/core/testing';

import { ApiPlaningService } from './api-planing.service';

describe('ApiPlaningService', () => {
  let service: ApiPlaningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPlaningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
