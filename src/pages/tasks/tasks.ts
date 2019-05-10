import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  id_project: string;

  color_priority: string;

  task = {} as Task;

  taskForm: FormGroup;

  taskCollection: AngularFirestoreCollection<any[]>;
  taskDoc: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public taskService: TaskService,
    public afs: AngularFirestore, public cdr: ChangeDetectorRef,
    public alertCtrl: AlertController) {

      this.id_list = this.navParams.get('idList');
      this.id_project = this.navParams.get('idProject');


      this.taskForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]]
      })

      const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
        if(user){
          this.taskCollection = this.afs.collection('tasks',ref => ref.where('id_list','==',this.id_list).where('done','==',0));
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
        idTask: id_task,
        idProject: this.id_project
      });
    }

    doneTask(id_task: string, subtask: number){

      console.log(subtask);

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

    addPriority(id_task: string): void{

      let alert = this.alertCtrl.create({
        title: 'Prioridade da tarefa',
        inputs:[

          {
            type: 'radio',
            label: 'Alta',
            value: '1',
            checked: true
          },
          {
            type: 'radio',
            label: 'Média',
            value: '2',
            checked: false
          },
          {
            type: 'radio',
            label: 'Baixa',
            value: '3',
            checked: false
          }

        ],

        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Ok',
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
          },
        ]
      });

      alert.present();
    }

  }
