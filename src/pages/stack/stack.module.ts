import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StackPage } from './stack';

@NgModule({
  declarations: [
    StackPage,
  ],
  imports: [
    IonicPageModule.forChild(StackPage),
  ],
})
export class StackPageModule {}
