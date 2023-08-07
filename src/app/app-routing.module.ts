import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './formreac/reactive-forms.component';

const routes: Routes = [
  {path: 'template', component: TemplateFormsComponent},
  {path: 'reactivos', component: ReactiveFormsComponent},
  {path: '**', redirectTo: '/template', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
