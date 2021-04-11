import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { ClienteService } from '../services/cliente.service';
import { TokenmanagerService } from '../services/tokenmanager.service';
import { LogService } from '../services/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile-odont',
  templateUrl: './edit-profile-odont.component.html',
  styleUrls: ['./edit-profile-odont.component.scss']
})
export class EditProfileOdontComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private usuario:ClienteService, private jwmt: TokenmanagerService,private log:LogService, private router: Router) { }

  public odtForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    cedula: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    direccion: new FormControl('', Validators.required)
  })

  id = this.jwmt.getID()

  ngOnInit(): void {
    this.spinner.show()
    this.getInfo();
  }

  getInfo(){
    this.usuario.get(this.id).subscribe({
      next:value =>{
        var data = value['data'];
        this.odtForm.patchValue({
          nombre: data['nombre'],
          cedula: data['cedula'],
          telefono: data['telefono'],
          correo: data['correo'],
          direccion: data['direccion']
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
    this.usuario.put(form,this.id.toString()).subscribe({
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
      error: err => {
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
    this.usuario.delete(this.id).subscribe({
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
