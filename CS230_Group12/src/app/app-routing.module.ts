import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseHeaderComponent } from './Layouts/Course Page/Header/courseHeader.component';
import { HomePageLayout } from './Layouts/Home Page/home-page-layout.component';

const routes: Routes = [
  { path: '', component: HomePageLayout },
  { path: 'Home', component: HomePageLayout },
  { path: 'Course', component: CourseHeaderComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
