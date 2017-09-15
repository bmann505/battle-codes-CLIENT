import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSignInComponent } from './team-sign-in.component';

describe('TeamSignInComponent', () => {
  let component: TeamSignInComponent;
  let fixture: ComponentFixture<TeamSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
