import { Routes } from '@angular/router';
import { DomainsSearchComponent } from './domains-search/domains-search.component';

export const DOMAINS_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'domains-search'
    },
    {
      path: 'domains-search',
      component: DomainsSearchComponent
    }
];
