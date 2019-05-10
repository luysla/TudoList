import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'StarProjectsPage';
  tab3Root = 'UserProfilePage';
  tab4Root = 'MyTasksPage';
  tab5Root = 'MyTasksPage';

  myIndex: number;

  constructor(public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
