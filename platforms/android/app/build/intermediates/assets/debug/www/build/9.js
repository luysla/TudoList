webpackJsonp([9],{

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFirebasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_auth__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginFirebasePage = /** @class */ (function () {
    function LoginFirebasePage(navCtrl, navParams, formBuilder, authService, afAuth, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.user = {};
        var emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.loginForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(emailRegex)])],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]]
        });
    }
    LoginFirebasePage.prototype.login = function (user) {
        var _this_1 = this;
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Atenção',
            message: "Você precisa verificar seu e-mail antes do login! Caso queira receber o e-mail de verificação novamente, clique no botão de Reenviar e-mail",
            buttons: [
                {
                    text: 'Reenviar e-mail',
                    handler: function (data) {
                        _this_1.authService.sendEmailVerification();
                    }
                },
                {
                    text: 'Ok',
                    role: 'cancel'
                }
            ]
        });
        this.authService.login(user).then(function (user) {
            if (user) {
                _this.emailVerified = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.emailVerified;
                //firebase.auth().onAuthStateChanged(user=>{
                if (_this.emailVerified == true) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    alert.present();
                    _this.navCtrl.setRoot('LoginFirebasePage');
                }
                //})
            }
            else {
                console.log("Usuário não existe!");
            }
        }).catch(function (e) {
            console.log("Erro ao se logar!");
        });
    };
    LoginFirebasePage.prototype.resetPassword = function (email) {
        this.authService.resetPassword(email);
    };
    LoginFirebasePage.prototype.openRegister = function () {
        this.navCtrl.push('RegisterFirebasePage');
    };
    LoginFirebasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-firebase',template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/login-firebase/login-firebase.html"*/'<ion-content padding>\n  <ion-img class="logo" src="./../../assets/imgs/logo-app.png"></ion-img>\n\n  <form [formGroup]="loginForm">\n    <ion-item>\n      <ion-label>\n        <ion-icon name="mail"></ion-icon>\n      </ion-label>\n      <ion-input type="email" [(ngModel)]="user.email" formControlName="email" placeholder="E-mail" required></ion-input>\n    </ion-item>\n\n    <br>\n\n    <ion-item>\n      <ion-label>\n        <ion-icon name="lock"></ion-icon>\n      </ion-label>\n      <ion-input type="password" [(ngModel)]="user.password" formControlName="password" placeholder="Senha" required></ion-input>\n    </ion-item>\n\n    <a (click)="resetPassword()"><p style="text-align: right; text-decoration: underline">Esqueceu sua senha?</p></a>\n\n    <button ion-button class="bt-default" full type="submit" (click)="login(user)" [disabled]="!loginForm.valid">Entrar</button>\n  </form>\n\n  <p class="text-pag">Não possui conta? <a (click)="openRegister()" style="text-decoration: underline">Cadastre-se</a></p>\n\n</ion-content>\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/login-firebase/login-firebase.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginFirebasePage);
    return LoginFirebasePage;
}());

//# sourceMappingURL=login-firebase.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFirebasePageModule", function() { return LoginFirebasePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_firebase__ = __webpack_require__(1114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginFirebasePageModule = /** @class */ (function () {
    function LoginFirebasePageModule() {
    }
    LoginFirebasePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_firebase__["a" /* LoginFirebasePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_firebase__["a" /* LoginFirebasePage */]),
            ],
        })
    ], LoginFirebasePageModule);
    return LoginFirebasePageModule;
}());

//# sourceMappingURL=login-firebase.module.js.map

/***/ })

});
//# sourceMappingURL=9.js.map