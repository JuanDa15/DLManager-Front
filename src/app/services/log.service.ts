import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { TokenmanagerService } from './tokenmanager.service';

@Injectable({
  providedIn: 'root'
})

export class LogService {

  constructor(private http: HttpClient,private manager: TokenmanagerService) { }

  post(body){
    return this.http.post(environment.backendUrl + 'registro' ,body,{headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
  }

  createLog(message){
    var today = new Date();
    var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return this.post({
      id_cliente: this.manager.getEmail(),
      fecha: date,
      hora: time,
      descripcion: message
    })
  }

  get(){
    return this.http.get(environment.backendUrl + 'registro',  {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
  }
}
