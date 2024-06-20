import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { API_URL } from './config/tokens';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterOutlet, 
    SharedModule, 
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    
    PagesModule
  ],
  providers: [
    {
      provide: API_URL,
      useValue: environment.apiUrl
    },
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
