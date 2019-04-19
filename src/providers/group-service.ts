import { Injectable, forwardRef, NgModule } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { Group } from '../models/group';

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


}
