import { Injectable } from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch('https://wbdv-sp20-jzheng-server-java.herokuapp.com/api/courses')
      .then(response => response.json());

  findCourseById = (cid) =>
    fetch(`https://wbdv-sp20-jzheng-server-java.herokuapp.com/api/courses/${cid}`)
      .then(response => response.json())

}
