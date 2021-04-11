import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lab-profile-home',
  templateUrl: './lab-profile-home.component.html',
  styleUrls: ['./lab-profile-home.component.scss'],
})
export class LabProfileHomeComponent implements OnInit {
  constructor(private pedidos: PedidosService, private spinner:NgxSpinnerService) {}

  pedidosList = [];
  pedidosFiltrados = [];
  mensaje;

  ngOnInit(): void {
    this.spinner.show();
    this.getPedidos();
  }

  getPedidos(){
    this.pedidos.get().subscribe({
      next:value =>{
        if (value['data'].length == 0){
          this.mensaje = "No tienes compras :(";
        }else{
          let pedidos_list = value['data'];

          for (var i in pedidos_list) {
            pedidos_list[i]['fields']['pk'] = pedidos_list[i]['pk']; 
            this.pedidosList.push(pedidos_list[i]['fields']);
          }
          this.pedidosFiltrados = this.pedidosList;
        }
        this.spinner.hide();
      },
      error: err =>{
        Swal.fire({
          title: 'error al cargar información de compras',
          icon: 'error',
          position: 'top-right',
          timer: 2000
        })
        this.spinner.hide();
      }
    })
  }
}
