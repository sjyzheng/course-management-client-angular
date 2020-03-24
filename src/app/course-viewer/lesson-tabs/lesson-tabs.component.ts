import { Component, Input, OnInit } from '@angular/core';
import { LessonServiceClient } from '../../services/LessonServiceClient';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  lessons = [];
  @Input() course;
  @Input() modules;
  courseId = '';
  moduleId = '';
  lessonId = '';

  constructor(private route: ActivatedRoute, private service: LessonServiceClient, private router: Router) {
    this.lessons = this.router.getCurrentNavigation().extras.state ?
      this.router.getCurrentNavigation().extras.state.lessons : [] ;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      if (this.moduleId) { this.service.findLessonsForModule(this.moduleId)
        .then(lessons => this.lessons = lessons);
      }
    });
  }

}
