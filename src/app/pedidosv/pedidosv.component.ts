import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-pedidosv',
  templateUrl: './pedidosv.component.html',
  styleUrls: ['./pedidosv.component.scss']
})
export class PedidosvComponent implements OnInit {

  constructor(private pedidos: PedidosService) { }

  ngOnInit(): void {
  }

  // getClientes(){
  //   this.pedidos.get().subscribe({
  //     next: value =>{
  //       console.log(value);
        // let laborarios = value['data']['laboratorios'];
        // let odontologos = value['data']['odontologos'];

        // for (var i in laborarios) {
        //   this.usuarios.push(laborarios[i]['fields']);
        // }
        // for (var i in odontologos) {
        //   this.usuarios.push(odontologos[i]['fields']);
        // }
        // this.spinner.hide();
    //   },
    //   error: err =>{
    //     console.log(err.error);
    //     // this.spinner.hide();
    //   }
    // })
  // }
}
