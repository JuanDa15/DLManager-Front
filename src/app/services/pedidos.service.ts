import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get(environment.backendUrl + 'pedidos', {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
  }
}
