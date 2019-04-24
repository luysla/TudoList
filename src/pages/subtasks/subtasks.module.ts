import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubtasksPage } from './subtasks';

@NgModule({
  declarations: [
    SubtasksPage,
  ],
  imports: [
    IonicPageModule.forChild(SubtasksPage),
  ],
})
export class SubtasksPageModule {}
