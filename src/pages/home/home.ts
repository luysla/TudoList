import { Component } from '@angular/core';
import { NavController, Platform, App, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './../../providers/auth-service';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';


@IonicPage({
  name: 'HomePage',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  projectCollection: AngularFirestoreCollection<any[]>;
  projects: Observable<any[]>;

  constructor(public navCtrl: NavController, public authService: AuthService,
    public platform: Platform, public app: App, public afs: AngularFirestore,
    public afAuth: AngularFireAuth) {

      //let user_uid = firebase.auth().currentUser.uid;

      this.afAuth.authState.subscribe(auth=>{
        this.projectCollection = this.afs.collection(`projects`,ref => ref.where('user_admin', '==', auth.uid));
        this.projects = this.projectCollection.valueChanges();
      })


    }

  logout(): void{
    this.authService.logout().then(()=>{
      this.app.getRootNavs()[0].setRoot('LoginFirebasePage');
      this.platform.exitApp();
    }).catch((e)=>{
      alert("Erro ao sair do aplicativo!");
    })
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

}
