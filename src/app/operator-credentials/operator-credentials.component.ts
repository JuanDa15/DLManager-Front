import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../services/signin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../environments/environment.prod';
import Swal from 'sweetalert2';
import { TokenmanagerService } from '../services/tokenmanager.service';

@Component({
  selector: 'app-operator-credentials',
  templateUrl: './operator-credentials.component.html',
  styleUrls: ['./operator-credentials.component.scss']
})
export class OperatorCredentialsComponent implements OnInit {

  constructor(private signinservice: SigninService, private router: Router,private jwtm: TokenmanagerService){}

  public credentialsForm = new FormGroup({
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
        })
        localStorage.setItem('token',value['token']);
        if(this.jwtm.getPermissions() == 1){
          this.router.navigate(['sesionc/navegarc/panellaboratorio']);
        }
        if(this.jwtm.getPermissions() == 2){
          this.router.navigate(['sesionc/navegarc/panelodontologo']);
        }
        if(this.jwtm.getPermissions() == 3){
          this.router.navigate(['/operadorform']);
        }
      },
      error: err => {
        Swal.fire({
          title: err.error.detail,
          icon: 'error',
          position: 'top-right',
          timer: 2000
        })
      }
    })
  }

}
