import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cursos } from './pages/cursos/cursos';
import { Agregar } from './pages/agregar/agregar';

export const routes: Routes = [
    {path: "", component:Home},
    {path: "cursos", component:Cursos},
    {path: "agregar", component:Agregar},
    { path: "**", redirectTo: "" } // Ruta de error 404
];
