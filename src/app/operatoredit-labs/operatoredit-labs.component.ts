import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../environments/environment.prod';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-operatoredit-labs',
  templateUrl: './operatoredit-labs.component.html',
  styleUrls: ['./operatoredit-labs.component.scss']
})
export class OperatoreditLabsComponent implements OnInit {

  constructor (private laboratorio:ClienteService,private activatedRoute: ActivatedRoute,private spinner:NgxSpinnerService,private router:Router,private log:LogService){}

  id = this.activatedRoute.snapshot.paramMap.get('id');
  correo = '';
  contraseña ='';

  public laboratorioForm = new FormGroup({
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

  ngOnInit(){
    this.spinner.show();
    this.getUsuario();
  }

  getUsuario(){
    this.laboratorio.get(this.id).subscribe({
      next: value =>{
        var data = value['data']['laboratorio']
        var owner = value['data']['propietario']
        this.laboratorioForm.patchValue({
          nombre_l: data['nombre'],
          nit: data['nit'],
          telefono_l: data['telefono'],
          correo_l: data['correo'],
          direccion_l: data['direccion'],
          nombre_p: owner['nombre'],
          cedula_p: owner['cedula'],
          correo_p: owner['correo'],
          telefono_p: owner['telefono']
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

  onUpdate(form){
    this.laboratorio.put(form,this.id.toString()).subscribe({
      next: value => {
        Swal.fire({
          title: 'Datos actualizados correctamente',
          icon: 'success',
          position: 'top-right',
          timer: 2000
        }),
        this.log.createLog('Modificación Usuario: ' + form['correo_l']).subscribe({
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
        this.getCrendential();
      }
    })
  }

  async getCrendential(){
    const { value: formValues } = await   Swal.fire({
      imageUrl: '../../assets/img/logo_size.jpg',
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: 'Logo',
      title: 'Ingrese las credenciales de super usuario',
      confirmButtonText: 'Borrar',
      confirmButtonColor: '#0F7CDB',
      showDenyButton:true,
      denyButtonText:'Cancelar',
      denyButtonColor: '#0F7CDB',
      html:
      '<input id="swal-input1" class="swal2-input" placeholder="Correo">' +
      '<input id="swal-input2" class="swal2-input" placeholder="Contraseña">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1')['value'],
          document.getElementById('swal-input2')['value']
        ]
      }
    })
    if (formValues) {
      this.correo = formValues[0];
      this.contraseña = formValues[1];

      if(this.correo == environment.DEFAULT_SU_EMAIL){
        if(this.contraseña == environment.DEFAULT_SU_PASSWORD){
          this.laboratorio.delete(this.id).subscribe({
            next: value =>{
              Swal.fire({
                position: 'top-right',
                icon: 'success',
                title: 'Eliminado satisfactoriamente',
                timer: 2000
              }),
              this.log.createLog('Eliminar usuario: ' + this.id).subscribe({
                next: value =>{}
              }),
              this.router.navigate(['sesion/navegar/verclientes']);
            },
            error: err =>{
              Swal.fire({
                position: 'top-right',
                icon: 'success',
                title: 'Error al eliminar usuario',
                timer: 2000
              })
              this.router.navigate(['sesion/navegar/verclientes']);
            }
          })
        }
      }
    }
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
    this.laboratorio.patch({'visible': 0},this.id).subscribe({
      next: value => {
        Swal.fire({
          position: 'top-right',
          icon: 'success',
          title: 'Oculto satisfactoriamente',
          timer: 2000
        }),
        this.log.createLog('Ocultar Usuario: ' + this.id).subscribe({
          next: value =>{}
        }),
        this.router.navigate(['sesion/navegar/verclientes']);
      },
      error: err =>{
        Swal.fire({
          position: 'top-right',
          icon: 'error',
          title: 'Error al ocultar usuario',
          timer: 2000
        })
      }
    })
  })
  }
}
