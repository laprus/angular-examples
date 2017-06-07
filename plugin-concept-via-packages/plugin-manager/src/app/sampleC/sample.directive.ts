import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[uipSampleCDirective]'
})
export class SampleCDirective {

  constructor(private el: ElementRef) {
  }

}
