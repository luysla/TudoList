import { TaskService } from './../../providers/task-service';
import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Rx';

import * as firebase from 'firebase/app';
import 'firebase/auth';

@IonicPage({
  name: 'MyTasksPage',
  segment: 'Minhas tarefas'
})
@Component({
  selector: 'page-my-tasks',
  templateUrl: 'my-tasks.html',
})
export class MyTasksPage {

  myTasksCollection: AngularFirestoreCollection<any[]>;
  myTasks: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afs: AngularFirestore, public taskService: TaskService,
    public alertCtrl: AlertController, public cdr: ChangeDetectorRef) {
      
  }

  ionViewDidLoad(){
    const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.myTasksCollection = this.afs.collection(`tasks`, ref => ref.where('id_collaborator','==',user.uid));
        this.myTasks = this.myTasksCollection.valueChanges();
        this.cdr.detectChanges();
        console.log(this.myTasks);
        unsubscribe();
      }
    });
  }

  openDetailsTask(id_task: string): void{
    this.navCtrl.push('DetailsTaskPage',{
      idTask: id_task
    });
  }

  doneTask(id_task: string, subtask: number){

    let alert = this.alertCtrl.create({
      title: 'Atenção!',
      message: 'Existem sub tarefas vinculadas que não foram concluídas ainda. Para continuar é necessário concluí-las',
      buttons: [
        {
          text: 'Excluir mesmo assim',
          handler: data => {
            this.taskService.doneTask(id_task);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });

    if(subtask==0){
      this.taskService.doneTask(id_task);
    }else{
      alert.present();
    }
  }

}
