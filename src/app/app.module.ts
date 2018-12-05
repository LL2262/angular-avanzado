import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Importar nuevos modulos
import { AdminModule } from './admin/admin.module';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { CuidadoresComponent } from './componentes/cuidadores/cuidadores.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { AnimalesComponent } from './componentes/animales/animales.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CuidadoresComponent,
    ContactoComponent,
    AnimalesComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
