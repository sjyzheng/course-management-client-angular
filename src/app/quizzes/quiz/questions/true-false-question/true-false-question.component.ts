import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceClient } from '../../../../services/QuestionServiceClient';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {
  @Input() question = {
    _id: '', title: '', question: '', answer: '', correct: ''
  };
  @Input() answer = '';
  grading = false;
  wrongAnswer = '';
  @Output()
  answerChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void { }

  grade() {
    this.grading = true;
    if (this.answer !== this.question.correct) { this.wrongAnswer = this.answer; }
    if (!this.answer) { this.answer = 'NOT ANSWERED'; }
    this.answerChange.emit(this.answer)
  }
}
