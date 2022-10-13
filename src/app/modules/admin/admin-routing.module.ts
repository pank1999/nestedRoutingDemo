import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MarksComponent } from './components/marks/marks.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  {path:"admin",component:AdminHomeComponent,
    children:[

      {path:"profile",component:ProfileComponent},
      {path:"students",component:StudentsComponent},
      {path:"marks",component:MarksComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
