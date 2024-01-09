import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  console.log(form)
}
constructor(){}
ngOnInit(): void {
}

}
