/**
 * Created by pawel.laprus on 2017-06-07.
 */

export function PluginConfig(config: any): any {
  return (type) => {
    type._pluginConfig = config;
  };
}

export class PluginPlacement {
  slot: any;
  priority: any;
  component: any;

  constructor(options: any) {
    this.slot = options.slot;
    this.priority = options.priority;
    this.component = options.component;
  }
}

export class PluginData {
  plugin: any;
  placement: any;

  constructor(plugin: any, placement: any) {
    this.plugin = plugin;
    this.placement = placement;
  }
}
