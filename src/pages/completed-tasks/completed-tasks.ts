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

  tasksColletion: AngularFirestoreCollection<any[]>;
  tasksCompleted: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afs: AngularFirestore, public taskService: TaskService) {

    this.tasksColletion = this.afs.collection('tasks', ref => ref.where('done','==',1));
    this.tasksCompleted = this.tasksColletion.valueChanges();

  }

  restore(id_task: string): void{
    this.taskService.restoreTask(id_task);
  }

}
