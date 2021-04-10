import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vercomprac',
  templateUrl: './vercomprac.component.html',
  styleUrls: ['./vercomprac.component.scss']
})
export class VercompracComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private router: Router,private ActivatedRoute: ActivatedRoute) { }

  
  id = this.ActivatedRoute.snapshot.paramMap.get('id');
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
    estado: new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }

  onGetInfo(){
    
  }
}
