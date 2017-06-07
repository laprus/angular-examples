import { ModuleWithProviders, NgModule } from '@angular/core';
import { SampleBComponent } from './sample.component';
import { SampleBDirective } from './sample.directive';
import { SampleBPipe } from './sample.pipe';
import { SampleBService } from './sample.service';
import { CommonModule } from '@angular/common';
import { sampleBRouting } from './sample.routes';
/**
 * Created by pawel.laprus on 2017-05-23.
 */


@NgModule({
  declarations: [
    SampleBComponent,
    SampleBDirective,
    SampleBPipe
  ],
  imports: [
    CommonModule,
    sampleBRouting
  ],
  providers: [],
  exports: [
    SampleBComponent,
    SampleBDirective,
    SampleBPipe
  ]
})
export class SampleBModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleBModule,
      providers: [SampleBService]
    };
  }
}
