import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UpdateopService {

  constructor(private http: HttpClient) { }

  patchOpe(body){
    return this.http.patch(environment.backendUrl + 'adminpatch',body,{headers: {Authorization: `Bearer ${environment.OPE_SIGNIN_KEY}`}});
  }
}
