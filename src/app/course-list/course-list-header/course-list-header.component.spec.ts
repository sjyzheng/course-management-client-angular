import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListHeaderComponent } from './course-list-header.component';

describe('CourseListHeaderComponent', () => {
  let component: CourseListHeaderComponent;
  let fixture: ComponentFixture<CourseListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
