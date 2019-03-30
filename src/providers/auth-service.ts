import { Injectable, forwardRef, NgModule } from '@angular/core';

@NgModule({providers: [forwardRef(() => AuthService)]})
export class AuthServiceModule {
}

@Injectable()
export class AuthService {

}
