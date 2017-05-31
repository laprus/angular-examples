import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[uipSampleDirective]'
})
export class SampleADirective {

  constructor(private el: ElementRef) {
  }

}
