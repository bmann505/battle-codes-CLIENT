import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { AdminSignInComponent } from './header/admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './header/admin-sign-in/admin-sign-up/admin-sign-up.component';
import { TeamSignInComponent } from './header/team-sign-in/team-sign-in.component';
import { RoomComponent } from './room/room.component';
import { RoomHeaderComponent } from './room/room-header/room-header.component';
import { ScoreboardComponent } from './room/scoreboard/scoreboard.component';
import { TimerComponent } from './room/timer/timer.component';
import { GradingComponent } from './room/grading/grading.component';
import { SelectQuestionsComponent } from './room/select-questions/select-questions.component';
import { QuestionListComponent } from './room/question-list/question-list.component';
import { PostedQuestionComponent } from './room/posted-question/posted-question.component';
import { FinishGameComponent } from './room/finish-game/finish-game.component';
import { TeamAnswerComponent } from './room/team-answer/team-answer.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    AdminSignInComponent,
    AdminSignUpComponent,
    TeamSignInComponent,
    RoomComponent,
    RoomHeaderComponent,
    ScoreboardComponent,
    TimerComponent,
    GradingComponent,
    SelectQuestionsComponent,
    QuestionListComponent,
    PostedQuestionComponent,
    FinishGameComponent,
    TeamAnswerComponent,
    CreateRoomComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
