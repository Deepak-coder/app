import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import {getAuth,provideAuth} from '@angular/fire/auth';
import { provideFirebaseApp,initializeApp} from '@angular/fire/app';
import { HomepageComponent } from './homepage/homepage.component';
import { PluckComponent } from './pluck/pluck.component';
import { NestingReactiveFormsComponent } from './nesting-reactive-forms/nesting-reactive-forms.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    HomepageComponent,
    PluckComponent,
    NestingReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideAuth(()=> getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
