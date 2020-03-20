import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list-grid',
  templateUrl: './course-list-grid.component.html',
  styleUrls: ['./course-list-grid.component.css']
})
export class CourseListGridComponent implements OnInit {
  @Input() courses;

  constructor() { }

  ngOnInit(): void {
  }

}
