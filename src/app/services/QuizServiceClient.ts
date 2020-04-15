import { Injectable } from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch('http://localhost:3000/api/quizzes')
      .then(response => response.json())
  findQuizAttemptsById = (qid) =>
    fetch(`http://localhost:3000/api/quizzes/${qid}/attempts`)
      .then(response => response.json())
  submitQuiz = (qid, questions) => {
    fetch(`http://localhost:3000/api/quizzes/${qid}/attempts`, {
      method: 'POST',
      body: JSON.stringify(questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
  }
}
