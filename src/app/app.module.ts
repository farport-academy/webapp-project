import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { API_URL } from './config/tokens';

import localeIt from '@angular/common/locales/it';
registerLocaleData(localeIt);

// import localeEs from '@angular/common/locales/es'
// registerLocaleData(localeEs)
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterOutlet, 
    SharedModule, 
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    PagesModule
  ],
  providers: [
    {
      provide: API_URL,
      useValue: 'https://dummyjson.com'
    },
    {
      provide: LOCALE_ID,
      useValue: 'it-IT'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
