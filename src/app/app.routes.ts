import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: async () => {
      return import('./home/home').then((module) => module.Home);
    },
  },
  {
    path: 'todos',
    loadComponent: async () => {
      return import('./todos/todos').then((module) => module.Todos);
    },
  },
];
