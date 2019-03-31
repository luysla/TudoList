import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public afAuth: AngularFireAuth) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

  ionViewDidLoad(){
    const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.rootPage = 'HomePage';
        unsubscribe();
      }else{
        this.rootPage = 'LoginFirebasePage';
        unsubscribe();
      }
    })
  }

}
