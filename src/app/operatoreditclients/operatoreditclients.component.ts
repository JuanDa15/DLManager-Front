import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-operatoreditclients',
  templateUrl: './operatoreditclients.component.html',
  styleUrls: ['./operatoreditclients.component.scss']
})
export class OperatoreditclientsComponent implements OnInit{

  constructor(private cliente:ClienteService,private spinner:NgxSpinnerService,private activatedRoute: ActivatedRoute,private router:Router,private log: LogService){}

  id = this.activatedRoute.snapshot.paramMap.get('id');
  correo = '';
  contraseña ='';
  
  public odontologoForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    cedula: new FormControl('',Validators.required),
    correo: new FormControl('',Validators.compose([Validators.required,Validators.email])),
    telefono: new FormControl('',Validators.required),
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
          Swal.fire({
            position: 'top-right',
            icon: 'success',
            title: 'Oculto satisfactoriamente',
            timer: 2000
          })
          this.log.createLog('Ocultar Usuario: ' + this.id).subscribe({
            next: value =>{}
          })
          this.router.navigate(['/sesion/navegar/verclientes']);
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
          this.cliente.delete(this.id).subscribe({
            next: value =>{
              Swal.fire({
                position: 'top-right',
                icon: 'success',
                title: 'Eliminado satisfactoriamente',
                timer: 2000
              })
              this.log.createLog('Eliminar Usuario: ' + this.id).subscribe({
                next: value =>{}
              }),
              this.router.navigate(['/sesion/navegar/verclientes']);
            },
            error: err =>{
              Swal.fire({
                position: 'top-right',
                icon: 'success',
                title: 'Error al eliminar usuario',
                timer: 2000
              })
              this.router.navigate(['/sesion/navegar/verclientes'])
            }
          })
        }
      }
    }
  }

}
