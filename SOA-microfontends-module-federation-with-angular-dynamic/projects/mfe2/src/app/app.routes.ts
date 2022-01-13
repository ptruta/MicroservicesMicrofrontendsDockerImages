import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full'
    },
    { 
        path: 'active', 
        loadChildren: () => import('./active/active.module')
            .then(m => m.ActiveModule)
    }
];
