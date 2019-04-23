import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompletedTasksPage } from './completed-tasks';

@NgModule({
  declarations: [
    CompletedTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(CompletedTasksPage),
  ],
})
export class CompletedTasksPageModule {}
