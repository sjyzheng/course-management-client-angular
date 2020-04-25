import { Injectable } from '@angular/core';

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`https://wbdv-sp20-jz-server-node-a9.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
