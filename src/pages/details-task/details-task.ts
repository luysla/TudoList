import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Rx';

import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

@IonicPage({
  name: 'DetailsTaskPage',
  segment: 'detalhes-tarefa'
})
@Component({
  selector: 'page-details-task',
  templateUrl: 'details-task.html',
})
export class DetailsTaskPage {

  id_task: string;

  taskColletion: AngularFirestoreCollection<any[]>;
  taskDoc: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afs: AngularFirestore) {

    this.id_task = this.navParams.get('idTask');

    this.taskColletion = this.afs.collection('tasks', ref => ref.where('id_task','==',this.id_task));
    this.taskDoc = this.taskColletion.valueChanges();

  }

}
