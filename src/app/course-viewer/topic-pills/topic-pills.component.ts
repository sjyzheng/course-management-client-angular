import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicServiceClient } from '../../services/TopicServiceClient';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {
  topics = [];
  @Input() course;
  @Input() modules;
  @Input() lessons;
  courseId = '';
  moduleId = '';
  lessonId = '';
  topicId = '';

  constructor(private route: ActivatedRoute, private service: TopicServiceClient, private router: Router) {
    this.topics = this.router.getCurrentNavigation().extras.state ?
      this.router.getCurrentNavigation().extras.state.topics : [];
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      this.topicId = params.topicId;
      if (this.lessonId) { this.service.findTopicsForLesson(this.lessonId)
        .then(topics => this.topics = topics);
      }
    });
  }
}
