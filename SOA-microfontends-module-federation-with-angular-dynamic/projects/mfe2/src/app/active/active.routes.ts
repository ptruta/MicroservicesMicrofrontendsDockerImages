import { Routes } from '@angular/router';
import { DomainsSearchComponent } from 'projects/mfe1/src/app/domains/domains-search/domains-search.component';
import { ActiveSearchComponent } from './active-search/active-search.component';

export const DOMAINS_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'active-search'
    },
    {
      path: 'active-search',
      component: ActiveSearchComponent
    },
    {
      path: 'domain-search',
      component: DomainsSearchComponent
    }
];
