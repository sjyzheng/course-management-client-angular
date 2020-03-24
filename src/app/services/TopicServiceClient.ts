import { Injectable } from '@angular/core';

@Injectable()
export class TopicServiceClient {
  findTopicsForLesson = (lessonId) =>
    fetch(`https://wbdv-sp20-jzheng-server-java.herokuapp.com/api/lessons/${lessonId}/topics`)
      .then(response => response.json())
}
