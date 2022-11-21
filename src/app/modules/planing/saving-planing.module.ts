import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePlaningComponent } from './create-planing/create-planing.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreatePlaningComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    CreatePlaningComponent
  ]
})
export class SavingPlaningModule { }
