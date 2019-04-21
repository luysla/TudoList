import { Injectable, forwardRef, NgModule } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { User } from './../models/user';
import { Profile } from './../models/profile';

import * as firebase from 'firebase';
import 'firebase/auth';

@NgModule({providers: [forwardRef(() => AuthService)]})
export class AuthServiceModule {
}

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore){
  }

  newUser(user: User): Promise<any>{
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  setProfile(profile: Profile): Promise<any>{
    return this.afs.doc(`users/${profile.user_uid}`).set(profile);
  }

  setProfilePhoto(file: File,user_uid: string): firebase.storage.UploadTask {
    const ref = firebase.storage().ref();
    return ref.child(`/users/${user_uid}`).put(file);
  }

  login(user: User): Promise<any>{
    return this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
  }

  logout(): Promise<any>{
    return this.afAuth.auth.signOut();
  }

  sendEmailVerification(){
    return firebase.auth().onAuthStateChanged(function(user) {
      user.sendEmailVerification();
    });
  }

  resetPassword(email: string): Promise<any>{
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }


}
