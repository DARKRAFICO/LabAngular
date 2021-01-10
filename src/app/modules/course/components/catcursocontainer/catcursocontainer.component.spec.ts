import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatcursocontainerComponent } from './catcursocontainer.component';

describe('CatcursocontainerComponent', () => {
  let component: CatcursocontainerComponent;
  let fixture: ComponentFixture<CatcursocontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatcursocontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatcursocontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
