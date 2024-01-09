import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    CreateUserComponent,
    ForgetPassComponent,
    AddVehicleComponent,
    HomeComponent,
    SearchComponent,
    NotfoundComponent,
    VehicleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
