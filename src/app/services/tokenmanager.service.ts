import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenmanagerService {

  constructor() { }

  getPermissions(){
    if(localStorage.getItem('token') !== null){
      return jwtDecode(localStorage.getItem('token'))['plg'];
    }
    return false;
  }
  
  getEmail(){
    if(localStorage.getItem('token') !== null){
      return jwtDecode(localStorage.getItem('token'))['correo'];
    }
    return false;
  }

  

}
