import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Subtask } from './../../models/subtask';

import { SubtaskService } from './../../providers/subtask-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@IonicPage({
  name: 'SubtasksPage',
  segment: 'subtarefas'
})
@Component({
  selector: 'page-subtasks',
  templateUrl: 'subtasks.html',
})
export class SubtasksPage {

  id_task: string;
  subtask_number: number;

  subtask = {} as Subtask;

  subtaskForm: FormGroup;

  subtaskCollection: AngularFirestoreCollection<any[]>;
  subtaskDoc: Observable<any[]>;

  color_priority: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public subtaskService: SubtaskService, public afs: AngularFirestore,
    public formBuilder: FormBuilder, public alertCtrl: AlertController ) {

      this.id_task = this.navParams.get('idTask');
      this.subtask_number = this.navParams.get('subtask');

      this.subtaskForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]]
      })

      this.subtaskCollection = this.afs.collection('subtasks',ref => ref.where('id_task','==', this.id_task).where('done','==',0));
      this.subtaskDoc = this.subtaskCollection.valueChanges();

    }

  addSubtask(subtask: Subtask){

    this.subtaskService.newSubtask(subtask).then((doc)=>{
      this.afs.collection('subtasks').doc(`${doc.id}`).update({
        id_subtask: doc.id,
        id_task: this.id_task,
        done: 0
      })
    })

    this.subtask_number++;

    this.afs.collection('tasks').doc(`${this.id_task}`).update({
      subtask: this.subtask_number
    })

  }

  addPriority(id_subtask: string): void{

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

        this.subtaskService.addPrioritySubtask(id_subtask,data,this.color_priority);

      }
    });
    alert.present();
  }

  doneSubtask(id_subtask: string): void{
    this.subtaskService.doneSubtask(id_subtask);
  }

}
