import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampleComponent } from './sample.component';


const routes: Routes = [
  { path: '', component: SampleComponent },
  { path: 'sampleA', loadChildren: '../../../node_modules/sampleA/app/sampleA/sample.module#SampleAModule'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SampleRoutes { }
