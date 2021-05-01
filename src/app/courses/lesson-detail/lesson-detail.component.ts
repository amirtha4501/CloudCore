import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LessonDetail } from '../model/lesson-detail';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  lesson: Observable<LessonDetail>;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.lesson = this.route.data.pipe(map(data => data["lesson"]));
  }

  previous(lesson: LessonDetail) {
    this.router.navigate(['lessons', lesson.seqNo - 1], { relativeTo: this.route.parent });
  }

  next(lesson: LessonDetail) {
    this.router.navigate(['lessons', lesson.seqNo + 1], { relativeTo: this.route.parent });
  }

}