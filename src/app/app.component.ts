import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
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

  rootPage: any;

  userCollection: AngularFirestoreCollection<any[]>;
  userDoc: Observable<any[]>;

  pages: Array<{name: string, component: any, icon: any, index: number}>;
  pagesConfig: Array<{name: string, component: any, icon: any, index: number}>;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public afAuth: AngularFireAuth,public app: App, public afs: AngularFirestore,
    public authService: AuthService) {

      const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
        if(user){
          //this.app.getRootNavs()[0].setRoot(TabsPage);
          this.nav.setRoot(TabsPage);
          unsubscribe();
        }else{
          //this.app.getRootNavs()[0].setRoot('LoginFirebasePage');
          this.nav.setRoot('LoginFirebasePage');
          unsubscribe();
        }
      })

      firebase.auth().onAuthStateChanged(user=>{
        if(user){
          this.userCollection = this.afs.collection('users',ref => ref.where('user_uid','==',user.uid));
          this.userDoc = this.userCollection.valueChanges();    
        }
      })

      this.pages = [
        { name: 'Home'  , component: TabsPage, icon: 'md-home', index: 0 },
        { name: 'Minhas tarefas', component: 'MyTasksPage', icon: 'list', index: 4 },
        { name: 'Meus projetos', component: 'HomePage', icon: 'md-folder-open', index: 5 }
      ];

      this.pagesConfig = [
        { name: 'Configurações', component: 'UserProfilePage', icon: 'settings', index: 3 }
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
      let params = {};
      if (page.index) {
        params = { index: page.index };
      }

      if (this.nav.getActiveChildNav() && page.index != undefined) {
        this.nav.getActiveChildNav().select(page.index);
      } else {
        // Tabs are not active, so reset the root page
        // In this case: moving to or from SpecialPage
        this.nav.setRoot(page.component, params);
      }
      /* this.nav.setRoot(TabsPage, {componentFromNavParams: page.component});
      //this.nav.setRoot(page.component);
      console.log(page.nome); */
    }


  }
