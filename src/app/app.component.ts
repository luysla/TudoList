import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = 'LoginFirebasePage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public afAuth: AngularFireAuth,public app: App) {

      const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
        if(user){
          this.app.getRootNavs()[0].setRoot(TabsPage);
          console.log("Usuario logado",user);
          unsubscribe();
        }else{
          console.log("Nenhum usuário logado!");
          this.app.getRootNavs()[0].setRoot('LoginFirebasePage');
          unsubscribe();
        }
      })

      platform.ready().then(() => {
        statusBar.styleDefault();
        splashScreen.hide();
      });

    }


  }
