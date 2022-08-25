import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { App2Component } from './app2.component';
import { HelloComponent } from './hello.component';


const routes = [
  { path:'' , component : App2Component },
]

@NgModule({
  imports:      [ BrowserModule, FormsModule , RouterModule.forRoot(routes)  ],
  declarations: [ AppComponent, HelloComponent , App2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
