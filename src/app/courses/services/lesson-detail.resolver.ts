import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LessonSummary } from '../model/lesson-summary';
import { CoursesService } from './courses.service';


// Modify to return Promise<LessonDetail> instead of LessonSummary[]

@Injectable()
export class LessonDetailResolver implements Resolve<LessonSummary[]> {

    constructor(private courses: CoursesService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonSummary[]> {
        const courseUrl = route.parent.url[0].path, 
            lessonSeqNo = route.paramMap.get("lessonSeqNo");
        return this.courses.loadLessonDetail(courseUrl, lessonSeqNo);
    }

}
