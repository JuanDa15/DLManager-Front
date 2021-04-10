import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile-odont',
  templateUrl: './edit-profile-odont.component.html',
  styleUrls: ['./edit-profile-odont.component.scss']
})
export class EditProfileOdontComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }
  
    public odtForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      cedula: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      direccion_l: new FormControl('', Validators.required)
    })


    onUpdate(form){
      
    }
}
