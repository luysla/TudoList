import { User } from '../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    public formBuilder: FormBuilder) {

    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginFirebasePage');
  }

  resetPassword(){

  }

  openRegister(){
    this.navCtrl.push('RegisterFirebasePage');
  }

}
