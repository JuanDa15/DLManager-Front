import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from '../services/pedido.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ClienteService } from '../services/cliente.service';
import { environment } from '../../environments/environment.prod';
import { LogService } from '../services/log.service';
import { TokenmanagerService } from '../services/tokenmanager.service';

@Component({
  selector: 'app-ver-factura',
  templateUrl: './ver-factura.component.html',
  styleUrls: ['./ver-factura.component.scss']
})
export class VerFacturaComponent implements OnInit { 
  

  constructor(private ActivatedRoute: ActivatedRoute, private pedido: PedidoService,private spinner: NgxSpinnerService, private cliente:ClienteService,private router: Router,private log: LogService, private jwtm: TokenmanagerService) { }

  id = this.ActivatedRoute.snapshot.paramMap.get('id');
  idCliente = '';
  idFactura = '';
  correo = '';
  contraseña ='';
  state = '';
  email = this.jwtm.getEmail();
  fechaPedido = '';

  public facturaForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    id: new FormControl('',Validators.required),
    correo: new FormControl('', Validators.compose([Validators.required,Validators.email])),
    telefono: new FormControl('',Validators.compose([Validators.required,Validators.minLength(7),Validators.maxLength(10)])),
    id_producto: new FormControl('',Validators.required),
    comentarios: new FormControl('',Validators.required),
    direccion: new FormControl('',Validators.required),
    valor: new FormControl('',Validators.required),
    fecha: new FormControl('',Validators.required),
    estado: new FormControl('',Validators.required)
  })

  ngOnInit(): void {
    this.spinner.show();
    this.onGetInfo();
  }


  onGetInfo(){
    this.pedido.get(this.id).subscribe({
      next: value => {
        var data = value['data']
        this.idCliente = data['id_cliente'];
        this.idFactura = data['id'];
        this.fechaPedido = data['fecha'];
        this.facturaForm.patchValue({
          comentarios: data['comentarios'],
          estado: data['estado'],
          fecha: data['fecha'],
          id_producto: data['id_producto'],
          valor:data['valor']
        });
        this.cliente.get(this.idCliente).subscribe({
          next: value => {
            var data = value['data']['laboratorio'] ||  value['data'];
            this.facturaForm.patchValue({
              id: data['cedula'] || data['nit'],
              correo: data['correo'],
              direccion: data['direccion'],
              nombre: data['nombre'],
              telefono:data['telefono']
        });
          },
          error: err =>{
            Swal.fire({
              title: 'error al cargar información del usuario',
              icon: 'error',
              position: 'top-right',
              timer: 2000
            })
          }
        })
        this.spinner.hide();
      },
      error: err => {
        Swal.fire({
          title: 'error al cargar información',
          icon: 'error',
          position: 'top-right',
          timer: 2000
        }),
        this.spinner.hide();
      }
    })
  }

  selectChangeHandler (event: any) {
    this.state = event.target.value;
  }

  showAlert(){
    Swal.fire({
      icon: 'warning',
      text: '¿Estas seguro que deseas eliminar el pedido permanentemente?',
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

  update(form){
    delete form['nombre'];
    delete form['id'];
    delete form['correo'];
    delete form['telefono'];
    delete form['id_producto'];
    delete form['comentarios'];
    delete form['direccion'];
    delete form['valor'];
    delete form['fecha'];

    this.pedido.patch(form,this.idFactura).subscribe({
      next: value => {
        Swal.fire({
          title: 'Estado cambiado exitosamente',
          icon: 'success',
          position: 'top-right',
          timer: 2000
        })
        this.log.createLog('Actualizacion estado de pedido: ' + this.email).subscribe({
          next: value =>{}
        })
      },
      error:err=>{
        Swal.fire({
          title: 'error al cambiar el estado',
          icon: 'error',
          position: 'top-right',
          timer: 2000
        })
      }
    })
  }

  deletePedido(){
    const today = new Date();
    const pedidoFecha = new Date(this.fechaPedido);

    const diferencia = today.getTime() - pedidoFecha.getTime();
    const horas = diferencia / (1000 * 3600 * 24) * 24;

    if(horas <= 8 && horas>= 0){
      this.pedido.delete(this.idFactura).subscribe({
        next: value =>{
          console.log(value);
          Swal.fire({
            position: 'top-right',
            icon: 'success',
            title: 'Eliminado satisfactoriamente',
            timer: 2000
          })
          this.log.createLog('Eliminar pedido: ' + this.id).subscribe({
            next: value =>{}
          })
          this.router.navigate(['sesion/navegar/verpedidos']);
        },
        error: err =>{
          Swal.fire({
            position: 'top-right',
            icon: 'error',
            title: 'No se puede eliminar el pedido',
            timer: 2000
          })
        }
      })
    }else{
      Swal.fire({
        position: 'top-right',
        icon: 'error',
        title: 'No se puede eliminar',
        text: 'Ya han pasado 8 horas desde la creación del pedido',
        timer: 2000
      })
    }
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
          this.deletePedido();
        }
      }
    }
  }
}
