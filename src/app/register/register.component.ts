import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  selectedClient:string = '';

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
}
