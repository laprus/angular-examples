
import { PluginData } from './plugin';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/Rx';

@Injectable()
export class PluginService {

  change: any;
  plugins: Array<any>;

  constructor() {
    console.log('ctor plugin-service');
    this.plugins = [];
    this.change = new ReplaySubject(1);
    this.loadPlugins();
  }

  public loadPlugins(): void {
    System.import('../../plugins.js').then((pluginsModule) => {
      pluginsModule.default.forEach((pluginUrl) => this.loadPlugin(pluginUrl));
    });
  }

  public loadPlugin(url: string): any {
    return System.import('../../app/agile.ts').then((pluginModule) => {
      const Plugin: any = pluginModule.default;
      const pluginData: any = {
        url,
        type: Plugin,
        // reading the meta data previously stored by the @Plugin decorator
        config: Plugin._pluginConfig,
        // creates the plugin instance
        instance: new Plugin()
      };

      this.plugins = this.plugins.concat([pluginData]);
      this.change.next(this.plugins);
    });
  }

  // removes a plugin from the plugins list
  public removePlugin(name: any): void {
    //noinspection TsLint
    const plugin: any = this.plugins.filter((plugin) => plugin.name === name);
    if (plugin) {
      // if the plugin was found by name, we remove it from the list and emit a change event
      const plugins: any = this.plugins.slice();
      plugins.splice(plugins.indexOf(plugin), 1);
      this.plugins = plugins;
      this.change.next(this.plugins);
    }
  }

  // get all plugin data objects for a given slot name
  public getPluginData(slot: any): any {
    return this.plugins.reduce((components, pluginData) => {
      return components.concat(
        pluginData.config.placements
          .filter((placement) => placement.slot === slot)
          .map((placement) => new PluginData(pluginData, placement))
      );
    }, []);
  }


}
