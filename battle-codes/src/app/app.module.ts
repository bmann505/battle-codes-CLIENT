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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
