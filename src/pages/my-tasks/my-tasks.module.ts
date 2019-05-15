import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTasksPage } from './my-tasks';

@NgModule({
  declarations: [
    MyTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTasksPage),
  ],
})
export class MyTasksPageModule {}
