import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserSideNavComponent } from './user-side-nav/user-side-nav.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserNotesComponent } from './components/user-notes/user-notes.component';
import { UserCoursesComponent } from './components/user-courses/user-courses.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    UserSideNavComponent,
    UserProfileComponent,
    UserNotesComponent,
    UserCoursesComponent,
    UserHomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class UserModule { }
