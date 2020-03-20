import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-list-header',
  templateUrl: './course-list-header.component.html',
  styleUrls: ['./course-list-header.component.css']
})
export class CourseListHeaderComponent implements OnInit {
  @Input() layout;
  @Output() layoutSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeLayout(layout: string) {
    this.layoutSelected.emit(layout);
  }

}
