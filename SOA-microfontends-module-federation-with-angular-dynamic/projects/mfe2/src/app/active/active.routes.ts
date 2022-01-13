import { Routes } from '@angular/router';
import { ActiveSearchComponent } from './active-search/active-search.component';

export const DOMAINS_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'active-search'
    },
    {
      path: 'active-search',
      component: ActiveSearchComponent
    }
];
