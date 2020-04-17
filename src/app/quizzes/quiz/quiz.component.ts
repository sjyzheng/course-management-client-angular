import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionServiceClient } from '../../services/QuestionServiceClient';
import { QuizServiceClient } from '../../services/QuizServiceClient';

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
  submitted = false;
  grading = false;


  constructor(private route: ActivatedRoute,
              private questionService: QuestionServiceClient,
              private quizServiceClient: QuizServiceClient,
              private router: Router) {
    this.quizTitle = this.router.getCurrentNavigation().extras.state ?
      this.router.getCurrentNavigation().extras.state.quizTitle : '';
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId;
      this.courseId = params.courseId;
      this.questionService.findQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
    });
  }
  answerChangedHandler() {
    this.grading = true;
  }

  submitQuiz (qid, questions) :void {
    console.log(this.questions)
    this.quizServiceClient.submitQuiz(qid, questions)
    this.submitted = true;
  }
}
