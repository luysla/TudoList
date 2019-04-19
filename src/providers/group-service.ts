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

  addMemberGroup(id_group: string, member_uid: string, member_name: string): Promise<any>{

    return this.afs.collection('groups').doc(`${id_group}`).update({
      members: firebase.firestore.FieldValue.arrayUnion({'member_uid': member_uid, 'member_name': member_name})
    });

  }

}
