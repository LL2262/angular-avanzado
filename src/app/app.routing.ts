import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './componentes/home/home.component';
import { CuidadoresComponent } from './componentes/cuidadores/cuidadores.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { AnimalesComponent } from './componentes/animales/animales.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'animales', component: AnimalesComponent},
    {path: 'cuidadores', component: CuidadoresComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: HomeComponent}
    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);