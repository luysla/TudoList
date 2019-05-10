import { ListService } from './../../providers/list-service';
import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Observable } from 'rxjs/Rx';

import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import { GroupService } from './../../providers/group-service';


@IonicPage({
  name: 'ListsPage',
  segment: 'listas'
})
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {

  edit: boolean = false;

  id_project: string;
  project_name: string;

  listCollection: AngularFirestoreCollection<any[]>;
  lists: Observable<any[]>;

  groupCollection: AngularFirestoreCollection<any[]>;
  groups: Observable<any[]>;

  view: string = 'lists';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afs: AngularFirestore, public groupService: GroupService,
    public alertCtrl: AlertController, public cdr: ChangeDetectorRef,
    public listService: ListService) {

    this.id_project = this.navParams.get('idProject');
    this.project_name = this.navParams.get('nameProject');

    this.listCollection = this.afs.collection('lists', ref => ref.where('id_project', '==', this.id_project));
    this.lists = this.listCollection.valueChanges();

    this.groupCollection = this.afs.collection('groups', ref => ref.where('id_project', '==', this.id_project));
    this.groups = this.groupCollection.valueChanges();

  }

  openAddList(): void{
    this.navCtrl.push('AddListPage',{
      idProject: this.id_project
    });
  }

  openSearchUser(id_group: string): void{
    this.navCtrl.push('SearchUserPage',{
      idProjet: this.id_project,
      idGroup: id_group
    });
  }

  openAddGroup(): void{
    this.navCtrl.push('AddGroupPage',{
      idProject: this.id_project
    })
  }

  openTaskPage(id_list: string): void{
    this.navCtrl.push('TasksPage',{
      idList: id_list,
      idProject: this.id_project
    });
  }

  showEdit(){
    this.edit = !this.edit;
    this.cdr.detectChanges();
  }

  editList(idList: string): void{
    const alert = this.alertCtrl.create({
      title: 'Editar',
      inputs: [
        {
          name: 'new_name_list',
          placeholder: 'Novo nome da lista',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Ok",
          handler: data =>{
            this.listService.editList(idList,data.new_name_list);
          }
        }]
    });
    alert.present();
  }

  deleteList(idList: string, listName: string): void{

    let alertDelete = this.alertCtrl.create({
      subTitle: "Lista deletada!",
      buttons: ['OK']
    })

    let alert = this.alertCtrl.create({
      title: 'Tem certeza que quer excluir essa lista?',
      message: 'Ao excluir, todos os dados armazenados até agora vão ser perdidos!',
      inputs: [
        {
          name: 'list_name',
          placeholder: 'Digite o nome da lista pra continuar'
        },
      ],
      buttons: [
        {
          text: 'Excluir',
          handler: (data) => {

            if(data.list_name == listName){
              this.listService.deleteList(idList).then(()=>{
                alertDelete.present();
              }).catch((e)=>{
                alertDelete.setSubTitle("Erro ao excluir lista!");
                alertDelete.present();
              })
            }
          }
          },
      {
        text: 'Cancelar',
        role: 'cancel'
      }
      ]
    })
    alert.present();
  }

  deleteGroup(id_group: string): void{

    let alertDelete = this.alertCtrl.create({
      subTitle: "Grupo deletado!",
      buttons: ['OK']
    })

    let alert = this.alertCtrl.create({
      title: 'Tem certeza que quer excluir esse grupo?',
      buttons: [
        {
          text: 'Excluir',
          handler: (data) => {

              this.groupService.deleteGroup(id_group).then(()=>{
                alertDelete.present();
              }).catch((e)=>{
                alertDelete.setSubTitle("Erro ao excluir grupo!");
                alertDelete.present();
              })
            }
          },
        {
        text: 'Cancelar',
        role: 'cancel'
        }
      ]
    })
    alert.present();
  }
}


