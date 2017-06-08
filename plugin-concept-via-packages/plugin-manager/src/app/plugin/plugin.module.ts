/**
 * Created by pawel.laprus on 2017-06-07.
 */
import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginSlotDirective } from './plugin-slot';
import { PluginService } from './plugin-service';

/**
 * Created by pawel.laprus on 2017-05-23.
 */


@NgModule({
  declarations: [
    PluginSlotDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PluginSlotDirective
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [PluginService]
})
export class PluginManagerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PluginManagerModule,
      providers: [PluginService]
    };
  }
}
