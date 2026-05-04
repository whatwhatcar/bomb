import { Routes } from '@angular/router';
import { Page1 } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';
import { Page3 } from './pages/page3/page3';

export const ApplicationRoutes: Routes = [
  { path: '', redirectTo: '1', pathMatch: 'full' },
  { path: '1', component: Page1 },
  { path: '2', component: Page2 },
  { path: '3', component: Page3 },
];
