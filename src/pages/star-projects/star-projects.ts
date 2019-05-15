import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import { ProjectService } from './../../providers/project-service';

import * as firebase from 'firebase/app';
import 'firebase/auth';

@IonicPage({
  name: 'StarProjectsPage',
  segment: 'projetos-favoritos'
})
@Component({
  selector: 'page-star-projects',
  templateUrl: 'star-projects.html',
})
export class StarProjectsPage {

  projectCollection: AngularFirestoreCollection<any[]>;
  starProjects: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afs: AngularFirestore, public projectService: ProjectService,
    public cdr: ChangeDetectorRef) {
  }

  ionViewDidEnter(){
    const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.projectCollection = this.afs.collection('projects', ref => ref.where('star', '==', 1).where('user_admin','==',user.uid));
        this.starProjects = this.projectCollection.valueChanges();
        this.cdr.detectChanges();
        unsubscribe();
      }
    });
    
  }

  deleteStarProject(id_project: string): void{
    this.projectService.starProject(id_project,0);
  }

  openListPage(id_project: string, project_name: string): void{
    this.navCtrl.push('ListsPage',{
      idProject: id_project,
      nameProject: project_name
    });
  }

}
