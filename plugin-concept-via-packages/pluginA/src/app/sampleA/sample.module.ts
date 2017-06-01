import { ModuleWithProviders, NgModule } from '@angular/core';
import { SampleAComponent } from './sample.component';
import { SampleADirective } from './sample.directive';
import { SampleAPipe } from './sample.pipe';
import { SampleAService } from './sample.service';
import { CommonModule } from '@angular/common';
import { sampleARouting } from './sample.routes';
/**
 * Created by pawel.laprus on 2017-05-23.
 */


@NgModule({
  declarations: [
    SampleAComponent,
    SampleADirective,
    SampleAPipe
  ],
  imports: [
    CommonModule,
    sampleARouting
  ],
  providers: [],
  exports: [
    SampleAComponent,
    SampleADirective,
    SampleAPipe
  ]
})
export class SampleAModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleAModule,
      providers: [SampleAService]
    };
  }
}
