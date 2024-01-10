import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { authGuard } from './gardes/auth.guard';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SaleVehiclesComponent } from './sale-vehicles/sale-vehicles.component';
import { VehiclesOutComponent } from './vehicles-out/vehicles-out.component';


const routes: Routes = [
  {path:"",redirectTo:"/Login",pathMatch:"full"},
  {path:"Home",component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'createUser',component:CreateUserComponent},
  {path:'ForgetPass',component:ForgetPassComponent},
  {path:'addVehicle',component:AddVehicleComponent},
  {path:'search',component:SearchComponent},
  {path:"VehicleDetails/:Id",component:VehicleDetailsComponent},
  {path:"vehicles",component:VehiclesComponent},
  {path:'saleVehicles',component:SaleVehiclesComponent},
  {path:'vehiclesOut',component:VehiclesOutComponent},
  {path:'**',component:NotfoundComponent},

  ];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
