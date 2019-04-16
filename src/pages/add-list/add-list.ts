import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFirestore } from 'angularfire2/firestore';

import { ListService } from './../../providers/list-service';

import { List } from '../../models/list';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage({
  name: 'AddListPage',
  segment: 'nova-lista'
})
@Component({
  selector: 'page-add-list',
  templateUrl: 'add-list.html',
})
export class AddListPage {

  id_project: string;

  list = {} as List;

  listForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public listService: ListService,
    public afs: AngularFirestore, public formBuilder: FormBuilder) {

    this.id_project = this.navParams.get('idProject');

    this.listForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    })

  }

  addList(list: List): void{
    this.listService.newList(list).then((doc)=>{

      this.afs.collection(`lists`).doc(`${doc.id}`).update({
        id_list: doc.id,
        id_project: this.id_project
      })

      alert("Lista criada com sucesso!");
      this.navCtrl.pop();
    }).catch((e)=>{
      console.log("Erro ao criar lista" + e);
    })
  }

}




