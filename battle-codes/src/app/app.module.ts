import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { AboutComponent } from './home/about/about.component';
import { FooterComponent } from './footer/footer.component';
import { AdminSignInComponent } from './home/header/admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './home/header/admin-sign-in/admin-sign-up/admin-sign-up.component';
import { AuthService } from './auth.service';

import { TeamSignInComponent } from './home/header/team-sign-in/team-sign-in.component';
import { RoomComponent } from './home/room/room.component';
import { RoomHeaderComponent } from './home/room/room-header/room-header.component';
import { ScoreboardComponent } from './home/room/scoreboard/scoreboard.component';
import { TimerComponent } from './home/room/timer/timer.component';
import { GradingComponent } from './home/room/admin-room/grading/grading.component';
import { SelectQuestionsComponent } from './home/room/admin-room/select-questions/select-questions.component';
import { QuestionListComponent } from './home/room/admin-room/question-list/question-list.component';
import { PostedQuestionComponent } from './home/room/posted-question/posted-question.component';
import { FinishGameComponent } from './home/room/admin-room/finish-game/finish-game.component';
import { TeamAnswerComponent } from './home/room/team-room/team-answer/team-answer.component';
import { CreateRoomComponent } from './home/create-room/create-room.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminRoomComponent } from './home/room/admin-room/admin-room.component';
import { TeamRoomComponent } from './home/room/team-room/team-room.component';
import { roomService } from './room.service';
import { timerTrackService } from './timerTrack.service';
// import { timerService } from './timer.service';
import { questionsService } from './questions.service'


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
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ timerTrackService, roomService, AuthService, questionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
