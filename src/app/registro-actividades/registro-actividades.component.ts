import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-registro-actividades',
  templateUrl: './registro-actividades.component.html',
  styleUrls: ['./registro-actividades.component.scss']
})
export class RegistroActividadesComponent implements OnInit {

  constructor(private log:LogService) { }

  logList = [];
  logListFiltrada = [];

  ngOnInit(): void {
    this.getLog();
  }

  updateFilter(filtro){
    this.logListFiltrada = this.logList.filter(obj => obj.id_cliente.includes(filtro) );
  }

  getLog(){
    this.log.get().subscribe({
      next: value =>{
        let logs = value['data'];
        for (var i in logs) {
          logs[i]['fields']['pk'] = logs[i]['pk'];
          this.logList.push(logs[i]['fields'])
        }
        this.logListFiltrada = this.logList;
      },
      error: err =>{
        Swal.fire({
          title: 'Error al obtener historial de registros',
          icon:'error',
          position:'top-right',
          timer: 2000
        })
      }
    })
  }
}
