import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormreactivosComponent } from './components/formreactivos/formreactivos.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormsComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
