import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseServiceClient } from './services/CourseServiceClient';
import { FormsModule } from '@angular/forms';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ModuleServiceClient } from './services/ModuleServiceClient';
import { LessonServiceClient } from './services/LessonServiceClient';
import { CourseListHeaderComponent } from './course-list/course-list-header/course-list-header.component';
import { CourseListTableComponent } from './course-list/course-list-table/course-list-table.component';
import { CourseListGridComponent } from './course-list/course-list-grid/course-list-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    CourseListHeaderComponent,
    CourseListTableComponent,
    CourseListGridComponent
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
    LessonServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
