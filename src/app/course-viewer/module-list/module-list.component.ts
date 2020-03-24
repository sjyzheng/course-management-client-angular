import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleServiceClient } from '../../services/ModuleServiceClient';
import { CourseServiceClient } from '../../services/CourseServiceClient';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  modules = [];
  @Input() course;
  courseId = '';
  moduleId = '';

  constructor(private route: ActivatedRoute, private service: ModuleServiceClient, private router: Router) {
    this.modules = this.router.getCurrentNavigation().extras.state ?
      this.router.getCurrentNavigation().extras.state.modules : [] ;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.service.findModulesForCourse(this.courseId)
        .then(modules => this.modules = modules);
    });
  }
}
