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

  getPassword(){
    if(localStorage.getItem('token') !== null){
      return jwtDecode(localStorage.getItem('token'))['contraseña'];
    }
  }

  getID(){
    if(localStorage.getItem('token') !== null){
      return jwtDecode(localStorage.getItem('token'))['id'];
    }
    return false;
  }

  getName(){
    if(localStorage.getItem('token') !== null){
      return jwtDecode(localStorage.getItem('token'))['nombre'];
    }
    return false;
  }
}
