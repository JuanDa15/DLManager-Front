import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import Swal from 'sweetalert2';
import { environment } from '../../environments/environment.prod';
import { UpdateopService } from '../services/updateop.service';
import { Router } from '@angular/router';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-opetor-change-pass',
  templateUrl: './opetor-change-pass.component.html',
  styleUrls: ['./opetor-change-pass.component.scss']
})
export class OpetorChangePassComponent implements OnInit {

  constructor(private update: UpdateopService, private router: Router,private log: LogService) { }

  public cambiarpassForm = new FormGroup({
    contraseña: new FormControl('',Validators.required),
    contraseña_n: new FormControl('',Validators.required),
    contraseña_n2: new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }

  onChangePass(form){
    delete form['contraseña_n2'];
    form['key'] = environment.OPE_SIGNIN_KEY;
    this.update.patch(form).subscribe({
      next: value =>{
        Swal.fire({
          title: 'Contraseña cambiada correctamente',
          icon: 'success',
          position: 'top-right',
          timer: 2000
        })
        this.log.createLog('Cambio de contraseña usuario operador' ).subscribe({
          next: value =>{}
        })
        this.router.navigate(['/sesion/editarperfil']);
      },
      error: err => {
        Swal.fire({
          title: 'Error al cambiar su contraseña',
          icon: 'error',
          position: 'top-right',
          timer: 2000
        })
        form.reset();
      }
    })

  }

}
