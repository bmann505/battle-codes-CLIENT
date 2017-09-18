import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRoomComponent } from './team-room.component';

describe('TeamRoomComponent', () => {
  let component: TeamRoomComponent;
  let fixture: ComponentFixture<TeamRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
