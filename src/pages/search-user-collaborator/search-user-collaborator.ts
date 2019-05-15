import { OnInit, Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Subject, Observable } from 'rxjs/Rx';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { TaskService } from '../../providers/task-service';
import { Profile } from '../../models/profile';

@IonicPage({
  name: 'SearchUserCollaboratorPage',
  segment: 'pesquisar-usuario-colaborador'
})
@Component({
  selector: 'page-search-user-collaborator',
  templateUrl: 'search-user-collaborator.html',
})
export class SearchUserCollaboratorPage implements OnInit {

  search: boolean = false;

  searchTerm: string;

  usersSearch: any;

  startAt = new Subject();
  endAt = new Subject();

  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();

  usersCollection: AngularFirestoreCollection<any[]>;
  users: Observable<any[]>;

  groupCollection: AngularFirestoreCollection<any[]>;
  group: Observable<any[]>;

  id_task: string;
  id_project: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afs: AngularFirestore, public taskService: TaskService,
    public cdr: ChangeDetectorRef, public toastCtrl: ToastController) {

    this.id_task = this.navParams.get('idTask');
    this.id_project = this.navParams.get('idProject');

    this.groupCollection = this.afs.collection('groups', ref => ref.where('id_project','==',this.id_project));
    this.group = this.groupCollection.valueChanges();

  }

  ngOnInit(){
    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery(value[0], value[1]).subscribe((users) => {
        this.usersSearch = users;
      })
    })
  }

  firequery(start,end): Observable<any>{
    this.usersCollection = this.afs.collection(`users`,ref =>
      ref
      .orderBy(`username`)
      .limit(5)
      .startAt(start)
      .endAt(end))

      return this.users =  this.usersCollection.valueChanges();
  }

  getItem(ev: any): Observable<any>{
    let q = ev.target.value;
    if (q != '' && q != undefined) {
      this.startAt.next(q);
      this.endAt.next(q + "\uf8ff");
    }else{
      this.usersCollection = this.afs.collection(`users`);
      return this.users = this.usersCollection.valueChanges();
    }
  }

  addCollaborator(user: Profile): void{
    const toast = this.toastCtrl.create({
      message: 'Colaborador adicionado com sucesso!',
      duration: 3000,
      position: 'top'
    });
    this.taskService.addUserCollaborator(this.id_task,user).then(()=>{
      toast.present();
      this.navCtrl.pop();
    }).catch((e)=>{
      toast.setMessage("Erro ao adicionar colaborador");
      toast.present();
    })
  }

  showSearch(): void{
    this.search = !this.search;
    this.cdr.detectChanges();
  }
}


