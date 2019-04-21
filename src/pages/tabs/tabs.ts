import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'StarProjectsPage';
  tab3Root = 'UserProfilePage';

  constructor() {

  }
}
