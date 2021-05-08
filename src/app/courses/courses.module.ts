import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';

import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesService } from './services/courses.service';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { FlexLayoutModule } from '@angular/flex-layout';
import { CourseComponent } from './course/course.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';
// import {MatMomentDateModule} from "@angular/material-moment-adapter";


@NgModule({
  declarations: [
    CourseDialogComponent,
    CoursesCardListComponent,
    HomeComponent,
    CourseComponent,
    LessonsListComponent,
    LessonDetailComponent,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoursesRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    FlexLayoutModule
    // MatMomentDateModule,
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
