import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsTaskPage } from './details-task';

@NgModule({
  declarations: [
    DetailsTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsTaskPage),
  ],
})
export class DetailsTaskPageModule {}
