import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CodegService {
  constructor(private http: HttpClient) {}

  post(body) {
    return this.http.post(environment.backendUrl + 'discount', body,{headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
  }
}
