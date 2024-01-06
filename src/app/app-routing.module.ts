import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';

const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'createUser',component:CreateUserComponent},
  {path:'ForgetPass',component:ForgetPassComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
