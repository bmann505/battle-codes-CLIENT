import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAnswerComponent } from './team-answer.component';

describe('TeamAnswerComponent', () => {
  let component: TeamAnswerComponent;
  let fixture: ComponentFixture<TeamAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
