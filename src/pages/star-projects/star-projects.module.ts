import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StarProjectsPage } from './star-projects';

@NgModule({
  declarations: [
    StarProjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(StarProjectsPage),
  ],
})
export class StarProjectsPageModule {}
