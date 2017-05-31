import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SampleAModule } from './app/sampleA/sample.module';
import { environment } from './environments/environment';


platformBrowserDynamic().bootstrapModule(SampleAModule);
