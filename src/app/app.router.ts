import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {Custom1Component} from './custom1/custom1.component';
import {Custom2Component} from './custom2/custom2.component';

export const router: Routes = [
    { path: '', redirectTo: 'custom1', pathMatch: 'full' },
    { path: 'custom1', component:Custom1Component  },
    { path: 'custom2', component:Custom2Component  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);