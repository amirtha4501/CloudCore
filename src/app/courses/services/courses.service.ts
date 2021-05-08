import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, find, findIndex, map, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Course } from '../model/course';
import { LessonDetail } from '../model/lesson-detail';
import { LessonSummary } from '../model/lesson-summary';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  lesson: any;
  lessonSeqNo: string;

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
      return lessons.filter(lesson => lesson['courseId'] == +course.id).sort((l1, l2) => l1.seqNo - l2.seqNo);
    }));
  }

  // To lesson detail
  loadLessonDetail(courseUrl: string, lessonSeqNo: string): Observable<LessonSummary[]> {
    this.lessonSeqNo = lessonSeqNo;
    let lessons = this.loadAllCourseLessonsSummary(courseUrl);
    return lessons;
  }
}


   // let lessonsLength;
    // var lesson;
    // let indexObservable = lessons.pipe(map((lessons) => {
    //   lessonsLength = lessons.length;
    //   return lessons.findIndex(lesson => lesson['seqNo'] == +lessonSeqNo);
    // }));
    // indexObservable.subscribe((index) => {
    //   lesson = lessons.pipe(map(lessons => lessons[index]));
    //   this.lesson = lesson.pipe(map(lesson => {
    //     lesson['first'] = (index == 0);
    //     lesson['last'] = (index == lessonsLength - 1);
    //     return lesson;
    //   }));
    // });


 // lesson = lessons.pipe(map(lessons => lessons[lessonIndex]));
    // lesson.subscribe(res => console.log(res))

    // lesson = lesson.pipe(map(lesson => {
    //   lesson['first'] = (lessonIndex == 0);
    //   lesson['last'] = (lessonIndex == lessonsLength - 1);
    //   return lesson
    // }));

    // this.lesson.subscribe(res => console.log(res));