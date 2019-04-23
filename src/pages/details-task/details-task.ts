import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'DetailsTaskPage',
  segment: 'detalhes-tarefa'
})
@Component({
  selector: 'page-details-task',
  templateUrl: 'details-task.html',
})
export class DetailsTaskPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
