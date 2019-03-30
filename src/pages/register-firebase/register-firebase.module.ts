import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterFirebasePage } from './register-firebase';

@NgModule({
  declarations: [
    RegisterFirebasePage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterFirebasePage),
  ],
})
export class RegisterFirebasePageModule {}
