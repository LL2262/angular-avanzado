import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { AdminComponent } from './componentes/admin/admin.component';
import { AdminAgregarComponent } from './componentes/agregar/agregar.component';
import { AdminEditarComponent } from './componentes/editar/editar.component';
import { AdminListadoComponent } from './componentes/listado/listado.component';

const adminRoutes: Routes = [
    {
        path: 'admin-panel', 
        component: AdminComponent,
        children: [
            {path: '', redirectTo: 'listado', pathMatch: 'full'},
            {path: 'listado', component: AdminListadoComponent},
            {path: 'añadir', component: AdminAgregarComponent},
            {path: 'editar', component: AdminEditarComponent}
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