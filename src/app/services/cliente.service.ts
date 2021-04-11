import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  patch(body,pk){
    return this.http.patch(environment.backendUrl + 'cliente/' + pk ,body,{headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
  }

  get(pk){
    return this.http.get(environment.backendUrl + 'cliente/' + pk,  {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
  }

  delete(pk){
    return this.http.delete(environment.backendUrl + 'cliente/' +pk ,{headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
  }

  put(body,pk){
    return this.http.put(environment.backendUrl + 'cliente/' + pk,body,{headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}})
  }

  patchPass(body,pk){
    return this.http.patch(environment.backendUrl + 'clientep/' + pk ,body,{headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
  }
}
