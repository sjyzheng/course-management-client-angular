import { Component, Input, OnInit } from '@angular/core';
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
  grading = false;

  constructor() { }

  ngOnInit(): void {
  }

}