import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { documentReducer } from './store/document.reducer';
import { provideStore } from '@ngrx/store';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideAnimationsAsync('noop'), provideAnimationsAsync(),provideStore({ document: documentReducer }),],
};
