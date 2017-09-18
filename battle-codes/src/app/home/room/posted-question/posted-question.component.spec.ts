import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedQuestionComponent } from './posted-question.component';

describe('PostedQuestionComponent', () => {
  let component: PostedQuestionComponent;
  let fixture: ComponentFixture<PostedQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
