import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './../../providers/auth-service';

import { User } from '../../models/user';

import { TabsPage } from '../tabs/tabs';

import * as firebase from 'firebase';
import 'firebase/auth';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage({
  name: 'LoginFirebasePage',
  segment: 'login'
})
@Component({
  selector: 'page-login-firebase',
  templateUrl: 'login-firebase.html',
})
export class LoginFirebasePage {

  user = {} as User;

  loginForm: FormGroup;

  emailVerified: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public authService: AuthService,
    public afAuth: AngularFireAuth) {

    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  login(user: User): void{

    let _this = this;

    this.authService.login(user).then(function(user){
      if(user){
        firebase.auth().onAuthStateChanged(user=>{
          if(user.emailVerified == true){
            _this.navCtrl.setRoot(TabsPage);
          }else{
            alert("Você precisa verificar seu e-mail antes de se logar!");
            _this.navCtrl.setRoot('LoginFirebasePage');
          }
        })
      }else{
        alert("Usuário não existe!");
      }
    }).catch((e)=>{
      alert("Erro ao se logar!");
    });
  }

  resetPassword(email: string): void{
    this.authService.resetPassword(email);
  }

  openRegister(){
    this.navCtrl.push('RegisterFirebasePage');
  }

}
