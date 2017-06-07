/**
 * Created by pawel.laprus on 2017-06-07.
 */
import { PluginService } from './plugin-service';
import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  ViewContainerRef
} from '@angular/core';

//noinspection TsLint
@Directive({
  selector: '[uipPluginSlot]'
})
export class PluginSlotDirective implements OnChanges, OnDestroy {

  @Input() name: string;

  componentRefs: Array<any>;
  pluginChangeSubscription: any;

  constructor(private viewContainerRef: ViewContainerRef,
              private pluginService: PluginService,
              private componentFactoryResolver: ComponentFactoryResolver) {
    console.log('ctor plugin-directive');
    this.componentRefs = [];
    // subscribing to changes on the plugin service and re-initialize slot if needed
    this.pluginChangeSubscription = this.pluginService.change.subscribe(() => this.initialize());
  }

  initialize(): any {
    // if we don't have a valid name input, we shall return
    if (!this.name) {
      return;
    }

    // if we have already references to components within the plugin slot, we dispose them and clear the list
    if (this.componentRefs.length > 0) {
      this.componentRefs.forEach((componentRef) => componentRef.destroy());
      this.componentRefs = [];
    }

    // using the PluginService we can obtain all placement information relevant to this slot
    const pluginData: any = this.pluginService.getPluginData(this.name);
    // using the placement priority to sort plugin components relevant to this slot
    pluginData.sort(
      (a, b) => a.placement.priority < b.placement.priority ?
        1 : a.placement.priority > b.placement.priority ? -1 : 0);

    // instantiating all plugin components relevant to this slot
    //noinspection TsLint
    return Promise.all(pluginData.map((pluginData) => this.instantiatePluginComponent(pluginData)));
  }

  // method to instantiate a single component based on plugin placement information
  instantiatePluginComponent(pluginData: any): any {

    let componentFactory: any = this.componentFactoryResolver
      .resolveComponentFactory(pluginData.placement.component);
    let component: ComponentRef<any> = this.viewContainerRef.createComponent(componentFactory);
    return component;

  }

  // if the name input changes, we need to re-initialize the plugin components
  ngOnChanges() {
    this.initialize();
  }

  ngOnDestroy() {
    this.pluginChangeSubscription.unsubscribe();
  }

}
