import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: Course[];
  beginnerCourses: Course[];
  advancedCourses: Course[];

  constructor(
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.reloadCourses();
  }

  reloadCourses() {
    this.coursesService.loadAllCourses().subscribe((courses) => {
      this.courses = courses;
      this.beginnerCourses = courses.filter(course => course.category == "BEGINNER");
      this.advancedCourses = courses.filter(course => course.category == "ADVANCED");
    });
  }
}
