import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { ConfigComponent } from './config/config.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { ActiveSearchComponent } from 'projects/mfe2/src/app/active/active-search/active-search.component';
import { DomainsSearchComponent } from 'projects/mfe1/src/app/domains/domains-search/domains-search.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigComponent
  ],
  providers: [ActiveSearchComponent, DomainsSearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
