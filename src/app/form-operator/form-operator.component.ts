import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../environments/environment.prod';
import { UpdateopService } from '../services/updateop.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-operator',
  templateUrl: './form-operator.component.html',
  styleUrls: ['./form-operator.component.scss']
})
export class FormOperatorComponent implements OnInit {

  constructor(private router:Router,private update: UpdateopService) { }

  public operatorForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    cedula: new FormControl('',Validators.required),
    telefono: new FormControl('',Validators.required),
    correo: new FormControl('',Validators.compose([Validators.required,Validators.email])),
    cta_1: new FormControl('',Validators.required),
    cta_2: new FormControl('',Validators.required),
    nombre_l: new FormControl('',Validators.required),
    nit_l: new FormControl('',Validators.required),
    telefono_l: new FormControl('',Validators.required),
    correo_l: new FormControl('',Validators.compose([Validators.required,Validators.email])),
    direccion_l: new FormControl('',Validators.required),
    contraseña: new FormControl('',Validators.required),
    contraseña2: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }

  onSignUpOp(form){
    delete form['contraseña2'];
    form['key'] = environment.OPE_SIGNIN_KEY;
    this.update.put(form).subscribe({
      next: value => {
        Swal.fire({
          title: 'Datos guardados correctamente',
          icon : 'success',
          position: 'top-right',
          timer: 2000
        })
        this.router.navigate(['']);
      },error: err =>{
        Swal.fire({
          title: 'Error al guardar los datos',
          icon: 'error',
          position: 'top-right',
          timer:2000
        })
        form.reset();
      }
    })
  }
}
