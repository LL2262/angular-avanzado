import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { AdminRoutingModule } from './admin-routing.module';

// Componentes
import { AdminComponent } from './componentes/admin/admin.component';
import { AdminAgregarComponent } from './componentes/agregar/agregar.component';
import { AdminEditarComponent } from './componentes/editar/editar.component';
import { AdminListadoComponent } from './componentes/listado/listado.component';

//Guards
import { adminGuard } from '../servicios/admin.guards';

//Servicios
import { UsuarioService } from '../servicios/usuario.service';

@NgModule({
    declarations: [
      AdminComponent,
      AdminAgregarComponent,
      AdminEditarComponent,
      AdminListadoComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      HttpModule,
      AdminRoutingModule
    ],
    providers: [adminGuard, UsuarioService]
  })
  export class AdminModule { }