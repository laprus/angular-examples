import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { SampleService } from './sample.service';
import { CommonModule } from '@angular/common';
import { SampleRoutes } from './sample.routes';
import { SampleBComponent, SampleBModule } from 'sampleB';
import { PluginManagerModule } from 'plugin-manager';
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
    PluginManagerModule,
    SampleBModule,
  ],
  providers: [],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ],
  bootstrap: [SampleComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [
    SampleBComponent
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}
