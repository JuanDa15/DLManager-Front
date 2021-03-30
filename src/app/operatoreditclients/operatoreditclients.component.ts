import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-operatoreditclients',
  templateUrl: './operatoreditclients.component.html',
  styleUrls: ['./operatoreditclients.component.scss']
})
export class OperatoreditclientsComponent implements OnInit{

  constructor(private cliente:ClienteService,private spinner:NgxSpinnerService,private activatedRoute: ActivatedRoute){}

  id = this.activatedRoute.snapshot.paramMap.get('id');
  
  public odontologoForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    cedula: new FormControl('',Validators.required),
    correo: new FormControl('',Validators.compose([Validators.required,Validators.email])),
    telefono: new FormControl('',Validators.compose([Validators.required,Validators.minLength(7),Validators.maxLength(11)])),
    direccion: new FormControl('',Validators.required)
  })

  ngOnInit(){
    this.spinner.show()
    this.getUsuario();
  }

  getUsuario(){
    this.cliente.get(this.id).subscribe({
      next: value => {
        var data = value['data']
        this.odontologoForm.patchValue({
          nombre: data['nombre'],
          cedula: data['cedula'],
          telefono: data['telefono'],
          correo: data['correo'],
          direccion: data['direccion']
        })
        this.spinner.hide();
      },
      error: err => {
        Swal.fire({
          title: 'Error al cargar la información',
          icon: 'error',
          position: 'top-right',
          timer: 2000
        })
        this.spinner.hide();
      }
    })
  }

  onUpdate(form){
    this.cliente.put(form,this.id.toString()).subscribe({
      next: value => {
        Swal.fire({
          title: 'Datos actualizados correctamente',
          icon: 'success',
          position: 'top-right',
          timer: 2000
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

  onHide(){
    Swal.fire({
      icon:'warning',
      text:'¿Estas seguro que deseas ocultar el usuario?Esto no lo eliminara de la base de datos',
      confirmButtonText:'Si',
      confirmButtonColor: 'green',showDenyButton:true,
      denyButtonText:'No',
      denyButtonColor:'red',
    }).then((result)=>{
      this.cliente.patch({'visible': 0},this.id).subscribe({
        next: value => {
          console.log(value);
        },
        error: err =>{
          console.log(err);
        }
      })
    })
  }

  showAlert(){
    Swal.fire({
      icon: 'warning',
      text: '¿Estas seguro que deseas eliminar el cliente permanentemente?',
      confirmButtonText:'Si',
      confirmButtonColor: 'green',showDenyButton:true,
      denyButtonText:'No',
      denyButtonColor:'red',
      showCloseButton:true
    }).then((result)=>{
      if(result.isConfirmed){
        Swal.fire({
          imageUrl: '../../assets/img/logo_size.jpg',
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: 'Logo',
          title: 'Ingrese las credenciales de super usuario',
          html:
          '<input id="swal-input1" class="swal2-input" placeholder="Correo">' +
          '<input id="swal-input2" class="swal2-input" placeholder="Contraseña">',
          confirmButtonText: 'Borrar',
          confirmButtonColor: '#0F7CDB',
          showDenyButton:true,
          denyButtonText:'Cancelar',
          denyButtonColor: '#0F7CDB',
        })
      }
    })
  }

  HideClient(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Oculto satisfactoriamente',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
