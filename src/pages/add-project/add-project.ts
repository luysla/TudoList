import { AngularFirestore } from 'angularfire2/firestore';
import { ProjectService } from './../../providers/project-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Project } from './../../models/project';

import * as firebase from 'firebase';
import 'firebase/auth';

import moment from "moment";

@IonicPage({
  name: 'AddProjectPage',
  segment: 'novo-projeto'
})
@Component({
  selector: 'page-add-project',
  templateUrl: 'add-project.html',
})

export class AddProjectPage {

  project = {} as Project;

  idProject: string;

  projectForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public projectService: ProjectService,
    public afs: AngularFirestore, public toastCtrl: ToastController) {

      this.projectForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        description: ['', [Validators.required, Validators.minLength(3)]]
      })

  }

  addProject(project: Project): void{

    const toast = this.toastCtrl.create({
      message: 'Projeto criado com sucesso!',
      duration: 3000,
      position: 'top'
    });

    project.user_admin = firebase.auth().currentUser.uid;

    this.projectService.newProject(project).then((doc)=>{

      this.afs.collection('projects').doc(`${doc.id}`).update({
        id_project: doc.id,
        date_hour_create: moment().format('DD/MM/YYYY, h:mm:ss a'),
        star: 0
      });
      this.idProject = doc.id;
      toast.present();
      this.navCtrl.pop();
      
    }).catch(function(e){
      toast.setMessage("Erro ao criar projeto!");
      toast.present();
    })

  }

  openSearchUser(){
    this.navCtrl.push('SearchUserPage');
  }

}
