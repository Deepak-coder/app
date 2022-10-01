import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NestingReactiveFormsComponent } from './nesting-reactive-forms/nesting-reactive-forms.component';
import { PluckComponent } from './pluck/pluck.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

const routes: Routes = [
                        {path:'homepage' , component:HomepageComponent },
                        { path:'template-form' , component:TemplateFormsComponent},
                        { path:'reactive-form', component:ReactiveFormsComponent},
                        {path:'nesting-reactive-form' , component:NestingReactiveFormsComponent},
                        {path:'pluck', component:PluckComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
