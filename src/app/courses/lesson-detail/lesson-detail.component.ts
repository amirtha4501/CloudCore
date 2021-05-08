import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LessonDetail } from '../model/lesson-detail';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  lesson: Observable<LessonDetail>;

  constructor(private route: ActivatedRoute, private router: Router, private coursesService: CoursesService) { }

  ngOnInit(): void {
    var lesson;
    let lessonsLength;
    var lessons = this.route.data.pipe(map(data => data["lesson"]));

    let indexObservable = lessons.pipe(map((lessons) => {
      lessonsLength = lessons.length;
      return lessons.findIndex(lesson => lesson['seqNo'] == +this.coursesService.lessonSeqNo);
    }));
    indexObservable.subscribe((index) => {
      lesson = lessons.pipe(map(lessons => lessons[index]));
      this.lesson = lesson.pipe(map(lesson => {
        lesson['first'] = (index == 0);
        lesson['last'] = (index == lessonsLength - 1);
        return lesson;
      }));
    });
  }

  previous(lesson: LessonDetail) {
    this.router.navigate(['lessons', lesson.seqNo - 1], { relativeTo: this.route.parent });
  }

  next(lesson: LessonDetail) {
    this.router.navigate(['lessons', lesson.seqNo + 1], { relativeTo: this.route.parent });
  }

}
