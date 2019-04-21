import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import { ProjectService } from './../../providers/project-service';

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
    public afs: AngularFirestore, public projectService: ProjectService) {

    this.projectCollection = this.afs.collection('projects', ref => ref.where('star', '==', 1));
    this.starProjects = this.projectCollection.valueChanges();

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
