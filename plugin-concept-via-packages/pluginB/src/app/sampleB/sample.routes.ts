import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampleBComponent } from './sample.component';


const sampleBRoutes: Routes = [
  { path: '', component: SampleBComponent }
];



export const sampleBRouting: ModuleWithProviders = RouterModule.forChild(sampleBRoutes);
