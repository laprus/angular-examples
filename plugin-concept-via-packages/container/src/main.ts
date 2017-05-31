import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SampleModule } from './app/sample/sample.module';
import { environment } from './environments/environment';


platformBrowserDynamic().bootstrapModule(SampleModule);
