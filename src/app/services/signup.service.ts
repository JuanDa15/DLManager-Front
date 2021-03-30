import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SignupService{

  constructor(private http: HttpClient){ 
  }
  // GET,POST, PATCH, DELETE
  post(body){
    return this.http.post(environment.backendUrl + 'signup',body);
  }
}
