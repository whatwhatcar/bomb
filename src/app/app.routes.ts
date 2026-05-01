import { Routes } from '@angular/router';

import { Root } from './pages/root/root';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Hire } from './pages/hire/hire';
import { PageNotFound } from './pages/page-not-found/page-not-found';

import { Application } from './pages/application/application';
import { ApplicationRoutes } from './pages/application/application.routes';

export const routes: Routes = [
  { path: '', component: Root },

  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'hire', component: Hire },
  {
    path: 'hire/application',
    component: Application,
    children: ApplicationRoutes,
  },

  { path: '**', component: PageNotFound },
];
