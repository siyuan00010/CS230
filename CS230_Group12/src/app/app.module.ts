import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseHeaderComponent } from './Layouts/Course Page/Header/courseHeader.component';
import { FooterComponent } from './Layouts/Home Page/Footer/footer.component';
import { HeaderComponent } from './Layouts/Home Page/Header/header.component';
import { HomePageLayout } from './Layouts/Home Page/home-page-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageLayout,
    HeaderComponent,
    FooterComponent,
    CourseHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
