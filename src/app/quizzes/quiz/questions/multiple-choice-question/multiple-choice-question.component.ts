import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {
  @Input() question;
  answer = '';
  grading = false;
  wrongAnswer = '';

  constructor() { }

  ngOnInit(): void { }

  grade() {
    this.grading = true;
    if (this.answer !== this.question.correct) { this.wrongAnswer = this.answer; }
    if (this.answer === '') { this.answer = 'NOT ANSWERED'; }
  }}
