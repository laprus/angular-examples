import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampleComponent } from './sample.component';
import { SampleAComponent } from 'sampleA';
import { SampleBComponent } from 'sampleB';
// import { SampleAComponent } from '../../../../pluginA/src/app/sampleA/sample.component';
// import { SampleBComponent } from '../../../../pluginB/src/app/sampleB/sample.component';

const routes: Routes = [
  { path: '', component: SampleComponent, pathMatch: 'full' },
  { path: 'sampleA', component: SampleAComponent, pathMatch: 'full' },
  { path: 'sampleB', component: SampleBComponent, pathMatch: 'full' },
  // { path: 'sampleA', loadChildren: '../../../node_modules/sampleA/sampleA.es5#SampleAModule'},
  // { path: 'sampleA', loadChildren: '../../../../pluginA/src/app/sampleA/sample.module#SampleAModule'},
  // { path: 'sampleB', loadChildren: '../../../../pluginB/src/app/sampleB/sample.module#SampleBModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SampleRoutes { }
