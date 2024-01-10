import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
LoginForm:FormGroup=new FormGroup(
{
  "userName":new FormControl(null,[Validators.minLength(3),Validators.maxLength(30),Validators.required]),
  "password":new FormControl(null,[Validators.pattern(/^[A-Za-z0-9]{6,}$/),Validators.required])
}
)
sendLoginForm(form:FormGroup){
  this._LoginService.login(form.value).subscribe(
    (res)=>{
      console.log(res);
      
    if(res.message=="Successfully"){
      localStorage.setItem("userToken",res.data.token)
      localStorage.setItem("isAdmin",res.data.isAdmin)
      this.navgate()
    }
    
  }
  ,(err)=>{
    console.log(err);
    
  }
  )
}
constructor(private _LoginService:LoginService,private _Router:Router){
  
}
ngOnInit(): void {
}
navgate(){
  this._Router.navigateByUrl('/Home')

}
}
