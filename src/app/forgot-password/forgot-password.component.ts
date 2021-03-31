import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor() {}

  public forgotform = new FormGroup({
    correo: new FormControl('',Validators.compose([Validators.required, Validators.email])
    ),
  });

  ngOnInit() {}

  sendPass(form) {
    Swal.fire({
      title: 'Correo Enviado',
      icon: 'success',
      position: 'top-right',
      timer: 2000,
    });
  }
}
