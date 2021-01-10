import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursodestacadocontainerComponent } from './cursodestacadocontainer.component';

describe('CursodestacadocontainerComponent', () => {
  let component: CursodestacadocontainerComponent;
  let fixture: ComponentFixture<CursodestacadocontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursodestacadocontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursodestacadocontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
