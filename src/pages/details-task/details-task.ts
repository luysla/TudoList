import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Observable } from 'rxjs/Rx';

import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import { TaskService } from '../../providers/task-service';

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

  color_priority: string;

  taskColletion: AngularFirestoreCollection<any[]>;
  taskDoc: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afs: AngularFirestore, public taskService: TaskService,
    public alertCtrl: AlertController) {

    this.id_task = this.navParams.get('idTask');

    this.taskColletion = this.afs.collection('tasks', ref => ref.where('id_task','==',this.id_task));
    this.taskDoc = this.taskColletion.valueChanges();

  }

  addPriority(id_task: string): void{

    let alert = this.alertCtrl.create();
    alert.setTitle('Prioridade da tarefa');

    alert.addInput({
      type: 'radio',
      label: 'Alta',
      value: '1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Média',
      value: '2',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Baixa',
      value: '3',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {

        if(data==1){
          this.color_priority = '#FF4500';
        }if(data==2){
          this.color_priority = '#FF8C00';
        }if(data==3){
          this.color_priority = '#FFD700';
        }

        this.taskService.addPriorityTask(id_task,data,this.color_priority);

      }
    });
    alert.present();
  }

}
