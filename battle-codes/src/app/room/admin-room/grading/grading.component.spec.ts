import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingComponent } from './grading.component';

describe('GradingComponent', () => {
  let component: GradingComponent;
  let fixture: ComponentFixture<GradingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
