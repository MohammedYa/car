import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';

const routes: Routes = [
  {path:"",redirectTo:"/Home",pathMatch:"full"},
  {path:"Home",component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'createUser',component:CreateUserComponent},
  {path:'ForgetPass',component:ForgetPassComponent},
  {path:'search',component:SearchComponent},
  {path:"VehicleDetails",component:VehicleDetailsComponent},
  {path:'**',component:NotfoundComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
