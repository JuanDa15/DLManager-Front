import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class PedidoService {

  constructor(private http: HttpClient) { }

  patch(body,pk){
    return this.http.patch(environment.backendUrl + 'pedido/' + pk ,body,{headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
  }

  get(pk){
    return this.http.get(environment.backendUrl + 'pedido/' + pk,  {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
  }

  delete(pk){
    return this.http.delete(environment.backendUrl + 'pedido/' +pk ,{headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
  }

  post(body){
    return this.http.post(environment.backendUrl + 'pedido',body,{headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}})
  }
}
