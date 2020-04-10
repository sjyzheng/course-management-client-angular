import { Injectable } from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch('https://wbdv-sp20-jzheng-server-node.herokuapp.com/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`http://localhost:3000/api/quizzes/${qid}`)
      .then(response => response.json())
}
