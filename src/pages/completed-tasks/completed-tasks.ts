import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Rx';

import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import { TaskService } from '../../providers/task-service';

@IonicPage({
  name: 'CompletedTasksPage',
  segment: 'tarefas-concluidas'
})
@Component({
  selector: 'page-completed-tasks',
  templateUrl: 'completed-tasks.html',
})
export class CompletedTasksPage {

  id_list: string;

  tasksColletion: AngularFirestoreCollection<any[]>;
  tasksCompleted: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afs: AngularFirestore, public taskService: TaskService) {

    this.id_list = this.navParams.get('idList');

    this.tasksColletion = this.afs.collection('tasks', ref => ref.where('done','==',1).where('id_list','==',this.id_list));
    this.tasksCompleted = this.tasksColletion.valueChanges();

  }

  restore(id_task: string): void{
    this.taskService.restoreTask(id_task);
  }

}
