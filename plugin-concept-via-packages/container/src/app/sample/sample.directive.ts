import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[uipSampleDirective]'
})
export class SampleDirective {

  constructor(private el: ElementRef) {
  }

}
