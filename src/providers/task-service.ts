import { Injectable, forwardRef, NgModule } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { Task } from '../models/task';

@NgModule({providers: [forwardRef(() => TaskService)]})
export class TaskServiceModule {
}

@Injectable()
export class TaskService {

  constructor(public afs: AngularFirestore){

  }

  newTask(task: Task): Promise<any>{
    return this.afs.collection('tasks').add(task);
  }


}
