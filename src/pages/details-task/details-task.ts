import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Observable } from 'rxjs/Rx';

import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import { TaskService } from '../../providers/task-service';

import { Calendar } from '@ionic-native/calendar';

import moment from "moment";

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

    addReminder(id_task: string): void{

      let options = { calendarName: 'TudoList', firstReminderMinutes: 15 };

      let alertReminder = this.alertCtrl.create({
        subTitle: "Lembrete criado com sucesso!",
        buttons: ['OK']
      });

      const alert = this.alertCtrl.create({
        title: 'Lembrete',
        inputs: [
          {
            name: 'name',
            placeholder: 'Nome*',
            type: 'text'
          },
          {
            name: 'description',
            placeholder: 'Descrição(opcional)',
            type: 'text'
          },
          {
            name: 'local',
            placeholder: 'Local(opcional)',
            type: 'text'
          },
          {
            name: 'initial_date',
            placeholder: 'Data inicial*',
            type: 'date'
          },
          {
            name: 'final_date',
            placeholder: 'Data final*',
            type: 'date'
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Ok',
            handler: data => {

              Calendar.createEventInteractivelyWithOptions(data.name,data.local,data.description,moment(data.inicial_date).toDate(),moment(data.final_date).toDate(),options).
              then(()=>{
                this.taskService.addReminder(id_task,data.name,data.local,data.description,data.initial_date,data.final_date);
                alertReminder.present();
              }).catch((e)=>{
                alertReminder.setSubTitle("Erro ao criar o lembrete! Tente novamente...");
                alertReminder.setMessage(e);
                alertReminder.present();
              })
            }
          }
        ]
      });
      alert.present();
    }

    openSubtask(id_task: string, subtask: number): void{
      this.navCtrl.push('SubtasksPage',{
        idTask: id_task,
        subtask: subtask
      })
    }

  }
