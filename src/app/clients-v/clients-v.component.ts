import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients-v',
  templateUrl: './clients-v.component.html',
  styleUrls: ['./clients-v.component.scss'],
})
export class ClientsVComponent implements OnInit {
  constructor(
    private clientes: ClientesService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  usuarios = [];

  usuariosFiltrados = [];

  ngOnInit(): void {
    this.spinner.show();
    this.getClientes();
  }

  getType(pk) {
    if (Object.keys(pk).find((o) => o == 'cedula') != null) {
      return 'Odontologo';
    } else {
      return 'Laboratorio';
    }
  }

  onEdit(id, pk) {
    if (Object.keys(pk).find((o) => o == 'cedula') != null) {
      this.router.navigate(['/sesion/editarclienteodo/', { id: id }]);
    } else {
      this.router.navigate(['/sesion/editarclientelab/', { id: id }]);
    }
  }

  updateFilter(filtro) {
    this.usuariosFiltrados = this.usuarios.filter((obj) => {
      if (obj.nit != undefined) {
        return obj.nit.includes(filtro);
      } else {
        return obj.cedula.includes(filtro);
      }
    });
  }

  getClientes() {
    this.clientes.get().subscribe({
      next: (value) => {
        let laboratorios = value['data']['laboratorios'];
        let odontologos = value['data']['odontologos'];
        let visibilidad = value['data']['visibilidad'];

        for (var i in laboratorios) {
          if (
            visibilidad.find((val) => {
              return val.pk == laboratorios[i]['fields']['correo'];
            })
          ) {
            if (
              visibilidad.find((val) => {
                return val.pk == laboratorios[i]['fields']['correo'];
              })['fields']['visible'] == 1
            ) {
              this.usuarios.push(laboratorios[i]['fields']);
            }
          }
        }
        for (var i in odontologos) {
          if (
            visibilidad.find((val) => {
              return val.pk == odontologos[i]['fields']['correo'];
            })
          ) {
            if (
              visibilidad.find((val) => {
                return val.pk == odontologos[i]['fields']['correo'];
              })['fields']['visible'] == 1
            ) {
              this.usuarios.push(odontologos[i]['fields']);
            }
          }
        }
        this.usuariosFiltrados = this.usuarios;
        this.spinner.hide();
      },
      error: (err) => {
        Swal.fire({
          title: 'Error al cargar la información',
          icon: 'error',
          timer: 2000,
          position: 'top-right',
        });
        this.spinner.hide();
      },
    });
  }
}
