import { Profile } from './../models/profile';
import { Injectable, forwardRef, NgModule } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { Task } from '../models/task';

import moment from "moment";

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

  addReminder(id_task: string, name: string, local: string, description: string,
    initial_date: Date, final_date: Date): Promise<any>{
    return this.afs.collection('tasks').doc(`${id_task}`).update({
      reminder: [{
        name: name,
        local: local,
        description: description,
        initial_date: moment(initial_date).toDate(),
        final_date: moment(final_date).toDate(),
        fd: moment(final_date).format("DD MMM")
      }]
    });
  }

  addUserCollaborator(id_task: string, user: Profile): Promise<any>{
    return this.afs.collection('tasks').doc(`${id_task}`).update({
      collaborator: [{
        uid: user.user_uid,
        name: user.name,
        username: user.username,
        photo: user.photo
      }],
      id_collaborator: user.user_uid
    })
  }

}
