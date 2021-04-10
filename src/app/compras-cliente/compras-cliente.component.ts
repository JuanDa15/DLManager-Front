import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-compras-cliente',
  templateUrl: './compras-cliente.component.html',
  styleUrls: ['./compras-cliente.component.scss']
})
export class ComprasClienteComponent implements OnInit {

  constructor(private router:Router,private spinner: NgxSpinnerService) { }

  pedidosList = [];
  pedidosFiltrados = [];

  ngOnInit(): void {
  }

  updateFilter(e){

  }

  onSee(id){
  }
}
