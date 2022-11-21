import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StepModel } from 'src/app/interfaces/step.model';

@Component({
  selector: 'app-create-planing',
  templateUrl: './create-planing.component.html',
  styleUrls: ['./create-planing.component.css']
})
export class CreatePlaningComponent implements OnInit {

  formPlaning: FormGroup = new FormGroup({}); 
  @Input() step: StepModel = {} as StepModel;
  
  amountSaving:number = 100;

  constructor() { }

  ngOnInit(): void {
  }

  registerPlaning(){
    this.step.isComplete = true;
  }

  changeAmount(eve:any){
    console.log(eve.target.value);
    this.amountSaving = eve.target.value;
  }
}
