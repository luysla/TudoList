import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import { GroupService } from './../../providers/group-service';

@IonicPage({
  name: 'SearchUserPage',
  segment: 'pesquisar-usuario'
})

@Component({
  selector: 'page-search-user',
  templateUrl: 'search-user.html',
})
export class SearchUserPage implements OnInit {

  searchTerm: string;

  usersSearch: any;

  startAt = new Subject();
  endAt = new Subject();

  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();

  usersCollection: AngularFirestoreCollection<any[]>;
  users: Observable<any[]>;

  id_project: string;
  id_group: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afs: AngularFirestore, public groupService: GroupService) {

      this.id_project = this.navParams.get('idProject');
      this.id_group = this.navParams.get('idGroup');
  }

  ngOnInit(){
    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery(value[0], value[1]).subscribe((users) => {
        this.usersSearch = users;
      })
    })
  }

  firequery(start,end): Observable<any>{
    this.usersCollection = this.afs.collection(`users`,ref =>
      ref
      .orderBy(`username`)
      .limit(5)
      .startAt(start)
      .endAt(end))

      return this.users =  this.usersCollection.valueChanges();
  }

  getItem(ev: any): Observable<any>{
    let q = ev.target.value;
    if (q != '' && q != undefined) {
      this.startAt.next(q);
      this.endAt.next(q + "\uf8ff");
    }else{
      this.usersCollection = this.afs.collection(`users`);
      return this.users = this.usersCollection.valueChanges();
    }
  }

  addMemberGroup(user_uid: string,user_name: string, user_photo: string){
    this.groupService.addMemberGroup(this.id_group,user_uid,user_name,user_photo).then(()=>{
      alert('Membro adicionado!');
      this.navCtrl.pop();
    }).catch((e)=>{
      alert('Erro ao adicionar membro!' + e);
    })
  }

}
