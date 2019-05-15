import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyProjectsPage } from './my-projects';

@NgModule({
  declarations: [
    MyProjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyProjectsPage),
  ],
})
export class MyProjectsPageModule {}
