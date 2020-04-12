import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionServiceClient } from '../../services/QuestionServiceClient';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizId = '';
  quizTitle = '';
  questions = [];
  courseId = '';

  constructor(private route: ActivatedRoute, private service: QuestionServiceClient, private router: Router) {
    this.quizTitle = this.router.getCurrentNavigation().extras.state ?
      this.router.getCurrentNavigation().extras.state.quizTitle : '';
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId;
      this.courseId = params.courseId;
      this.service.findQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
    });
  }

}
