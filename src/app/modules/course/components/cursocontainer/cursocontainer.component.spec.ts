import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursocontainerComponent } from './cursocontainer.component';

describe('CursocontainerComponent', () => {
  let component: CursocontainerComponent;
  let fixture: ComponentFixture<CursocontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursocontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursocontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
