import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './../../providers/auth-service';

import { User } from '../../models/user';

import { TabsPage } from '../tabs/tabs';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public authService: AuthService) {

    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  login(user: User): void{
    this.authService.login(user).then(()=>{
      this.navCtrl.setRoot(TabsPage);
    }).catch((e)=>{
      alert("Erro ao se logar!");
    })
  }

  resetPassword(email: string): void{
    this.authService.resetPassword(email);
  }

  openRegister(){
    this.navCtrl.push('RegisterFirebasePage');
  }

}
