import { Component, Inject } from '@angular/core';
// import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Course } from "../model/course";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import * as moment from 'moment';
import { CoursesService } from "../services/courses.service";


@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css'],
  providers: []
})
export class CourseDialogComponent {

  form: FormGroup;

  course: Course;

  constructor(
    private fb: FormBuilder,
    // private dialogRef: MatDialogRef<CourseDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) course: Course,
    private coursesService: CoursesService) {

    // this.course = course;

    // this.form = this.fb.group({
    //   description: [course.description, Validators.required],
    //   category: [course.category, Validators.required],
    //   releasedAt: [moment(), Validators.required],
    //   longDescription: [course.longDescription, Validators.required]
    // });

  }

  save() {

    const changes = this.form.value;

    // this.coursesService.saveCourse(this.course.id, changes).subscribe(() => {
    //   alert("Course saved");
    // }, () => {
    //   alert("Failed");
    // });

    // this.dialogRef.close(changes);

  }

  close() {
    // this.dialogRef.close();
  }

}
