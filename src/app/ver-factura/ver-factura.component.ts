import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-ver-factura',
  templateUrl: './ver-factura.component.html',
  styleUrls: ['./ver-factura.component.scss']
})
export class VerFacturaComponent implements OnInit { 
  
  email = '';
  password = '';

  constructor() { }

  public facturaForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    id: new FormControl('',Validators.required),
    correo: new FormControl('', Validators.compose([Validators.required,Validators.email])),
    telefono: new FormControl('',Validators.compose([Validators.required,Validators.minLength(7),Validators.maxLength(10)])),
    nombre_p: new FormControl('',Validators.required),
    comentario: new FormControl('',Validators.required),
    direccion: new FormControl('',Validators.required),
    precio: new FormControl('',Validators.required),
    fecha: new FormControl('',Validators.required),
    estado: new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }

  showAlert(){
    Swal.fire({
      icon: 'warning',
      text: '¿Estas seguro que deseas eliminar el pedido?',
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
          denyButtonColor: '#0F7CDB'
          }
        )
      }
    })
  }
}
