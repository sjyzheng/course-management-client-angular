import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceClient } from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {
  course: any = {};
  modules = [];

  constructor(private route: ActivatedRoute, private service: CourseServiceClient, private router: Router) {
    this.course = this.router.getCurrentNavigation().extras.state ?
      this.router.getCurrentNavigation().extras.state.course : {title: ''} ;
    this.modules = this.router.getCurrentNavigation().extras.state ?
      this.router.getCurrentNavigation().extras.state.modules : [] ;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
     const courseId = params.courseId;
     this.service.findCourseById(courseId)
       .then(course => this.course = course);
   });
  }
}
