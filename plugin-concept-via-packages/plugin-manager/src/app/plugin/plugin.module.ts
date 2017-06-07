/**
 * Created by pawel.laprus on 2017-06-07.
 */
import { ModuleWithProviders, NgModule } from '@angular/core';
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
