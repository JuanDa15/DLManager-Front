import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ClientesService } from '../services/clientes.service';
import { PedidosService } from '../services/pedidos.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-main-panel-ope',
  templateUrl: './main-panel-ope.component.html',
  styleUrls: ['./main-panel-ope.component.scss']
})
export class MainPanelOpeComponent implements OnInit {

  constructor(private usuariost: ClientesService, private pedidos: PedidosService, private spinner: NgxSpinnerService) { }

  usuarios = [];
  pedidosList = [];

  ngOnInit() {
    this.spinner.show();
    this.onGetUser();
    this.getPedidos();
  }

  getPedidos(){
    this.pedidos.get().subscribe({
      next: value =>{
        let pedidos_list = value['data']

        for (var i in pedidos_list) {
          this.pedidosList.push(pedidos_list[i]['fields']);
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

  onGetUser(){
    this.usuariost.get().subscribe({
      next: value =>{
        let laboratorios = value['data']['laboratorios'];
        let odontologos = value['data']['odontologos'];
        let visibilidad = value['data']['visibilidad'];

        for (var i in laboratorios){
          if (visibilidad.find((val) => {return val.pk == laboratorios[i]['fields']['correo'];})){
            if (visibilidad.find((val) => {return val.pk == laboratorios[i]['fields']['correo'];})['fields']['visible'] == 1){
              this.usuarios.push(laboratorios[i]['fields']);
            }
          }
        }
        for (var i in odontologos) {
          if (visibilidad.find((val) => {return val.pk == odontologos[i]['fields']['correo'];})){
            if (visibilidad.find((val) => {return val.pk == odontologos[i]['fields']['correo'];})['fields']['visible'] == 1){
              this.usuarios.push(odontologos[i]['fields']);
            }
          }
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
}
