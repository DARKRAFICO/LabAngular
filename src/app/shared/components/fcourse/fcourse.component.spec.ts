import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcourseComponent } from './fcourse.component';

describe('FcourseComponent', () => {
  let component: FcourseComponent;
  let fixture: ComponentFixture<FcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
