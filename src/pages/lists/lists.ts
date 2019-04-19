import { Component, group } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Observable } from 'rxjs/Rx';

import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import { GroupService } from './../../providers/group-service';

import { Group } from '../../models/group';


@IonicPage({
  name: 'ListsPage',
  segment: 'listas'
})
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {

  id_project: string;
  project_name: string;

  listCollection: AngularFirestoreCollection<any[]>;
  lists: Observable<any[]>;

  groupCollection: AngularFirestoreCollection<any[]>;
  groups: Observable<any[]>;

  view: string = 'lists';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afs: AngularFirestore, public groupService: GroupService,
    public alertCtrl: AlertController) {

    this.id_project = this.navParams.get('idProject');
    this.project_name = this.navParams.get('nameProject');

    this.listCollection = this.afs.collection('lists', ref => ref.where('id_project', '==', this.id_project));
    this.lists = this.listCollection.valueChanges();

    this.groupCollection = this.afs.collection('groups', ref => ref.where('id_project', '==', this.id_project));
    this.groups = this.groupCollection.valueChanges();

  }

  openAddList(): void{
    this.navCtrl.push('AddListPage',{
      idProject: this.id_project
    });
  }

  openSearchUser(): void{
    this.navCtrl.push('SearchUserPage',{
      idProjet: this.id_project
    });
  }

  openAddGroup(): void{
    this.navCtrl.push('AddGroupPage',{
      idProject: this.id_project
    })
  }

}
