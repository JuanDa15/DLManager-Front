import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OperatorCredentialsComponent } from './operator-credentials/operator-credentials.component';
import { FormOperatorComponent } from './form-operator/form-operator.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { MainPanelOpeComponent } from './main-panel-ope/main-panel-ope.component';
import { ClientsVComponent } from './clients-v/clients-v.component';
import { PedidosvComponent } from './pedidosv/pedidosv.component';
import { RegistroActividadesComponent } from './registro-actividades/registro-actividades.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { OperatorEditProComponent } from './operator-edit-pro/operator-edit-pro.component';
import { OpetorChangePassComponent } from './opetor-change-pass/opetor-change-pass.component';
import { OperatoreditclientsComponent } from './operatoreditclients/operatoreditclients.component';
import { OperatoreditLabsComponent } from './operatoredit-labs/operatoredit-labs.component';
import { VerFacturaComponent } from './ver-factura/ver-factura.component';
import { LabProfileHomeComponent } from './lab-profile-home/lab-profile-home.component';
import { AsideClientsComponent } from './aside-clients/aside-clients.component';
import { DenProfileHomeComponent } from './den-profile-home/den-profile-home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    OperatorCredentialsComponent,
    FormOperatorComponent,
    RegisterComponent,
    NavbarComponent,
    AsideComponent,
    MainPanelOpeComponent,
    ClientsVComponent,
    PedidosvComponent,
    RegistroActividadesComponent,
    AyudaComponent,
    OperatorEditProComponent,
    OpetorChangePassComponent,
    OperatoreditclientsComponent,
    OperatoreditLabsComponent,
    VerFacturaComponent,
    LabProfileHomeComponent,
    AsideClientsComponent,
    DenProfileHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
