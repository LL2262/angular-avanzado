import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CuidadoresComponent,
    ContactoComponent,
    AnimalesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AdminModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
