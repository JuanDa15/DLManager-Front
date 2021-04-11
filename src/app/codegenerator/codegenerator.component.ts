import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CodegService } from '../services/codeg.service';

@Component({
  selector: 'app-codegenerator',
  templateUrl: './codegenerator.component.html',
  styleUrls: ['./codegenerator.component.scss']
})
export class CodegeneratorComponent implements OnInit {

  constructor(private code:CodegService) { }

  Codigo = 0;

  public codeForm = new FormGroup({
    code: new FormControl('',Validators.compose([Validators.required,Validators.max(100),Validators.min(1)]))
  });

  ngOnInit(): void {
  }

  CodeGenerator(form){
    this.code.post(form).subscribe({
      next: value =>{
        this.Codigo = value['data']['codigo'];
      },
      error: err =>{
        Swal.fire({
          title: 'error al generar codigo',
          icon: 'error',
          position: 'top-right',
          timer: 2000
        })
      }
    })
  }
}
