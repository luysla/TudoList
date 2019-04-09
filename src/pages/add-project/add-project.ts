import { ProjectService } from './../../providers/project-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Project } from './../../models/project';

import * as firebase from 'firebase';
import 'firebase/auth';

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

  projectForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public projectService: ProjectService) {

      this.projectForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        description: ['', [Validators.required, Validators.minLength(3)]]
      })

  }

  addProject(project: Project): void{

    project.user_admin = firebase.auth().currentUser.uid;

    this.projectService.newProject(project).then(()=>{
      alert("Projeto criado com sucesso!");
      this.navCtrl.pop();
    }).catch((e)=>{
      alert("Erro ao criar projeto!" + e);
    })
  }

}
