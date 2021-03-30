import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPanelOpeComponent } from './main-panel-ope/main-panel-ope.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { SessionGuard } from './guards/session.guard';
import { ClientsVComponent } from './clients-v/clients-v.component';
import { PedidosvComponent } from './pedidosv/pedidosv.component';
import { RegistroActividadesComponent } from './registro-actividades/registro-actividades.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { OperatoreditclientsComponent } from './operatoreditclients/operatoreditclients.component';
import { OperatoreditLabsComponent } from './operatoredit-labs/operatoredit-labs.component';
import { VerFacturaComponent } from './ver-factura/ver-factura.component';
import { OperatorCredentialsComponent } from './operator-credentials/operator-credentials.component';
import { FormOperatorComponent } from './form-operator/form-operator.component';
import { OperatorEditProComponent } from './operator-edit-pro/operator-edit-pro.component';
import { AsideClientsComponent } from './aside-clients/aside-clients.component';
import { DenProfileHomeComponent } from './den-profile-home/den-profile-home.component';
import { LabProfileHomeComponent } from './lab-profile-home/lab-profile-home.component';
import { OdontologoGuard } from './guards/odontologo.guard';
import { LaboratorioGuard } from './guards/laboratorio.guard';
import { NavbarClientsComponent } from './navbar-clients/navbar-clients.component';
import { OperadorGuard } from './guards/operador.guard';
import { OpetorChangePassComponent } from './opetor-change-pass/opetor-change-pass.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: RegisterComponent},
  { path: 'forgotpassword', component: ForgotPasswordComponent},
  { path: 'sesion', component: NavbarComponent, canActivate: [SessionGuard,OperadorGuard] ,children:[
      {path: 'navegar', component: AsideComponent, children:[
          {path: 'paneloperador', component: MainPanelOpeComponent},
          {path: 'verclientes', component: ClientsVComponent},
          {path: 'verpedidos', component: PedidosvComponent},
          {path: 'log' , component: RegistroActividadesComponent},
          {path: 'ayuda', component: AyudaComponent}
        ]
      },
      {path: 'editarclienteodo', component: OperatoreditclientsComponent},
      {path: 'editarclientelab', component: OperatoreditLabsComponent},
      {path: 'verpedido', component: VerFacturaComponent},
      {path: 'editarperfil', component: OperatorEditProComponent},
      {path: 'cambiarcontraseña', component: OpetorChangePassComponent}
    ]
  },
  {path: 'registroperador', component: OperatorCredentialsComponent},
  {path: 'operadorform', component: FormOperatorComponent,canActivate:[OperadorGuard]},
  {path: 'sesionc', component: NavbarClientsComponent, canActivate: [SessionGuard], children: [
    {path: 'navegarc', component: AsideClientsComponent,children:[
      {path: 'panelodontologo', component: DenProfileHomeComponent , canActivate:[OdontologoGuard]},
      {path: 'panellaboratorio',component: LabProfileHomeComponent ,canActivate:[LaboratorioGuard]}
    ]}
  ]}
  // { path: '',component: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
