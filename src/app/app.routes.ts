import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { Mecanografia } from './mecanografia/mecanografia.component';

export const routes: Routes = 
[
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },

    {
        path: 'inicio',
        component: Home,
        title: 'Inicio - Mecanografía'
    },

    {
        path: 'mecanografia',
        component: Mecanografia,
        title: 'Mecanografía - Mecanografía'
    }
];
