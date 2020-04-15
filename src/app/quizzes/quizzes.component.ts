import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from '../services/QuizServiceClient';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  courseId = '';
  quizzes = [{
    title: '',
    attempts: []
  }];

  constructor(private service: QuizServiceClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.service.findAllQuizzes()
        .then(quizzes => {
          this.quizzes = quizzes
            return quizzes.map(quiz => this.service.findQuizAttemptsById(quiz._id));
        })
        .then(attemptPromises => {
          console.log(attemptPromises)
          return Promise.all(attemptPromises)
        })
        .then(attempts => {
          for (let i = 0; i < this.quizzes.length; i++) {
            // @ts-ignore
            this.quizzes[i].attempts = attempts[i]
          }
        })
    });
  }
}
