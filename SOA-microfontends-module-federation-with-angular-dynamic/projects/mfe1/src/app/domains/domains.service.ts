import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DomainsService {

  constructor(private httpClient: HttpClient) { }

  // getDomainsForName(domains, newDomain, resultFinal) {
  //   this.httpClient.get(`http://localhost:8080/domain/lookup/${newDomain}`).subscribe(
  //     (result: string[]) => {
  //       console.log(result);
  //       result.forEach(element => {
  //           domains.push(element);
  //       });
  //       resultFinal = this.addDomainToBackEnd(domains,resultFinal);
  //       console.log(resultFinal);
  //       // this.dataEvent.emit(resultFinal);
  //     }
  //   );
  //   return resultFinal;
  // }

  getStatusForDomainName(domains, status, newDomain) {
    this.httpClient.get(`http://localhost:8080/domain/lookup/${newDomain}`).subscribe(
      (result: string[]) => {
        console.log(result);
        result.forEach(element => {
              domains.push(element);
        });
      }
    );
    this.httpClient.get(`http://localhost:8080/domain/status/${newDomain}`).subscribe(
      (result: string[]) => {
        console.log(result);
        result.forEach(element => {
            if (element === "False")
              status.push("ACTIVE");
            else {
              status.push("INACTIVE")
            }
        });
      }
    );
  }

//  addDomainToBackEnd(domains,resultFinal) {
//   this.httpClient.post(`http://localhost:8080/domain/save/`,domains).subscribe(
//     (data: JSON) => {
//       resultFinal = JSON.stringify(data);
//       console.log(resultFinal);
//       // this.dataEvent.emit(resultFinal);
//     },
//     );
//     return resultFinal;
//   }

}
