import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UpdateopService {

  constructor(private http: HttpClient) { }

  put(body){
    return this.http.put(environment.backendUrl + 'opeservice',body,{headers: {Authorization: `Bearer ${environment.OPE_SIGNIN_KEY}`}});
  }

  get(){
    return this.http.get(environment.backendUrl + 'opeservice', {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
  }

  patch(body){
    return this.http.patch(environment.backendUrl + 'opeservice',body,{headers: {Authorization: `Bearer ${environment.OPE_SIGNIN_KEY}`}});
  }
}
