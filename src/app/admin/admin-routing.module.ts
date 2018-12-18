import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { AdminComponent } from './componentes/admin/admin.component';
import { AdminAgregarComponent } from './componentes/agregar/agregar.component';
import { AdminEditarComponent } from './componentes/editar/editar.component';
import { AdminListadoComponent } from './componentes/listado/listado.component';

//Guards
import { adminGuard } from '../servicios/admin.guards';

const adminRoutes: Routes = [
    {
        path: 'admin-panel', 
        component: AdminComponent,
        canActivate: [adminGuard],
        children: [
            {path: '', redirectTo: 'listado', pathMatch: 'full'},
            {path: 'listado', component: AdminListadoComponent},
            {path: 'crear', component: AdminAgregarComponent},
            {path: 'editar/:id', component: AdminEditarComponent}
        ]
    },
    {path: 'listado-del-panel', component: AdminListadoComponent}
];

@NgModule({
    imports: [
      RouterModule.forChild(adminRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
 export class AdminRoutingModule {}