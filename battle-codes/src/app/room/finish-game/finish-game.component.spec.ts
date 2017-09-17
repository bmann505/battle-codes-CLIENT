import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishGameComponent } from './finish-game.component';

describe('FinishGameComponent', () => {
  let component: FinishGameComponent;
  let fixture: ComponentFixture<FinishGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
