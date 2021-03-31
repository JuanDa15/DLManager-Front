import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedidosv',
  templateUrl: './pedidosv.component.html',
  styleUrls: ['./pedidosv.component.scss']
})
export class PedidosvComponent implements OnInit {

  constructor(private pedidos: PedidosService, private router:Router,private spinner: NgxSpinnerService) { }

  pedidosList = [];
  pedidosFiltrados = [];

  ngOnInit(): void {
    this.spinner.show()
    this.getPedidos()
  }

  getPedidos(){
    this.pedidos.get().subscribe({
      next: value =>{
        let pedidos_list = value['data'];

        for (var i in pedidos_list) {
          pedidos_list[i]['fields']['pk'] = pedidos_list[i]['pk']; 
          this.pedidosList.push(pedidos_list[i]['fields']);
        }
        this.pedidosFiltrados = this.pedidosList;
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

  updateFilter(filtro){
    this.pedidosFiltrados = this.pedidosList.filter(obj => { if(obj.id_cliente != undefined) { return obj.id_cliente.includes(filtro) }});
  }

  onSee(id){
    this.router.navigate(['/sesion/verpedido/',{id:id}]);
  }
}
