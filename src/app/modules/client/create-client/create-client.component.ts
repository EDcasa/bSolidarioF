import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StepModel } from 'src/app/interfaces/step.model';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  @Input() step: StepModel = {} as StepModel;
  formClient: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    this.formClient = new FormGroup({
      documentNumber: new FormControl(null, [Validators.required,]),
      firstName: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      lastName: new FormControl(null, [Validators.required, Validators.maxLength(100)])
    })
  }
  
  registerCLient(){
    this.step.isComplete = true;
  }

}
