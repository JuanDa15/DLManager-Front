import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-v',
  templateUrl: './clients-v.component.html',
  styleUrls: ['./clients-v.component.scss']
})
export class ClientsVComponent implements OnInit {

  constructor(private clientes: ClientesService, private spinner: NgxSpinnerService, private router: Router) { }

  usuarios = [];

  ngOnInit(): void {
    this.spinner.show();
    this.getClientes();
  }

  getType(pk){
    if(Object.keys(pk).find(o => o == 'cedula') != null){
      return 'Odontologo';
    }else{
      return 'Laboratorio';
    }
  }

  onEdit(id, pk){
    if(Object.keys(pk).find(o => o == 'cedula') != null){
      this.router.navigate(['/sesion/editarclienteodo/',{id:id}]);
    }else{
      this.router.navigate(['/sesion/editarclientelab/',{id:id}]);
    }
    
  }

  getClientes(){
    this.clientes.get().subscribe({
      next: value =>{
        let laborarios = value['data']['laboratorios'];
        let odontologos = value['data']['odontologos'];

        for (var i in laborarios) {
          this.usuarios.push(laborarios[i]['fields']);
        }
        for (var i in odontologos) {
          this.usuarios.push(odontologos[i]['fields']);
        }
        this.spinner.hide();
      },
      error: err =>{
        console.log(err.error);
        this.spinner.hide();
      }
    })
  }

}
