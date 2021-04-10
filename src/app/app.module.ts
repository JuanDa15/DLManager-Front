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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarClientsComponent } from './navbar-clients/navbar-clients.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CodegeneratorComponent } from './codegenerator/codegenerator.component';
import { EditProfileOdontComponent } from './edit-profile-odont/edit-profile-odont.component';
import { EditprofilelabComponent } from './editprofilelab/editprofilelab.component';
import { CambiarContraClienComponent } from './cambiar-contra-clien/cambiar-contra-clien.component';
import { EliminarCuentaComponent } from './eliminar-cuenta/eliminar-cuenta.component';
import { ComprasClienteComponent } from './compras-cliente/compras-cliente.component';
import { VercompracComponent } from './vercomprac/vercomprac.component';
import { AyudacComponent } from './ayudac/ayudac.component';
import { ComprarComponent } from './comprar/comprar.component';



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
    DenProfileHomeComponent,
    NavbarClientsComponent,
    CodegeneratorComponent,
    EditProfileOdontComponent,
    EditprofilelabComponent,
    CambiarContraClienComponent,
    EliminarCuentaComponent,
    ComprasClienteComponent,
    VercompracComponent,
    AyudacComponent,
    ComprarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
