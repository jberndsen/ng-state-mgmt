/**
 * Import module dependencies
 */
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule, Title} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ClickOutsideModule} from 'ng-click-outside';
import {AppMaterialModule} from './modules/app-material.module';
import {AppRoutingModule} from './modules/app-routing.module';

/**
 * Import declarations
 */
import {AppComponent} from './app.component';
import {RootComponent} from './components/root/root.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {AuthorizationService} from './services/auth.service';
import {StorageService} from './services/storage.service';
import {ApiService} from './services/api.service';
import {Effects} from './state/effects/effects';
import {reducer} from './state/state';
import {environment} from '../environments/environment';

/**
 * Module dependencies
 */
const dependencies = [
  AppMaterialModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  BrowserModule,
  FlexLayoutModule,
  HttpModule,
  ReactiveFormsModule,
  StoreModule.provideStore(reducer),
  EffectsModule.run(Effects),
  ClickOutsideModule
];

/**
 * Additional module dependencies, specifically for during development
 */
const devDependencies = [
  ...dependencies,
  StoreDevtoolsModule.instrumentOnlyWithExtension()
];

/**
 * Services defined in this module
 */
const services = [
  Title,
  AuthGuard,
  AuthorizationService,
  StorageService,
  ApiService
];

/**
 * Declarations defined in this module
 */
const declarations = [
  AppComponent,
  RootComponent,
  LoginComponent
];

/**
 * Dialog components also need to be declared separately as entryComponents
 */
const dialogs = [];

@NgModule({
  imports: environment.production ? dependencies : devDependencies,
  declarations: [...declarations, ...dialogs],
  entryComponents: dialogs,
  providers: services,
  bootstrap: [AppComponent]
})
export class AppModule {}
