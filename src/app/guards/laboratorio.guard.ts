import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenmanagerService } from '../services/tokenmanager.service';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioGuard implements CanActivate {
  constructor(private jwtm:TokenmanagerService,private router: Router) { }

  canActivate() {
    if (this.jwtm.getPermissions() == 1){
      return true
    }else{
      this.router.navigate(['/sesion']);
      return false
    }
  }
}
