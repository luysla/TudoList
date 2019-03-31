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
}
