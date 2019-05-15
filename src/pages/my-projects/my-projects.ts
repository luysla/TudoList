import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Rx';
import { ProjectService } from '../../providers/project-service';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@IonicPage({
  name: 'MyProjectsPage',
  segment: 'meus-projetos'
})
@Component({
  selector: 'page-my-projects',
  templateUrl: 'my-projects.html',
})
export class MyProjectsPage {
  
  edit: boolean =  false;
  
  projectCollection: AngularFirestoreCollection<any[]>;
  projects: Observable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public cdr: ChangeDetectorRef, public afs: AngularFirestore,
    public projectService: ProjectService, public alertCtrl: AlertController) {
      
      const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
        if(user){
          this.projectCollection = this.afs.collection(`projects`,ref => ref.where('user_admin', '==', user.uid));
          this.projects = this.projectCollection.valueChanges();
          this.cdr.detectChanges();
          unsubscribe();
        }
      });
    }
    
    viewEdit(): void{
      this.edit = !this.edit;
      this.cdr.detectChanges();
    }
    
    openListPage(id_project: string, project_name: string): void{
      this.navCtrl.push('ListsPage',{
        idProject: id_project,
        nameProject: project_name
      });
    }
    
    editProject(id_project: string): void{
      const alert = this.alertCtrl.create({
        title: 'Editar',
        inputs: [
          {
            name: 'new_project_name',
            placeholder: 'Novo nome do projeto',
            type: 'text'
          },
          {
            name: 'new_description_project',
            placeholder: 'Nova descrição',
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
              this.projectService.editProject(id_project,data.new_project_name, data.new_description_project);
            }
          }]
        });
        alert.present();
      }
      
      deleteProject(id_project: string, project_name: string): void{
        
        let alertDelete = this.alertCtrl.create({
          subTitle: "Projeto deletado!",
          buttons: ['OK']
        })
        
        let alert = this.alertCtrl.create({
          title: 'Tem certeza que quer excluir esse projeto?',
          message: 'Ao excluir, todos os dados armazenados até agora vão ser perdidos!',
          inputs: [
            {
              name: 'project_name',
              placeholder: 'Digite o nome do projeto pra continuar'
            },
          ],
          buttons: [
            {
              text: 'Excluir',
              handler: (data) => {
                
                if(data.project_name == project_name){
                  this.projectService.deleteProject(id_project).then(()=>{
                    alertDelete.present();
                  }).catch((e)=>{
                    alertDelete.setSubTitle("Erro ao excluir o projeto!");
                    alertDelete.present();
                  })
                }else{
                  alertDelete.setSubTitle("O texto digitado não corresponde ao nome do projeto!");
                  alertDelete.present();
                }
              },
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
