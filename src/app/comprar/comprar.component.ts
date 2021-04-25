import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ClienteService } from '../services/cliente.service';
import { TokenmanagerService } from '../services/tokenmanager.service';
import Swal from 'sweetalert2';
import { ProductosService } from '../services/productos.service';
import { PedidoService } from '../services/pedido.service';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private router: Router, private info:ClienteService, private jwtm:TokenmanagerService, private productos: ProductosService, private pedido:PedidoService, private log:LogService) { }
  
  idCliente = this.jwtm.getID();
  productosList = [];
  idFactura = '';
  correo = this.jwtm.getEmail();
  contraseña ='';
  selectedProduct:string = '';

  public facturaForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    id_cliente: new FormControl('',Validators.required),
    correo: new FormControl('', Validators.compose([Validators.required,Validators.email])),
    telefono: new FormControl('',Validators.required),
    id_producto: new FormControl('',Validators.required),
    comentarios: new FormControl('',Validators.required),
    direccion: new FormControl('',Validators.required),
    valor: new FormControl('',Validators.required),
    fecha: new FormControl('',Validators.required),
    codigo: new FormControl('')
  })

  selectChangeHandler (event: any) {
    this.selectedProduct = this.productosList.find(obj => obj.id_producto == event.target.value);
    this.facturaForm.patchValue({
      valor: this.selectedProduct['valor'],
      id_producto: this.selectedProduct['id_producto']
    });
  }

  ngOnInit(): void {
    this.spinner.show();
    this.getInfo();
    this.getProductos();
  }

  getInfo(){
    var today = new Date();
    var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    this.info.get(this.idCliente).subscribe({
      next:value =>{
        var info_odt = value['data'];
        var info_lab = value['data']['laboratorio'];
        this.facturaForm.patchValue({
          nombre: info_odt['nombre'] || info_lab['nombre'],
          id_cliente: info_odt['cedula'] || info_lab['nit'],
          telefono: info_odt['telefono'] || info_lab['telefono'],
          correo: info_odt['correo'] || info_lab['correo'],
          direccion: info_odt['direccion'] || info_lab['direccion'],
          fecha: date + ' ' + time
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

  getProductos(){
    this.productos.get().subscribe({
      next: value =>{
        let productos_list = value['data'];

        for (var i in productos_list) {
          productos_list[i]['fields']['pk'] = productos_list[i]['pk']; 
          this.productosList.push(productos_list[i]['fields']);
        }
        this.spinner.hide();
      },
      error: err =>{
        Swal.fire({
          title: 'error al cargar información',
          icon: 'error',
          position: 'top-right',
          timer: 2000
        })
        this.spinner.hide();
      }
    })
  }

  Buy(form){
    delete form['nombre'];
    delete form['correo'];
    delete form['telefono'];
    delete form['direccion'];
    this.pedido.post(form).subscribe({
      next: value => {
        this.idFactura = value['data']['id_pedido'];
        Swal.fire({
          title: 'Pedido realizado satisfactoriamente',
          icon: 'success',
          position: 'top-right',
          timer: 2000
        })
        this.log.createLog('Realización Pedido: ' + this.correo).subscribe({
          next: value =>{}
        })
        this.router.navigate(['/sesionc/compra/',{id:this.idFactura}]);
      },
      error: err => {
        Swal.fire({
          title: err.error.detail,
          icon: 'error',
          position: 'top-right',
          timer: 2000
        })
      }
    })
  }
}
