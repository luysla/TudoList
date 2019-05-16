import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { Subtask } from './../../models/subtask';

import { SubtaskService } from './../../providers/subtask-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import moment from "moment";

import { Calendar } from '@ionic-native/calendar';

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
  subtask_number = 0;

  subtask_number_up: number;

  subtask = {} as Subtask;

  subtaskForm: FormGroup;

  subtaskCollection: AngularFirestoreCollection<any[]>;
  subtaskDoc: Observable<any[]>;

  color_priority: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public subtaskService: SubtaskService, public afs: AngularFirestore,
    public formBuilder: FormBuilder, public alertCtrl: AlertController,
    public toastCtrl: ToastController, public calendar: Calendar ) {

      this.id_task = this.navParams.get('idTask');
      this.subtask_number_up = this.navParams.get('subtask');

      console.log(this.subtask_number, this.id_task);


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

    this.subtaskForm.reset();
    
    this.subtask_number++;
    
    this.afs.collection('tasks').doc(`${this.id_task}`).update({
      subtask: this.subtask_number
    })
    
    this.subtask_number_up = this.subtask_number;

    console.log(this.subtask_number_up);

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

    alert.addButton('Cancelar');
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


  addReminder(id_subtask: string): void{
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

              this.calendar.createEventInteractivelyWithOptions(data.name,data.local,data.description,moment(data.inicial_date).toDate(),moment(data.final_date).toDate(),options).
              then(()=>{
                this.subtaskService.addReminderSubtask(id_subtask,data.name,data.local,data.description,data.initial_date,data.final_date);
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


  doneSubtask(id_subtask: string): void{

    this.subtaskService.doneSubtask(id_subtask);

    this.subtask_number_up = this.subtask_number_up - 1;
      
      console.log(this.subtask_number_up, this.id_task);
      
      this.afs.collection('tasks').doc(`${this.id_task}`).update({
        subtask: this.subtask_number_up
      })



  }

}
