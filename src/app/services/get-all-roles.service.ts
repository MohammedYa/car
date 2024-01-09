import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAllRolesService {


  constructor(private _httpClient: HttpClient) {}

  getAllUsers(form: any): Observable<any> {
    // Replace 'YOUR_TOKEN_HERE' with the actual token you want to send
    const token = localStorage.getItem("userToken");

    // Create headers with Authorization token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP GET request with headers
    return this._httpClient.get('http://mohammedramadan-001-site1.htempurl.com/api/Auth/GetAllRoles',{headers});
}



}
