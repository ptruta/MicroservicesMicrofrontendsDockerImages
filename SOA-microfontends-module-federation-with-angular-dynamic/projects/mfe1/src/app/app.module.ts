import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule} from '@angular/material/list';
import "@angular/compiler";
import { HttpClientModule } from '@angular/common/http';
import { DomainsSearchComponent } from './domains/domains-search/domains-search.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    HttpClientModule
  ],
  declarations: [
    HomeComponent,
    AppComponent
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
