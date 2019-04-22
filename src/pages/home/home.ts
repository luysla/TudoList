import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavController, Platform, App, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { AuthService } from './../../providers/auth-service';
import { ProjectService } from './../../providers/project-service';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import * as firebase from 'firebase/app';
import 'firebase/auth';

@IonicPage({
  name: 'HomePage',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  search: boolean = false;
  searchTerm: string;

  startAt = new Subject();
  endAt = new Subject();

  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();

  projectCollection: AngularFirestoreCollection<any[]>;
  projects: Observable<any[]>;

  projectsSearch: any;

  constructor(public navCtrl: NavController, public authService: AuthService,
    public platform: Platform, public app: App, public afs: AngularFirestore,
    public afAuth: AngularFireAuth, public projectService: ProjectService,
    public cdr: ChangeDetectorRef) {

    }

    ngOnInit(){
      Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
        this.firequery(value[0], value[1]).subscribe((projects) => {
          this.projectsSearch = projects;
        })
      })
    }

  ionViewDidEnter(){
    const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.projectCollection = this.afs.collection(`projects`,ref => ref.where('user_admin', '==', user.uid));
        this.projects = this.projectCollection.valueChanges();
        this.cdr.detectChanges();
        unsubscribe();
      }
    });
  }

  firequery(start,end){
    this.projectCollection = this.afs.collection(`projects`, ref =>
      ref
      .orderBy(`name`)
      .limit(5)
      .startAt(start)
      .endAt(end))

      return this.projects =  this.projectCollection.valueChanges();
  }

  getItem(ev: any){
    let q = ev.target.value;
    if (q != '' && q != undefined) {
      this.startAt.next(q);
      this.endAt.next(q + "\uf8ff");
    }else{
      this.projectCollection = this.afs.collection(`projects`);
      return this.projects = this.projectCollection.valueChanges();
    }

  }

  openAddProject(): void{
    this.navCtrl.push('AddProjectPage');
  }

  openListPage(id_project: string, project_name: string): void{
    this.navCtrl.push('ListsPage',{
      idProject: id_project,
      nameProject: project_name
    });
  }

  addStarProject(id_project: string, star: number): void{
    if(star == 0){
      this.projectService.starProject(id_project,1);
    }else{
      this.projectService.starProject(id_project,0);
    }
  }

  showSearch(): void{
    this.search = !this.search;
    this.cdr.detectChanges();
  }

  cancelSearch(): void{
    this.navCtrl.setRoot('HomePage');
  }

}
