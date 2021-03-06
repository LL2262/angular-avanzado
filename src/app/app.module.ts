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
import { UsuarioEditComponent } from './componentes/usuario/usuario-edit.component';
import { AnimalDetalleComponent } from './componentes/animales/animal-detalle.component';

//Guards
import { authGuard } from './servicios/auth.guard';

//Servicios
import { UsuarioService } from './servicios/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CuidadoresComponent,
    ContactoComponent,
    AnimalesComponent,
    RegistroComponent,
    LoginComponent,
    UsuarioEditComponent,
    AnimalDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [appRoutingProviders, authGuard, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
