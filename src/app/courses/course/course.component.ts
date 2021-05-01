import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
  course: Course;
  couponCode: String;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.course = this.route.snapshot.data["course"];
  }

}
