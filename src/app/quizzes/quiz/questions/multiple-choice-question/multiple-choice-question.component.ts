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

  constructor() { }

  ngOnInit(): void { }

  grade = () => this.grading = true;
}
