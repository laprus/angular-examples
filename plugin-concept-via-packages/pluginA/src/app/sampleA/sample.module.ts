import { ModuleWithProviders, NgModule } from '@angular/core';
import { SampleAComponent } from './sample.component';
import { SampleADirective } from './sample.directive';
import { SampleAPipe } from './sample.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { SampleAService } from './sample.service';
import { CommonModule } from '@angular/common';
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
    BrowserModule,
    CommonModule
  ],
  providers: [],
  exports: [
    SampleAComponent,
    SampleADirective,
    SampleAPipe
  ],
  bootstrap: [SampleAComponent]
})
export class SampleAModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleAModule,
      providers: [SampleAService]
    };
  }
}
