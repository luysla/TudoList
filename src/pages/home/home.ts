import { Component } from '@angular/core';
import { NavController, Platform, App, IonicPage } from 'ionic-angular';

import { AuthService } from './../../providers/auth-service';

@IonicPage({
  name: 'HomePage',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public authService: AuthService,
    public platform: Platform, public app: App) {
  }

  logout(): void{
    this.authService.logout().then(()=>{
      this.platform.exitApp();
      this.app.getRootNavs()[0].setRoot('LoginFirebasePage');
    }).catch((e)=>{
      alert("Erro ao sair do aplicativo!");
    })
  }

}
