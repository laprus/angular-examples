import { ModuleWithProviders, NgModule } from '@angular/core';
import { SampleBComponent } from './sample.component';
import { SampleBDirective } from './sample.directive';
import { SampleBPipe } from './sample.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { SampleBService } from './sample.service';
import { CommonModule } from '@angular/common';
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
    BrowserModule,
    CommonModule
  ],
  providers: [],
  exports: [
    SampleBComponent,
    SampleBDirective,
    SampleBPipe
  ],
  bootstrap: [SampleBComponent]
})
export class SampleBModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleBModule,
      providers: [SampleBService]
    };
  }
}
