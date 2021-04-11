import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { PedidoService } from '../services/pedido.service';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-vercomprac',
  templateUrl: './vercomprac.component.html',
  styleUrls: ['./vercomprac.component.scss']
})
export class VercompracComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private router: Router, private ActivatedRoute: ActivatedRoute,private pedido: PedidoService, private cliente: ClienteService) { }

  
  id = this.ActivatedRoute.snapshot.paramMap.get('id');
  idCliente = '';
  idFactura = '';

  public facturaForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    id: new FormControl('',Validators.required),
    correo: new FormControl('', Validators.compose([Validators.required,Validators.email])),
    telefono: new FormControl('',Validators.required),
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
      next: value =>{
        var data = value['data'];
        this.idCliente = value['data']['id_cliente'];
        this.idFactura = value['data']['id'];
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
      error: err =>{
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
}
