import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Rx';

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

  listCollection: AngularFirestoreCollection<any[]>;
  lists: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afs: AngularFirestore) {

    this.id_project = this.navParams.get('idProject');

    this.listCollection = this.afs.collection(`lists`, ref => ref.where('id_project', '==', this.id_project));
    this.lists = this.listCollection.valueChanges();

  }

  openAddList(): void{
    this.navCtrl.push('AddListPage',{
      idProject: this.id_project
    });
  }

}
