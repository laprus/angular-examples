import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[uipSampleDirective]'
})
export class SampleBDirective {

  constructor(private el: ElementRef) {
  }

}
