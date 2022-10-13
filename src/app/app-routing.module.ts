import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminHomeComponent } from './modules/admin/admin-home/admin-home.component';
import { UserCoursesComponent } from './modules/user/components/user-courses/user-courses.component';
import { UserNotesComponent } from './modules/user/components/user-notes/user-notes.component';
import { UserProfileComponent } from './modules/user/components/user-profile/user-profile.component';
import { LoginComponent } from './modules/user/login/login.component';
import { UserHomeComponent } from './modules/user/user-home/user-home.component';


const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"user" , component:LoginComponent ,
   children:[
         {path:"home" , component:UserHomeComponent,
           children:[
               {path:"Profile" , component:UserProfileComponent},
               {path:"Notes" , component:UserNotesComponent},
               {path:"Courses",component:UserCoursesComponent},
               {path:"**",component:UserProfileComponent}
           ]
        },
    ] 
  },
  {path:"admin",component:AdminHomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
