import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchUserPage } from './search-user';

@NgModule({
  declarations: [
    SearchUserPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchUserPage),
  ],
})
export class SearchUserPageModule {}
