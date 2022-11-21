import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StepModel } from 'src/app/interfaces/step.model';
import { StepsService } from '../../service/steps.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  steps: Observable<StepModel[]> = new Observable();
  currentStep?: Observable<StepModel>;

  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
    this.currentStep = this.stepsService.getCurrentStep();
  }

  onStepClick(step: StepModel) {
    this.stepsService.setCurrentStep(step);
  }

}
