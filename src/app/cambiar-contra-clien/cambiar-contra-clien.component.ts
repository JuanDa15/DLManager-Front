import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { TokenmanagerService } from '../services/tokenmanager.service';
import { UpdateopService } from '../services/updateop.service';
import { ClienteService } from '../services/cliente.service';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-cambiar-contra-clien',
  templateUrl: './cambiar-contra-clien.component.html',
  styleUrls: ['./cambiar-contra-clien.component.scss']
})
export class CambiarContraClienComponent implements OnInit {

  constructor(private router: Router,private jwtm:TokenmanagerService, private cliente:ClienteService,private log: LogService) { }

  id = this.jwtm.getID();
  email = this.jwtm.getEmail();

  public cambiarpassForm = new FormGroup({
    contraseña: new FormControl('',Validators.required),
    contraseña_n: new FormControl('',Validators.required),
    contraseña_n2: new FormControl('',Validators.required)
  })

  
  ngOnInit(): void {
  }
  
  onChangePass(form){
    delete form['contraseña_n2'];
    this.cliente.patchPass(form,this.id.toString()).subscribe({
      next: value =>{
        Swal.fire({
          title: 'Contraseña cambiada correctamente',
          icon: 'success',
          position: 'top-right',
          timer: 2000
        })
        this.log.createLog('Cambio de contraseña: ' + this.email.toString()).subscribe({
          next: value =>{}
        })
        this.selectClient();
      },
      error: err => {
        Swal.fire({
          title: 'Error al cambiar su contraseña',
          icon: 'error',
          position: 'top-right',
          timer: 2000
        })
      }
    })
  }

  selectClient(){
    if(this.jwtm.getPermissions()==1){
      this.router.navigate(['sesionc/editarperfillab']);
    }
    if(this.jwtm.getPermissions()==2){
      this.router.navigate(['sesionc/editarperfilodt']);
    }
  }
}
