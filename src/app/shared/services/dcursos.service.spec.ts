import { TestBed } from '@angular/core/testing';

import { DcursosService } from './dcursos.service';

describe('DcursosService', () => {
  let service: DcursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DcursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
