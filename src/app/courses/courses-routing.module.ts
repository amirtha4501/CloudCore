import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
  // {
  //   path: 'course-dialog',
  //   component: CourseDialogComponent
  // },
  // {
  //   path: 'courses-list',
  //   component: CoursesCardListComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
