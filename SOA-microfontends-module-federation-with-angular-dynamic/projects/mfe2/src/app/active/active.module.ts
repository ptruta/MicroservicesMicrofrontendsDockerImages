import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveSearchComponent } from './active-search/active-search.component';
import { RouterModule } from '@angular/router';
import { DOMAINS_ROUTES } from './active.routes';
import { MatCardModule } from '@angular/material/card';
import { DomainsSearchComponent } from 'projects/mfe1/src/app/domains/domains-search/domains-search.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DOMAINS_ROUTES),
    MatCardModule
  ],
  providers:[DomainsSearchComponent],
  declarations: [
    ActiveSearchComponent
  ]
})
export class ActiveModule { }
