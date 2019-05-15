import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

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
    public formBuilder: FormBuilder, public authService: AuthService,
    public toastCtrl: ToastController) {

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

    let _this = this;

    const toast = this.toastCtrl.create({
      message: 'Cadastro criado!',
      position: 'top',
      duration: 3000
    });

    this.authService.newUser(user).then(()=>{
      profile.user_uid = firebase.auth().currentUser.uid;
      _this.authService.setProfile(profile);

      _this.authService.sendEmailVerification();
      
      toast.setMessage('Verifique seu e-mail antes de se logar!');
      toast.present();

      _this.navCtrl.pop();

    }).catch(function(error: firebase.FirebaseError){
      if(error.code === 'auth/weak-password'){
        toast.setMessage('Senha muito fraca :/');
        toast.present();
      }if(error.code === 'auth/invalid-email'){
        toast.setMessage('E-mail inválido :#');
        toast.present();
      }else{
        toast.setMessage('Esse e-mail já possui conta :O');
        toast.present();
      }
    })
  }

}
