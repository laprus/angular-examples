import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SampleCComponent } from './sample.component';
import { SampleCDirective } from './sample.directive';
import { SampleCPipe } from './sample.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { SampleCService } from './sample.service';
import { CommonModule } from '@angular/common';
import { PluginManagerModule } from '../plugin/plugin.module';
import { PluginSlotDirective } from '../plugin/plugin-slot';
import { TestComponent } from './test.component';
/**
 * Created by pawel.laprus on 2017-05-23.
 */


@NgModule({
  declarations: [
    SampleCComponent,
    SampleCDirective,
    SampleCPipe,
    TestComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PluginManagerModule
  ],
  providers: [],
  exports: [
    SampleCComponent,
    SampleCDirective,
    SampleCPipe,
    TestComponent
  ],
  entryComponents: [TestComponent],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [SampleCComponent]
})
export class SampleCModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleCModule,
      providers: [SampleCService]
    };
  }
}
