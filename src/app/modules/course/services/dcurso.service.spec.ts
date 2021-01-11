import { TestBed } from '@angular/core/testing';

import { DcursoService } from './dcurso.service';

describe('DcursoService', () => {
  let service: DcursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DcursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
