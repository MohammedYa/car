import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  status:boolean=false
  okstatus:boolean=false;
  Unstatus:boolean=false;
  changeStatusOk(){
  
  this.Unstatus=false;
  this.okstatus=true
  
  }
  changeStatusUn(){
  
    this.Unstatus=true;
    this.okstatus=false
  
  }
}
