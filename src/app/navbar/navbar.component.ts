import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LogoutService } from '../services/logout.service';
import { TokenmanagerService } from '../services/tokenmanager.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  
  constructor(private loguotservice: LogoutService, private router:Router,private tokenm: TokenmanagerService){}

  correo = this.tokenm.getEmail();
  ngOnInit(): void {
  }

  onLogOut(){
    this.loguotservice.get().subscribe({
      next: value => {
        Swal.fire({
          title : 'Sesión cerrada correctamente',
          icon : 'success',
          position: 'top-right',
          timer: 2000
        })
        localStorage.removeItem('token');
        this.router.navigate(['']);
      },
      error: err => {
        Swal.fire({
          title: 'Tu sesion a expirado',
          icon: 'error',
          position:'top-right',
          timer: 2000
        })
        localStorage.removeItem('token');
        this.router.navigate(['']);
      }
    });
  }
}
