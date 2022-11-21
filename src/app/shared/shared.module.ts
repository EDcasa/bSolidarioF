import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { StepComponent } from './components/step/step.component';
import { StepTemplateComponent } from './components/step-template/step-template.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    StepComponent,
    StepTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // NavbarComponent,
    // FooterComponent
  ], 
  exports:[
    FooterComponent,
    NavbarComponent,
    StepComponent,
    StepTemplateComponent
  ]
})
export class SharedModule { }
