import { Injectable } from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch('https://wbdv-sp20-jz-server-node-a9.herokuapp.com/api/quizzes')
      .then(response => response.json())
  findQuizAttemptsById = (qid) =>
    fetch(`https://wbdv-sp20-jz-server-node-a9.herokuapp.com/api/quizzes/${qid}/attempts`)
      .then(response => response.json())
  submitQuiz = (qid, questions) => {
    fetch(`https://wbdv-sp20-jz-server-node-a9.herokuapp.com/api/quizzes/${qid}/attempts`, {
      method: 'POST',
      body: JSON.stringify(questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
  }
}
