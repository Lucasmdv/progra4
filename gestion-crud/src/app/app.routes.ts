import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ListPage } from './pages/list-page/list-page';
import { FormPage } from './pages/form-page/form-page';
import { DetailPage } from './pages/detail-page/detail-page';

export const routes: Routes = [
    {path: "home", component: HomePage},
    {path: "product/list", component: ListPage},
    {path: "product/edit/:id", component: FormPage},
    {path: "product/new", component: FormPage},
    {path: "product/details/:id", component: DetailPage},
    {path: "**", redirectTo: "home"}
];
