import { Injectable } from '@angular/core';

@Injectable()
export class TopicServiceClient {
  findTopicsForLesson = (lessonId) =>
    fetch(`http://localhost:3000/api/lessons/${lessonId}/topics`)
      .then(response => response.json())
}
