import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private _httpClient:HttpClient) { }
  addUser(form:any):Observable<any>{
    return this._httpClient.post('http://mohammedramadan-001-site1.htempurl.com/api/Auth/AddUser',form)
  }
}
