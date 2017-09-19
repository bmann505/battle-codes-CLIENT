import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminRoomComponent } from './home/room/admin-room/admin-room.component';
import { TeamRoomComponent } from './home/room/team-room/team-room.component';
import { AuthGuard } from './home/header/auth-guard.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'admin', component: AdminRoomComponent, canActivate: [AuthGuard] },
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
