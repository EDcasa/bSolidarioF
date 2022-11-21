import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { StepModel } from 'src/app/interfaces/step.model';
import { StepsService } from 'src/app/shared/service/steps.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormPageComponent implements OnInit {
  currentStep: StepModel ={} as StepModel;
  currentStepSub: Subscription = new Subscription();

  constructor(
    private stepsService: StepsService,
    private router: Router) { }

  ngOnInit(): void {
    this.currentStepSub = this.stepsService.getCurrentStep().subscribe((step: StepModel) => {
      this.currentStep = step;
    });
  }

  onNextStep() {
    if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep();
    } else {
      this.onSubmit();
    }
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Continue' : 'Finish';
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks and unexpected angular errors
    this.currentStepSub.unsubscribe();
  }

  onSubmit(): void {
    this.router.navigate(['/complete']);
  }
}