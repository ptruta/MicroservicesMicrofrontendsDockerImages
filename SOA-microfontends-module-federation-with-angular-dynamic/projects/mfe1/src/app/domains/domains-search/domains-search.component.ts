// import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit, Injectable} from '@angular/core';
import { DomainsService } from '../domains.service';
//import { DomainsService } from '../domains.service';

@Component({
  selector: 'app-domains-search',
  templateUrl: './domains-search.component.html',
})
export class DomainsSearchComponent implements OnInit {

  @ViewChild('vc', { read: ViewContainerRef, static: true } )
  viewContainer: ViewContainerRef;

  domains=[];
  resultFinal:string;

  constructor(
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr,
    private httpClient:HttpClient,
    private domainsService: DomainsService,
    // domains = [],
    // resultFinal = ""
    ) { }

  ngOnInit(): void {
    this.empty()
  }

  async terms() {
    const comp = await import('../lazy/lazy.component').then(m => m.LazyComponent);

    const factory = this.cfr.resolveComponentFactory(comp);
    this.viewContainer.createComponent(factory, null, this.injector);
  }

  empty() {
    //empty your array
    this.domains.length = 0;
    this.domains = [];
    this.resultFinal = '';
    
  }

  addDomain(newDomain: string) {
    if (newDomain) {
      this.empty();
      // this.resultFinal = this.domainsService.getDomainsForName(this.domains,newDomain, this.resultFinal);
      this.httpClient.get(`http://localhost:8080/domain/lookup/${newDomain}`).subscribe(
      (result: string[]) => {
        console.log(result);
        result.forEach(element => {
            this.domains.push(element);
        });
        this.httpClient.post(`http://localhost:8080/domain/save/`,this.domains).subscribe(
          (data: JSON) => {
            this.resultFinal = JSON.stringify(data["response"]);
            this.resultFinal = this.resultFinal.split('"').join('');
            console.log(this.resultFinal);
          },
          );
      }
    );
    // window.alert(this.resultFinal);

    }
  }

  activeStatus(domains:string[],statuses: string[], newDomain:string) {
    if (newDomain) {
      this.domainsService.getStatusForDomainName(domains,statuses,newDomain);
    }
  }


}
