import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { DomainsModule } from 'projects/mfe1/src/app/domains/domains.module';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'config',
      component: ConfigComponent
    },
    { 
      path: 'domains', 
      loadChildren: () => import('projects/mfe1/src/app/domains/domains.module')
          .then(m => m.DomainsModule)
    },
    { 
      path: 'active', 
      loadChildren: () => import('projects/mfe2/src/app/active/active.module')
          .then(m => m.ActiveModule)
    }
  
    // {
    //   path: 'domains',
    //   loadChildren: () => loadRemoteModule({
    //       remoteEntry: 'http://localhost:3000/remoteEntry.js',
    //       remoteName: 'mfe1',
    //       exposedModule: 'Module'
    //     })
    //     .then(m => m.DomainsModule)
    // },
    // {
    //   path: 'active',
    //   loadChildren: () => loadRemoteModule({
    //       remoteEntry: 'http://localhost:3001/remoteEntry.js',
    //       remoteName: 'mfe2',
    //       exposedModule: 'Module'
    //     })
    //     .then(m => m.ActiveModule)
    // },
];
