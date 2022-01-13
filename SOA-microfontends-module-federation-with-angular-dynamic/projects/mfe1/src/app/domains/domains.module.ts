import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainsSearchComponent } from './domains-search/domains-search.component';
import { RouterModule } from '@angular/router';
import { DOMAINS_ROUTES } from './domains.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DOMAINS_ROUTES)
  ],
  declarations: [
    DomainsSearchComponent
  ]
})
export class DomainsModule { }