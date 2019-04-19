import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GroupService } from './../../providers/group-service';

import { AngularFirestore } from 'angularfire2/firestore';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Group } from '../../models/group';

@IonicPage({
  name: 'AddGroupPage',
  segment: 'novo-grupo'
})
@Component({
  selector: 'page-add-group',
  templateUrl: 'add-group.html',
})
export class AddGroupPage {

  groupForm: FormGroup;

  group = {} as Group;

  id_project: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public groupService: GroupService, public afs: AngularFirestore,
    public formBuilder: FormBuilder) {

      this.groupForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]]
      })

      this.id_project = this.navParams.get('idProject');
    }

    addGroup(group: Group): void{

      this.groupService.addGroup(group).then((doc)=>{

        this.afs.collection('groups').doc(`${doc.id}`).update({
          id_group: doc.id,
          id_project: this.id_project
        });

        console.log('Grupo criado com sucesso!');

        this.navCtrl.push('SearchUserPage',{
          idProject: this.id_project
        });
      }).catch((e)=>{
        console.log('Erro ao criar grupo!' + e);
      })
    }

  }

