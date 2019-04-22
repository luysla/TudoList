import { Component,ViewChild } from '@angular/core';
import { Platform, App, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './../providers/auth-service';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginFirebasePage';

  userCollection: AngularFirestoreCollection<any[]>;
  userDoc: Observable<any[]>;

  pages: Array<{name: string, component: any, icon: any}>;
  pagesConfig: Array<{name: string, component: any, icon: any}>;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public afAuth: AngularFireAuth,public app: App, public afs: AngularFirestore,
    public authService: AuthService) {

      const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
        if(user){
          this.app.getRootNavs()[0].setRoot(TabsPage);
          this.userCollection = this.afs.collection('users',ref => ref.where('user_uid','==',user.uid));
          this.userDoc = this.userCollection.valueChanges();
          unsubscribe();
        }else{
          this.app.getRootNavs()[0].setRoot('LoginFirebasePage');
          unsubscribe();
        }
      })

      this.pages = [
        { name: 'Home'  , component: TabsPage, icon: 'md-home' },
        { name: 'Minhas tarefas', component: 'HomePage', icon: 'list' },
        { name: 'Meus projetos', component: 'HomePage', icon: 'md-folder-open' }
      ];

      this.pagesConfig = [
        { name: 'Configurações', component: 'UserProfilePage', icon: 'settings' }
      ];

      platform.ready().then(() => {
        statusBar.styleDefault();
        splashScreen.hide();
      });

    }

    logout(): void{
      this.authService.logout().then(()=>{
        this.platform.exitApp();
        this.app.getRootNavs()[0].setRoot('LoginFirebasePage');
      }).catch((e)=>{
        alert("Erro ao sair do aplicativo!");
      })
    }

    openPage(page): void{
      this.nav.setRoot(page.component);
      console.log(page.nome);
    }


  }
