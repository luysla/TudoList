import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'MyTasksPage',
  segment: 'Minhas tarefas'
})
@Component({
  selector: 'page-my-tasks',
  templateUrl: 'my-tasks.html',
})
export class MyTasksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
