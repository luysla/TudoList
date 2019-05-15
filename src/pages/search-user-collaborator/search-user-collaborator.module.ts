import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchUserCollaboratorPage } from './search-user-collaborator';

@NgModule({
  declarations: [
    SearchUserCollaboratorPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchUserCollaboratorPage),
  ],
})
export class SearchUserCollaboratorPageModule {}
