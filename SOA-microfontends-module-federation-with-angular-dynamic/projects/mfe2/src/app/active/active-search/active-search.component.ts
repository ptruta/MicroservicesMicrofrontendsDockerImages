import { HttpClient } from '@angular/common/http';
import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
import { DomainsSearchComponent } from 'projects/mfe1/src/app/domains/domains-search/domains-search.component';
import { DomainsService } from 'projects/mfe1/src/app/domains/domains.service';
import { element } from 'protractor';

@Component({
  selector: 'app-active-search',
  templateUrl: './active-search.component.html'
})
export class ActiveSearchComponent {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr,
    private domainsSearchComponent:DomainsSearchComponent
    // private httpClient:HttpClient
    ) { }

  search() {
    alert('Not implemented for this demo!');
  }

  async terms() {
    const comp = await import('../lazy/lazy.component').then(m => m.LazyComponent);

    const factory = this.cfr.resolveComponentFactory(comp);
    this.viewContainer.createComponent(factory, null, this.injector);
  }

  statuses = [];
  domains = [];
  statusAndDomains = [];

  seeActiveDomains(newDomain: string) {
    if (newDomain) {
      this.statuses = [];
      this.domains = [];
      this.statusAndDomains = [];
      this.domainsSearchComponent.activeStatus(this.domains,this.statuses, newDomain);
      // this.statusAndDomains.push(this.statuses.concat(this.domains));
      // // this.statusAndDomains = [...this.statuses, ...this.domains];
      // console.log(this.statusAndDomains);
    }
  }

}
