import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LogoutService {

  constructor(private http: HttpClient){ 
  }
  // GET,POST, PATCH, DELETE
  get(){
    return this.http.get(environment.backendUrl + 'logout', {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
  }
}