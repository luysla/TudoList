import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'CompletedTasksPage',
  segment: 'tarefas-concluidas'
})
@Component({
  selector: 'page-completed-tasks',
  templateUrl: 'completed-tasks.html',
})
export class CompletedTasksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
