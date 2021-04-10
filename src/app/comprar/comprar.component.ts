import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private router: Router) { }

  ngOnInit(): void {
  }
  
  idCliente = '';
  idFactura = '';
  correo = '';
  contraseña ='';

  public facturaForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    id: new FormControl('',Validators.required),
    correo: new FormControl('', Validators.compose([Validators.required,Validators.email])),
    telefono: new FormControl('',Validators.compose([Validators.required,Validators.minLength(7),Validators.maxLength(10)])),
    id_producto: new FormControl('',Validators.required),
    comentarios: new FormControl('',Validators.required),
    direccion: new FormControl('',Validators.required),
    valor: new FormControl('',Validators.required),
    fecha: new FormControl('',Validators.required),
    codigo: new FormControl('',Validators.required)
  })
  onGetInfo(){
  }
}
