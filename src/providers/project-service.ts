import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable, forwardRef, NgModule } from '@angular/core';

import { Project } from './../models/project';

@NgModule({providers: [forwardRef(() => ProjectService)]})
export class ProjectServiceModule {
}

@Injectable()
export class ProjectService {

  constructor(public afs: AngularFirestore){

  }

  newProject(project: Project): Promise<any>{
    return this.afs.collection(`projects`).add(project);
  }

  starProject(id_project: string, flag: number): Promise<any>{
    return this.afs.collection(`projects`).doc(`${id_project}`).update({
      star: flag
    });
  }

  editProject(id_project: string, new_name: string, new_description: string): Promise<any>{
    return this.afs.collection(`projects`).doc(`${id_project}`).update({
      name: new_name,
      description: new_description
    });
  }

  deleteProject(id_project: string): Promise<any>{
    return this.afs.collection(`projects`).doc(`${id_project}`).delete();
  }

}
