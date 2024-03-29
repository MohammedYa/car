import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {jwtDecode} from 'jwt-decode';
import { BehaviorSubject}from'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
UserData=new BehaviorSubject(null)
constructor(private _HttpClient:HttpClient,private _Router:Router) { 
  if(localStorage.getItem('userToken')!=null){
    this.saveUserData( )
  }
}

login(form:any):Observable<any>{
return this._HttpClient.post("http://mohammedramadan-001-site1.htempurl.com/api/Login",form)
}
saveUserData(){
let encodedToken=localStorage.getItem("userToken")
let decodedToken:any=jwtDecode(<string>encodedToken)
this.UserData.next(decodedToken)
}
logOut(){
  localStorage.removeItem("userToken")
  localStorage.removeItem("isAdmin")
  this.UserData.next(null)
  this._Router.navigateByUrl('/Login')

}}
