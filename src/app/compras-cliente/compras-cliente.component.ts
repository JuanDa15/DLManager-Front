import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-compras-cliente',
  templateUrl: './compras-cliente.component.html',
  styleUrls: ['./compras-cliente.component.scss']
})
export class ComprasClienteComponent implements OnInit {

  constructor(private router:Router,private spinner: NgxSpinnerService,private pedidos: PedidosService) { }

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

  updateFilter(filtro){
    this.pedidosFiltrados = this.pedidosList.filter(obj => { if(obj.id_cliente != undefined) { return obj.id_cliente.includes(filtro) }});
  }

  onSee(id){
    this.router.navigate(['/sesionc/compra/',{id:id}]);
  }
}
