import { Injectable } from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-sp20-jzheng-server-java.herokuapp.com/api/modules/${moduleId}/lessons`)
      .then(response => response.json())

}
