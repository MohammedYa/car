import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
BaseUrl:string="http://mohammedramadan-001-site1.htempurl.com"
constructor(private _HttpClient:HttpClient) { }

login(form:any):Observable<any>{
return this._HttpClient.post("http://mohammedramadan-001-site1.htempurl.com/api/Login",form)
}

}
