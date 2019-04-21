import { AuthService } from './../../providers/auth-service';
import { Profile } from './../../models/profile';
import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Rx';

import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage({
  name: 'UserProfilePage',
  segment: 'perfil'
})
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  userCollection: AngularFirestoreCollection<any[]>;
  userDoc: Observable<any[]>;

  edit: boolean = false;

  filePhoto: File;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afs: AngularFirestore, public afAuth: AngularFireAuth,
    public authService: AuthService, public cdr: ChangeDetectorRef) {

    this.afAuth.authState.subscribe(auth=>{
      this.userCollection = this.afs.collection('users',ref => ref.where('user_uid','==',auth.uid));
      this.userDoc = this.userCollection.valueChanges();
    })

  }

  showEdit(): void{
    this.edit = !this.edit;
    this.cdr.detectChanges();
  }

  uploadPhoto(event){
    this.filePhoto = event.target.files[0];
  }

  saveChange(profile: Profile): void{
    let _this = this;

    if(this.filePhoto){
      let uploadTask = this.authService.setProfilePhoto(this.filePhoto,profile.user_uid);

       uploadTask.on('state_changed',(snapshot)=>{

      },(error:Error)=>{
        alert('Erro ao salva foto!' + error);
      }, ()=>{
       uploadTask.snapshot.ref.getDownloadURL().then(function(url){
        _this.afs.collection(`users`).doc(`${profile.user_uid}`).update({
          photo: url
        });
       });
      });
    }

    this.edit = !this.edit;
    this.cdr.detectChanges();
  }


}
