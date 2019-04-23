import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TaskService } from './../../providers/task-service';

import { Task } from '../../models/task';
import { Observable } from 'rxjs';

import * as firebase from 'firebase/app';
import 'firebase/auth';

@IonicPage({
  name: 'TasksPage',
  segment: 'tarefas'
})
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  id_list: string;

  task = {} as Task;

  taskForm: FormGroup;

  taskCollection: AngularFirestoreCollection<any[]>;
  taskDoc: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public taskService: TaskService,
    public afs: AngularFirestore, public cdr: ChangeDetectorRef) {

    this.id_list = this.navParams.get("idList");

    this.taskForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    })

    const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.taskCollection = this.afs.collection('tasks',ref => ref.where('id_list','==',this.id_list));
        this.taskDoc = this.taskCollection.valueChanges();
        this.cdr.detectChanges();
        unsubscribe();
      }
    });
  }

  addTask(task: Task): void{
    this.taskService.newTask(task).then((doc)=>{

      this.afs.collection('tasks').doc(`${doc.id}`).update({
        id_task: doc.id,
        id_list: this.id_list,
        done: 0,
        subtask: 0
      })

      this.taskForm.reset();
    }).catch((e)=>{
      console.log("Erro ao criar tarefa" + e);
    })
  }

  openCompletedTasks(): void{
    this.navCtrl.push('CompletedTasksPage',{
      idList: this.id_list
    });
  }

  openDetailsTask(id_task: string): void{
    this.navCtrl.push('DetailsTaskPage',{
      idTask: id_task
    });
  }

}
