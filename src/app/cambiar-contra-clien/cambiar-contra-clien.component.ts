import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambiar-contra-clien',
  templateUrl: './cambiar-contra-clien.component.html',
  styleUrls: ['./cambiar-contra-clien.component.scss']
})
export class CambiarContraClienComponent implements OnInit {

  constructor(private router: Router) { }

  public cambiarpassForm = new FormGroup({
    contraseña: new FormControl('',Validators.required),
    contraseña_n: new FormControl('',Validators.required),
    contraseña_n2: new FormControl('',Validators.required)
  })

  
  ngOnInit(): void {
  }
  
  onChangePass(form){
  }
}
