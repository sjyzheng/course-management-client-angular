import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {
  @Input() question  = {_id: '', title: '', type: '', choices: [], correct: '', question: ''};
  @Input() answer = '';
  @Input() grading;
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



