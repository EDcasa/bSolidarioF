import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StepModel } from 'src/app/interfaces/step.model';
import { StepsService } from 'src/app/shared/service/steps.service';

@Component({
  selector: 'app-steps',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  steps?: Observable<StepModel[]>;
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
