import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, find, map, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Course } from '../model/course';
import { LessonDetail } from '../model/lesson-detail';
import { LessonSummary } from '../model/lesson-summary';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  loadAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${environment.server_api}/courses`)
  }

  loadCourseByUrl(courseUrl: String): Observable<Course> {
    return this.loadAllCourses().pipe(map(courses => courses.find(course => course.url == courseUrl)));
  }

  loadAllCourseLessonsSummary(courseUrl: string): Observable<LessonSummary[]> {
    let course; 

    // fetch course
    this.loadCourseByUrl(courseUrl).subscribe(res => course = res);

    // fetch lessons of a course
    return this.http.get<LessonSummary[]>(`${environment.server_api}/lessons`).pipe(map((lessons) => {
      console.log(lessons)
      return lessons.filter(lesson => lesson['courseId'] == +course.id).sort((l1, l2) => l1.seqNo - l2.seqNo);
    }));
  }

  loadLessonDetail(courseUrl: string, lessonSeqNo: string): Observable<LessonDetail> {
    const course = this.loadCourseByUrl(courseUrl)
    // this.http.get<LessonDetail>(`/lesson`).pipe(filter(lesson => lesson.courseId == course.id))
    return 
  }
}
