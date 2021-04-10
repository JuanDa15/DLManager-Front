import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-cuenta',
  templateUrl: './eliminar-cuenta.component.html',
  styleUrls: ['./eliminar-cuenta.component.scss']
})
export class EliminarCuentaComponent implements OnInit {

  constructor(private router: Router) { }

  public eliminarcuentaForm = new FormGroup({
    correo: new FormControl('',Validators.required),
    contraseña: new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }
    
  onChangePass(form){
  }
  
}
