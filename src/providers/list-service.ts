import { Injectable, forwardRef, NgModule } from '@angular/core';

import { List } from '../models/list';

import { AngularFirestore } from 'angularfire2/firestore';

@NgModule({providers: [forwardRef(() => ListService)]})
export class ListServiceModule {
}

@Injectable()
export class ListService {

  constructor(public afs: AngularFirestore){

  }

  newList(list: List): Promise<any>{
    return this.afs.collection(`lists`).add(list);
  }
}
