import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenmanagerService } from '../services/tokenmanager.service';

@Injectable({
  providedIn: 'root'
})
export class OperadorGuard implements CanActivate {

  constructor(private jwtm:TokenmanagerService,private router: Router) { }

  canActivate() {
    if (this.jwtm.getPermissions() == 3){
      return true
    }else{
      this.router.navigate(['/sesion']);
      return false
    }
  }
}

