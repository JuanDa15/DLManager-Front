import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-codegenerator',
  templateUrl: './codegenerator.component.html',
  styleUrls: ['./codegenerator.component.scss']
})
export class CodegeneratorComponent implements OnInit {

  constructor() { }

  Codigo = 0;

  public codeForm = new FormGroup({
    Code: new FormControl('',Validators.required)
  });

  ngOnInit(): void {
  }

  CodeGenerator(form){
    this.Codigo = form['Code'];
  }

}
