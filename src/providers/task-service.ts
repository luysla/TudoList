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

  doneTask(id_task: string): Promise<any>{
    return this.afs.collection('tasks').doc(`${id_task}`).update({
      done: 1
    })
  }

  restoreTask(id_task: string): Promise<any>{
    return this.afs.collection('tasks').doc(`${id_task}`).update({
      done: 0
    });
  }

  addPriorityTask(id_task: string, priority: number, color: string): Promise<any>{
    return this.afs.collection('tasks').doc(`${id_task}`).update({
      priority: priority,
      color_priority: color
    });
  }

}
