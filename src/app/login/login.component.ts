import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SigninService } from '../services/signin.service';
import { environment } from '../../environments/environment.prod';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TokenmanagerService } from '../services/tokenmanager.service';
import { LogService } from '../services/log.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private signinservice: SigninService, private router: Router, private jwtm: TokenmanagerService, private log: LogService){}

  public loginForm = new FormGroup({
    correo : new FormControl('',Validators.compose([Validators.required, Validators.email])),
    contraseña: new FormControl('',Validators.required)
  });

  ngOnInit(): void {
  }

  onSignIn(form){
    form['signin_key'] = environment.ODT_SIGNIN_KEY;
    this.signinservice.post(form).subscribe({
      next: value => {
        Swal.fire({
          title: 'Ingreso exitoso',
          timer: 2000,
          icon: 'success',
          position: 'top-right'
        }),
        this.log.createLog('Inicion de sesion: ' + form['correo']).subscribe({
          next: value =>{}
        })
        localStorage.setItem('token',value['token']);
        if(this.jwtm.getPermissions() == 1){
          this.router.navigate(['sesionc/navegarc/panellaboratorio']);
        }
        if(this.jwtm.getPermissions() == 2){
          this.router.navigate(['sesionc/navegarc/panelodontologo']);
        }
        if(this.jwtm.getPermissions() == 3){
          this.router.navigate(['sesion/navegar/paneloperador']);
        }
      },
      error: err => {
        Swal.fire({
          title: err.error.detail,
          icon: 'error',
          position: 'top-right'
        })
      }
    })
  }

}
