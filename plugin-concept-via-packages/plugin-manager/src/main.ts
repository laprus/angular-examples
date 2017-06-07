import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SampleCModule } from './app/sampleC/sample.module';
import { environment } from './environments/environment';


platformBrowserDynamic().bootstrapModule(SampleCModule);
