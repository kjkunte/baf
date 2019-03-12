import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
  // Routes without authentication guards
  { path: 'login', loadChildren: './components/login/login.module#LoginModule' }]