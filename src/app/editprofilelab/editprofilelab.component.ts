import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { ClienteService } from '../services/cliente.service';
import { TokenmanagerService } from '../services/tokenmanager.service';
import { LogService } from '../services/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofilelab',
  templateUrl: './editprofilelab.component.html',
  styleUrls: ['./editprofilelab.component.scss']
})
export class EditprofilelabComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private laboratorio: ClienteService, private jmwt: TokenmanagerService, private log: LogService, private router: Router) { }

  public labForm = new FormGroup({
    nombre_l : new FormControl('',Validators.required),
    nit: new FormControl('',Validators.required),
    telefono_l: new FormControl('',Validators.required),
    correo_l: new FormControl('',Validators.compose([Validators.required,Validators.email])),
    direccion_l: new FormControl('',Validators.required),
    nombre_p : new FormControl('',Validators.required),
    cedula_p: new FormControl('',Validators.required),
    telefono_p: new FormControl('',Validators.required),
    correo_p: new FormControl('',Validators.compose([Validators.required,Validators.email]))
  })

  id = this.jmwt.getID();

  ngOnInit(): void {
    this.spinner.show();
    this.getInfo();
  }

  getInfo(){
    this.laboratorio.get(this.id).subscribe({
      next: value => {
        var lab = value['data']['laboratorio'];
        var owner = value['data']['propietario'];
        this.labForm.patchValue({
          nombre_p: owner['nombre'],
          cedula_p: owner['cedula'],
          telefono_p: owner['telefono'],
          correo_p: owner['correo'],
          nombre_l:lab['nombre'],
          nit: lab['nit'],
          telefono_l: lab['telefono'],
          correo_l: lab['correo'],
          direccion_l: lab['direccion']
        });
        this.spinner.hide()
      },
      error: err =>{
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
    this.laboratorio.put(form,this.id.toString()).subscribe({
      next: value =>{
        Swal.fire({
          title: 'Datos actualizados correctamente',
          icon: 'success',
          position: 'top-right',
          timer: 2000
        }),
        this.log.createLog('Modificación Usuario: ' + form['correo']).subscribe({
          next: value =>{}
        })
      },
      error: err =>{
        Swal.fire({
          title: 'No se pudieron actualizar los datos',
          icon: 'error',
          position: 'top-right',
          timer: 2000
        })
      }
    })
  }

  onDelete(){
    this.laboratorio.delete(this.id).subscribe({
      next: value =>{
        Swal.fire({
          title: 'Cuenta eliminada correctamente',
          icon: 'success',
          position: 'top-right',
          timer: 2000
        })
        this.router.navigate([''])
      },
      error: err =>{
        Swal.fire({
          title: 'No se pudo eliminar la cuenta',
          icon: 'error',
          position: 'top-right',
          timer: 2000
        })
      }
    })
  }


  alert(){
    Swal.fire({
      icon: 'warning',
      text: '¿Estas seguro que deseas eliminar tu cuenta permanentemente?',
      confirmButtonText:'Si',
      confirmButtonColor: 'green',showDenyButton:true,
      denyButtonText:'No',
      denyButtonColor:'red',
      showCloseButton:true
    }).then((result)=>{
      if(result.isConfirmed){
        this.onDelete();
      }
    })
  }

}
