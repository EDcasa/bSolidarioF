import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { CompletePageComponent } from './pages/complete-page/complete-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    CompletePageComponent,
    FormPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
