import {NgModule} from '@angular/core';
import {MdButtonModule, MdCardModule, MdDialogModule, MdIconModule, MdInputModule, MdToolbarModule} from '@angular/material';

// declare Material Design components used in your app here.
// we do this separately to optimize the tree shaking build process and keep the main module clean.
const modules = [
  MdButtonModule,
  MdDialogModule,
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdToolbarModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class AppMaterialModule { }
