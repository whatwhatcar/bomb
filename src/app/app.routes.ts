import { Routes } from '@angular/router';

import { Root } from './pages/root/root';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Hire } from './pages/hire/hire';
import { PageNotFound } from './pages/page-not-found/page-not-found';

import { Page1 } from './pages/hire/form/page1/page1';
import { Page2 } from './pages/hire/form/page2/page2';

export const routes: Routes = [
  { path: '', component: Root },

  { path: 'home', component: Home },
  { path: 'about', component: About },
  {
    path: 'hire',
    component: Hire,
    children: [
      { path: 'page1', component: Page1 },
      { path: 'page2', component: Page2 },
      //{ path: '', redirectTo: 'page1', pathMatch: 'full' }, // Default child
    ],
  },
  { path: '**', component: PageNotFound },
];
