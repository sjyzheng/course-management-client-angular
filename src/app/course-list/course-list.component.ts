import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: any = [];
  courseTitle = '';
  layout = 'table';

  constructor(private service: CourseServiceClient) { }

  ngOnInit(): void {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

  searchCourse(courseTitle: string) {
    this.service.findAllCourses()
      .then(courses => courseTitle === '' ?
        courses : courses.filter(course => course.title.toLowerCase().includes(courseTitle.toLowerCase())))
      .then(courses => this.courses = courses);
  }

  changeLayout(layout: string) {
    this.layout = layout;
    console.log(this.layout);
  }

}
