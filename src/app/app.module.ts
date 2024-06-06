import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterOutlet, 
    ComponentsModule, 
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    PagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
