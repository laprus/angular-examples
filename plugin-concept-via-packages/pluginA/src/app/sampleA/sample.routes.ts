import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampleAComponent } from './sample.component';


const sampleARoutes: Routes = [
  { path: '', component: SampleAComponent }
];



export const sampleARouting: ModuleWithProviders = RouterModule.forChild(sampleARoutes);
