import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampleCComponent } from './sample.component';


const sampleCRoutes: Routes = [
  { path: '', component: SampleCComponent }
];



export const sampleCRouting: ModuleWithProviders = RouterModule.forChild(sampleCRoutes);
