import { Injectable } from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  findModulesForCourse = (courseId) =>
    fetch(`https://wbdv-sp20-jzheng-server-java.herokuapp.com/api/courses/${courseId}/modules`)
      .then(response => response.json())
}
