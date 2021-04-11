import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LogoutService } from '../services/logout.service';
import { TokenmanagerService } from '../services/tokenmanager.service';

@Component({
  selector: 'app-navbar-clients',
  templateUrl: './navbar-clients.component.html',
  styleUrls: ['./navbar-clients.component.scss'],
})
export class NavbarClientsComponent implements OnInit {
  constructor(private loguotservice: LogoutService, private router: Router,private route:Router,private jwtm:TokenmanagerService) {}

  correo = this.jwtm.getName();

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

  editProfile(){
    if(this.jwtm.getPermissions()==1){
      this.router.navigate(['sesionc/editarperfillab']);
    }
    if(this.jwtm.getPermissions()==2){
      this.router.navigate(['sesionc/editarperfilodt']);
    }
  }

  selectPanel(){
    if(this.jwtm.getPermissions()==1){
      this.router.navigate(['sesionc/navegarc/panellaboratorio']);
    }
    if(this.jwtm.getPermissions()==2){
      this.router.navigate(['sesionc/navegarc/panelodontologo']);
    }
  }

}
