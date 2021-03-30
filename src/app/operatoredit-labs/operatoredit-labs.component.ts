import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-operatoredit-labs',
  templateUrl: './operatoredit-labs.component.html',
  styleUrls: ['./operatoredit-labs.component.scss']
})
export class OperatoreditLabsComponent implements OnInit {

  constructor (private laboratorio:ClienteService,private activatedRoute: ActivatedRoute,private spinner:NgxSpinnerService){}

  id = this.activatedRoute.snapshot.paramMap.get('id');

  public laboratorioForm = new FormGroup({
    nombre : new FormControl('',Validators.required),
    nit: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(11)])),
    telefono: new FormControl('',Validators.compose([Validators.required,Validators.minLength(7),Validators.maxLength(10)])),
    correo: new FormControl('',Validators.compose([Validators.required,Validators.email])),
    direccion: new FormControl('',Validators.required)
  })

  ngOnInit(){
    this.spinner.show();
    this.getUsuario();
  }

  onUpdate(form){
    
  }

  getUsuario(){
    this.laboratorio.get(this.id).subscribe({
      next: value =>{
        console.log(value);
        var data = value['data']
        this.laboratorioForm.patchValue({
          nombre: data['nombre'],
          nit: data['nit'],
          telefono: data['telefono'],
          correo: data['correo'],
          direccion: data['direccion']
        })
        this.spinner.hide();
      },
      error: err =>{
        Swal.fire({
          title: 'Error al cargar los datos',
          icon: 'error',
          timer: 2000,
          position:'top-right'
        })
        this.spinner.hide();
      }
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
