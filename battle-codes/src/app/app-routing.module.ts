import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminRoomComponent } from './home/room/admin-room/admin-room.component';
import { TeamRoomComponent } from './home/room/team-room/team-room.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'admin', component: AdminRoomComponent },
  {path: 'team', component: TeamRoomComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
