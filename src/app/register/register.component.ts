import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { environment } from '../../environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss','./registerTablet.component.scss','./registerPhone.component.scss'],
  
})

export class RegisterComponent implements OnInit{

  constructor(private signupservice: SignupService, private router:Router){}

  selectedClient:string = '';

  public odontologoForm = new FormGroup({
    cedula : new FormControl('',Validators.compose([Validators.minLength(8),Validators.required])),
    nombre: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(30)])),
    telefono: new FormControl('',Validators.required),
    direccion: new FormControl('',Validators.required),
    correo : new FormControl('',Validators.compose([Validators.required, Validators.email])),
    contraseña: new FormControl('',Validators.required),
    contraseña2: new FormControl('',Validators.required)
  });

  public laboratorioForm = new FormGroup({
    nombre_p: new FormControl('', Validators.required),
    telefono_p: new FormControl('', Validators.compose([Validators.required,Validators.minLength(7),Validators.maxLength(10)])),
    correo_p: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    cedula_p: new FormControl('', Validators.required),
    nit: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(11)])),
    nombre_l: new FormControl('',Validators.required),
    telefono_l: new FormControl('',Validators.compose([Validators.required,Validators.minLength(7),Validators.maxLength(10)])),
    direccion_l: new FormControl('',Validators.required),
    correo_l: new FormControl('', Validators.compose([Validators.required,Validators.email])),
    contraseña: new FormControl('',Validators.required),
    contraseña2: new FormControl('', Validators.required)
  });

  ngOnInit(): void {}

  plgfunction():any{
    if(this.selectedClient == 'Odontologo'){
      return '2';
    }else if(this.selectedClient == 'Laboratorio'){
      return '1';
    }
  }
  selectChangeHandler (event: any) {
    this.selectedClient = event.target.value;
  }

  dentist(){
    let answer: boolean;
    if(this.selectedClient == 'Odontologo'){
      answer = true;
    }else{
      answer = false;
    }
    return answer;
  }
    Laboratory(){
      let answer: boolean;
      if(this.selectedClient == 'Laboratorio'){
        answer = true;
      }else{
        answer = false;
      }
      return answer;
  }

  onSignUp(form){
    delete form['contraseña2'];
    form['plg'] = this.plgfunction();
    if(this.plgfunction() == 2){
      form['key'] = environment.ODT_KEY;
    }else{
      form['key'] = environment.LAB_KEY;
    }

    this.signupservice.post(form).subscribe({
      next: value => {
        Swal.fire({
          title: 'Usuario Creado exitosamente',
          icon: 'success',
          position: 'top-right' 
        })
        this.router.navigate(['']);
      },
      error: err => {
        Swal.fire({
          title: err.error.detail,
          icon: 'error',
          position: 'top-right'
        })
        form.reset();
      }
    })
  }
}
