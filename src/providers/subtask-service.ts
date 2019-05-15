import { Injectable, forwardRef, NgModule } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { Subtask } from './../models/subtask';

import moment from "moment";

@NgModule({providers: [forwardRef(() => SubtaskService)]})
export class SubtaskServiceModule {
}

@Injectable()
export class SubtaskService {

  constructor(public afs: AngularFirestore){

  }

  newSubtask(subtask: Subtask): Promise<any>{
    return this.afs.collection('subtasks').add(subtask);
  }

  doneSubtask(id_subtask: string): Promise<any>{
    return this.afs.collection('tasks').doc(`${id_subtask}`).update({
      done: 1
    })
  }

  restoreSubtask(id_subtask: string): Promise<any>{
    return this.afs.collection('tasks').doc(`${id_subtask}`).update({
      done: 0
    });
  }


  addPrioritySubtask(id_subtask: string, priority: number, color: string): Promise<any>{
    return this.afs.collection('subtasks').doc(`${id_subtask}`).update({
      priority: priority,
      color_priority: color
    });
  }

  addReminderSubtask(id_subtask: string, name: string, local: string, description: string,
    initial_date: Date, final_date: Date): Promise<any>{
    return this.afs.collection('subtasks').doc(`${id_subtask}`).update({
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

}
