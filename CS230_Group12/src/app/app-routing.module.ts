import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageLayout } from './Layouts/Home Page/home-page-layout.component';

const routes: Routes = [
  { path: '', component: HomePageLayout },
  { path: 'Home', component: HomePageLayout },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
