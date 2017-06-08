
// import { PluginConfig, PluginPlacement } from './plugin/plugin';
// import { TestComponent } from './sampleC/test.component';
import { SampleBComponent } from 'sampleB';
import { PluginConfig, PluginPlacement } from 'plugin-manager';
@PluginConfig({
  name: 'agile',
  description: 'Agile development plugin to manage story points on tasks',
  // The placement information tells our plugin system where to register what plugin components
  placements: [
    new PluginPlacement({slot: 'test-plugin', priority: 1, component: SampleBComponent})
  ]
})
export default class AgilePlugin {
  constructor() {

  }
}
