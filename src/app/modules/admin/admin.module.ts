import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StudentsComponent } from './components/students/students.component';
import { MarksComponent } from './components/marks/marks.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    SideNavComponent,
    ProfileComponent,
    StudentsComponent,
    MarksComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
