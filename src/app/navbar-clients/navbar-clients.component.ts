import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LogoutService } from '../services/logout.service';

@Component({
  selector: 'app-navbar-clients',
  templateUrl: './navbar-clients.component.html',
  styleUrls: ['./navbar-clients.component.scss'],
})
export class NavbarClientsComponent implements OnInit {
  constructor(private loguotservice: LogoutService, private router: Router) {}

  ngOnInit(): void {}

  onLogOut() {
    this.loguotservice.get().subscribe({
      next: (value) => {
        Swal.fire({
          title: 'Sesión cerrada correctamente',
          icon: 'success',
          position:'top-right',
          timer: 2000
        });
        localStorage.removeItem('token');
        this.router.navigate(['']);
      },
      error: (err) => {
        Swal.fire({
          title: 'Tu sesion a expirado',
          icon: 'error',
          position: 'top-right',
          timer: 2000
        });
        localStorage.removeItem('token');
        this.router.navigate(['']);
      },
    });
  }
}
