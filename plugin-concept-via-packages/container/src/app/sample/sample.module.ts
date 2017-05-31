import { ModuleWithProviders, NgModule } from '@angular/core';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { SampleService } from './sample.service';
import { CommonModule } from '@angular/common';
import { SampleRoutes } from './sample.routes';
import { SampleAComponent, SampleAModule } from 'sampleA';
import { SampleBComponent, SampleBModule } from 'sampleB';
/**
 * Created by pawel.laprus on 2017-05-23.
 */


@NgModule({
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SampleRoutes,
    SampleAModule,
    SampleBModule
  ],
  providers: [],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ],
  bootstrap: [SampleComponent]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}
