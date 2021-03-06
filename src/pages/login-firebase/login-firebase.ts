import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
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
    public afAuth: AngularFireAuth, public alertCtrl: AlertController,
    public toastCtrl: ToastController) {

    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  login(user: User): void{

    let _this = this;

    const alert = this.alertCtrl.create({
      title: 'Atenção',
      message: "Você precisa verificar seu e-mail antes do login! Caso queira receber o e-mail de verificação novamente, clique no botão de Reenviar e-mail",
      buttons: [
        {
          text: 'Reenviar e-mail',
          handler: data => {
            this.authService.sendEmailVerification();
            }
          },
          {
            text: 'Ok',
            role: 'cancel'
          }
        ]
    });

    const toast = this.toastCtrl.create({
      message: 'Erro ao se logar! Verifique se inseriu seu e-mail/senha corretamente',
      duration: 5000,
      position: 'top'
    });

    this.authService.login(user).then(function(user){
      if(user){

        _this.emailVerified = firebase.auth().currentUser.emailVerified;

        //firebase.auth().onAuthStateChanged(user=>{
          if(_this.emailVerified == true){
            _this.navCtrl.setRoot(TabsPage);
          }else{
            alert.present();
            _this.navCtrl.setRoot('LoginFirebasePage');
          }
        //})
      }else{
        console.log("Usuário não existe!");
      }
    }).catch((e)=>{
      toast.present();
    });
  }

  resetPassword(): void{

    const toast = this.toastCtrl.create({
      message: 'Verifique seu e-mail!',
      duration: 3000,
      position: 'top'
    });

    const alert = this.alertCtrl.create({
      title: 'Redefinir senha',
      message: 'Digite seu e-mail cadastrado para receber o link',
      inputs: [
        {
          name: 'email',
          placeholder: 'E-mail'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: data => {
            this.authService.resetPassword(data.email).then(()=>{
              toast.present();
            }).catch(()=>{
              toast.setMessage('Erro: E-mail não cadastrado');
              toast.present();
            })
          }
        }
      ]
    });
    alert.present();
  }

  openRegister(){
    this.navCtrl.push('RegisterFirebasePage');
  }

}
