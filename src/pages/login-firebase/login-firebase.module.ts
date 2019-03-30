import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginFirebasePage } from './login-firebase';

@NgModule({
  declarations: [
    LoginFirebasePage,
  ],
  imports: [
    IonicPageModule.forChild(LoginFirebasePage),
  ],
})
export class LoginFirebasePageModule {}
