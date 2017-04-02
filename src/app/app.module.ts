import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { Custom1Component } from './custom1/custom1.component';
import { Custom2Component } from './custom2/custom2.component';

@NgModule({
  declarations: [ AppComponent, Custom1Component, Custom2Component ],
  imports: [ BrowserModule, FormsModule, HttpModule, routes ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
