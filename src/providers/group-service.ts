import { Profile } from './../models/profile';
import { Injectable, forwardRef, NgModule } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { Group } from '../models/group';

import * as firebase from 'firebase/app';

@NgModule({providers: [forwardRef(() => GroupService)]})
export class GroupServiceModule {
}

@Injectable()
export class GroupService {

  constructor(public afs: AngularFirestore){

  }

  addGroup(group: Group): Promise<any>{
    return this.afs.collection('groups').add(group);
  }

  addMemberGroup(id_group: string, member: Profile): Promise<any>{

    return this.afs.collection('groups').doc(`${id_group}`).update({
      members: firebase.firestore.FieldValue.arrayUnion({'user_uid': member.user_uid, 'name': member.name, 'username': member.username, 'photo': member.photo})
    });

  }

  deleteGroup(id_group: string): Promise<any>{
    return this.afs.collection(`groups`).doc(`${id_group}`).delete();
  }

  deleteMemberGroup(id_group: string, member: Profile): Promise<any>{
    return this.afs.collection(`groups`).doc(`${id_group}`).update({
      members: firebase.firestore.FieldValue.arrayRemove({'user_uid': member.user_uid, 'name': member.name, 'username': member.username, 'photo': member.photo})
    })
  }

}
