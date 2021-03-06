import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseServiceClient } from './services/CourseServiceClient';
import { FormsModule } from '@angular/forms';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './course-viewer/module-list/module-list.component';
import { LessonTabsComponent } from './course-viewer/lesson-tabs/lesson-tabs.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ModuleServiceClient } from './services/ModuleServiceClient';
import { LessonServiceClient } from './services/LessonServiceClient';
import { CourseListHeaderComponent } from './course-list/course-list-header/course-list-header.component';
import { CourseListTableComponent } from './course-list/course-list-table/course-list-table.component';
import { CourseListGridComponent } from './course-list/course-list-grid/course-list-grid.component';
import { TopicPillsComponent } from './course-viewer/topic-pills/topic-pills.component';
import { TopicServiceClient } from './services/TopicServiceClient';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizServiceClient } from './services/QuizServiceClient';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { QuestionServiceClient } from './services/QuestionServiceClient';
import { TrueFalseQuestionComponent } from './quizzes/quiz/questions/true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './quizzes/quiz/questions/multiple-choice-question/multiple-choice-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    CourseListHeaderComponent,
    CourseListTableComponent,
    CourseListGridComponent,
    TopicPillsComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
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
    LessonServiceClient,
    TopicServiceClient,
    QuizServiceClient,
    QuestionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
