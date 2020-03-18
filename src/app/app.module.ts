import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseServiceClient } from './services/CourseServiceClient';
import { FormsModule } from '@angular/forms';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ModuleServiceClient } from './services/ModuleServiceClient';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseTableComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
