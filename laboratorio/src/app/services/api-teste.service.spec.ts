import { TestBed } from '@angular/core/testing';

import { ApiTesteService } from './api-teste.service';

describe('ApiTesteService', () => {
  let service: ApiTesteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTesteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
