import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, Validators, FormGroup } from '@angular/forms';
import { UpdateopService } from '../services/updateop.service';
import { environment } from '../../environments/environment.prod';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { TokenmanagerService } from '../services/tokenmanager.service';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-operator-edit-pro',
  templateUrl: './operator-edit-pro.component.html',
  styleUrls: ['./operator-edit-pro.component.scss']
})
export class OperatorEditProComponent implements OnInit {

  constructor(private update: UpdateopService,private spinner: NgxSpinnerService, private manager: TokenmanagerService,private log:LogService) { }

  public opeForm = new FormGroup({
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
    direccion_l: new FormControl('',Validators.required)
  })

  ngOnInit(): void {
    this.spinner.show();
    this.getInfo();
  }
  
  getInfo(){
    this.update.get().subscribe({
      next: value => {
        var data = value['data']
        this.opeForm.patchValue({
          nombre: data['nombre'],
          cedula: data['cedula'],
          telefono: data['telefono'],
          correo: data['correo'],
          cta_1:data['cta_1'],
          cta_2:data['cta_2'],
          nombre_l:data['nombre_l'],
          nit_l: data['nit_l'],
          telefono_l: data['telefono_l'],
          correo_l: data['correo_l'],
          direccion_l:data['direccion_l']
        });
        this.spinner.hide();
      },
      error: err => {
        Swal.fire({
          title: 'Error al cargar los datos',
          position: 'top-right',
          icon: 'error',
          timer: 2000
        })
        this.spinner.hide();
      }
    })
  }

  onUpdate(form){
      form['key'] = environment.OPE_SIGNIN_KEY;
      form['contraseña'] = this.manager.getPassword();
      this.update.put(form).subscribe({
        next: value => {
          Swal.fire({
            title: 'Usuario Editado con exito',
            icon: 'success',
            position: 'top-right',
            timer: 2000
          })
          this.log.createLog('Modificación Usuario: ' + form['correo']).subscribe({
            next: value =>{}
          })
        },
        error: err => {
          Swal.fire({
            title: 'No se pudo modificar la información',
            icon: 'error',
            position: 'top-right',
            timer: 2000
          })
        }
      })
  }

}
