import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full'
    },
    { 
        path: 'domains', 
        loadChildren: () => import('./domains/domains.module')
            .then(m => m.DomainsModule)
    }
];
