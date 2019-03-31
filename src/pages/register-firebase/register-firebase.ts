import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../../models/user';
import { Profile } from '../../models/profile';

import { AuthService } from '../../providers/auth-service';

import * as firebase from 'firebase';
import 'firebase/auth';

@IonicPage({
  name: 'RegisterFirebasePage',
  segment: 'cadastro'
})
@Component({
  selector: 'page-register-firebase',
  templateUrl: 'register-firebase.html',
})
export class RegisterFirebasePage {

  user = {} as User;
  profile = {} as Profile;

  registerForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public authService: AuthService) {

      let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

      this.registerForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password_confirmation: ['', [Validators.required]]
      })

    }

  registerUser(user: User, profile: Profile){

    this.authService.newUser(user).then(()=>{

      profile.user_uid = firebase.auth().currentUser.uid;
      this.authService.setProfile(profile);

      this.authService.sendEmailVerification();

      alert("Conta criada com sucesso!");
      this.navCtrl.pop();

    }).catch((e)=>{
      alert("Erro ao criar conta: " + e);
    })
  }

}
