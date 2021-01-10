import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetcoursepageComponent } from './detcoursepage.component';

describe('DetcoursepageComponent', () => {
  let component: DetcoursepageComponent;
  let fixture: ComponentFixture<DetcoursepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetcoursepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetcoursepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
