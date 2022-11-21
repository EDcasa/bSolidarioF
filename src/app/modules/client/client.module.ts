import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClientComponent } from './create-client/create-client.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateClientComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    CreateClientComponent
  ]
})
export class ClientModule { }
