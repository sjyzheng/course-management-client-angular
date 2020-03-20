import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list-table',
  templateUrl: './course-list-table.component.html',
  styleUrls: ['./course-list-table.component.css']
})
export class CourseListTableComponent implements OnInit {
  @Input() courses;

  constructor() { }

  ngOnInit(): void {
  }


}
