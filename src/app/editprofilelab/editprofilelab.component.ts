import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editprofilelab',
  templateUrl: './editprofilelab.component.html',
  styleUrls: ['./editprofilelab.component.scss']
})
export class EditprofilelabComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  public labForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    cedula: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    nombre_l: new FormControl('', Validators.required),
    nit_l: new FormControl('', Validators.required),
    telefono_l: new FormControl('', Validators.required),
    correo_l: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    direccion_l: new FormControl('', Validators.required)
  })

  onUpdate(form) {
  }

}
