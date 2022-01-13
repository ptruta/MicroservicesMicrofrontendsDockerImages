import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { BookingsModule } from './bookings/bookings.module';
import { APP_ROUTES } from './app.routes';
import { DomainsSearchComponent } from 'projects/mfe1/src/app/domains/domains-search/domains-search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule
  ],
  declarations: [
    HomeComponent,
    AppComponent,
  ],
  providers: [DomainsSearchComponent],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
