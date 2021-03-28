import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-operatoredit-labs',
  templateUrl: './operatoredit-labs.component.html',
  styleUrls: ['./operatoredit-labs.component.scss']
})
export class OperatoreditLabsComponent {
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
          denyButtonColor: '#0F7CDB'
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
