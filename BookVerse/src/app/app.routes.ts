import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { BookList } from './pages/book-list/book-list';
import { BookForm } from './pages/book-form/book-form';
import { BookDetails } from './pages/book-details/book-details';

export const routes: Routes = [
    { path: "home", component: Home },
    { path: "book/list", component: BookList},
    { path: "book/new", component: BookForm},
    { path: "book/edit/:id", component: BookForm},
    { path: "book/show/:id", component: BookDetails},
    { path: "**", redirectTo: "home"}
];
