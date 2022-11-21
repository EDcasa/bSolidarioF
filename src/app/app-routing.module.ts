import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletePageComponent } from './modules/home/pages/complete-page/complete-page.component';
import { FormPageComponent } from './modules/home/pages/form-page/form-page.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';


const routes: Routes = [
  {
    path: 'form',
    component: FormPageComponent
  },
  {
    path: 'complete',
    component: CompletePageComponent
  },
  {
    path: '',
    redirectTo: '/form',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
