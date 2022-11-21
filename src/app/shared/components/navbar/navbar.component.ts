import { Component, Input, OnInit } from '@angular/core';
import { StepModel } from 'src/app/interfaces/step.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() step: StepModel = {} as StepModel;

  
  constructor() { }

  ngOnInit(): void {
  }

  onCompleteStep() {
    this.step.isComplete = true;
  }

}
