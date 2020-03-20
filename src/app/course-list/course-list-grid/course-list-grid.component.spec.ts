import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListGridComponent } from './course-list-grid.component';

describe('CourseListGridComponent', () => {
  let component: CourseListGridComponent;
  let fixture: ComponentFixture<CourseListGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
