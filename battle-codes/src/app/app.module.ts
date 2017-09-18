import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { AboutComponent } from './home/about/about.component';
import { FooterComponent } from './footer/footer.component';
import { AdminSignInComponent } from './home/header/admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './home/header/admin-sign-in/admin-sign-up/admin-sign-up.component';
import { TeamSignInComponent } from './home/header/team-sign-in/team-sign-in.component';
import { RoomComponent } from './room/room.component';
import { RoomHeaderComponent } from './room/room-header/room-header.component';
import { ScoreboardComponent } from './room/scoreboard/scoreboard.component';
import { TimerComponent } from './room/timer/timer.component';
import { GradingComponent } from './room/admin-room/grading/grading.component';
import { SelectQuestionsComponent } from './room/admin-room/select-questions/select-questions.component';
import { QuestionListComponent } from './room/admin-room/question-list/question-list.component';
import { PostedQuestionComponent } from './room/posted-question/posted-question.component';
import { FinishGameComponent } from './room/admin-room/finish-game/finish-game.component';
import { TeamAnswerComponent } from './room/team-room/team-answer/team-answer.component';
import { CreateRoomComponent } from './home/create-room/create-room.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminRoomComponent } from './room/admin-room/admin-room.component';
import { TeamRoomComponent } from './room/team-room/team-room.component';

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
    AdminRoomComponent,
    TeamRoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
