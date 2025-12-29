// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.component.config';
// import { AppComponent  } from './app/app.component';
// // import { HttpClientModule } from '@angular/common/http';

// bootstrapApplication(AppComponent , appConfig)
//   .catch((err) => console.error(err));




// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideHttpClient } from '@angular/common/http';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient()  // ← IMPORTANTE
//   ]
// });

// bootstrapApplication(AppComponent, {
//   providers: [importProvidersFrom(HttpClientModule)]
// });




import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { appConfig } from './app/app.component.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers || [],
    importProvidersFrom(HttpClientModule)
  ]
});