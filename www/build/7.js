webpackJsonp([7],{

/***/ 1133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterFirebasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_auth__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterFirebasePage = /** @class */ (function () {
    function RegisterFirebasePage(navCtrl, navParams, formBuilder, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.user = {};
        this.profile = {};
        var emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.registerForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(emailRegex)])],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]],
            password_confirmation: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
    }
    RegisterFirebasePage.prototype.registerUser = function (user, profile) {
        var _this = this;
        this.authService.newUser(user).then(function () {
            profile.user_uid = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.uid;
            _this.authService.setProfile(profile);
            _this.authService.sendEmailVerification();
            alert("Conta criada com sucesso!");
            _this.navCtrl.pop();
        }).catch(function (e) {
            alert("Erro ao criar conta: " + e);
        });
    };
    RegisterFirebasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-firebase',template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/register-firebase/register-firebase.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Cadastro</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form style="margin-top: 100px;" [formGroup]="registerForm">\n    <ion-item>\n      <ion-label>\n        <ion-icon name="person"></ion-icon>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="profile.name" [formControl]="registerForm.controls[\'name\']" placeholder="Nome*" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <ion-icon name="at"></ion-icon>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="profile.username" [formControl]="registerForm.controls[\'username\']" placeholder="Nome de usuário*" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <ion-icon name="mail"></ion-icon>\n      </ion-label>\n      <ion-input type="email" [(ngModel)]="user.email" [formControl]="registerForm.controls[\'email\']" placeholder="E-mail*" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <ion-icon name="lock"></ion-icon>\n      </ion-label>\n      <ion-input type="password" [(ngModel)]="user.password" [formControl]="registerForm.controls[\'password\']" placeholder="Senha*" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <ion-icon name="lock"></ion-icon>\n      </ion-label>\n      <ion-input type="password" [(ngModel)]="user.password_confirmation" [formControl]="registerForm.controls[\'password_confirmation\']" placeholder="Confirme sua senha*" required></ion-input>\n      </ion-item>\n      <p style="color:red" *ngIf="registerForm.get(\'password\').value != registerForm.get(\'password_confirmation\').value">*Atenção: As senhas não coincidem</p>\n    <br>\n    <button ion-button class="bt-default" type="submit" full item-right (click)="registerUser(user,profile)" [disabled]="!registerForm.valid">Pronto :)</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/register-firebase/register-firebase.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */]])
    ], RegisterFirebasePage);
    return RegisterFirebasePage;
}());

//# sourceMappingURL=register-firebase.js.map

/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFirebasePageModule", function() { return RegisterFirebasePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_firebase__ = __webpack_require__(1133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterFirebasePageModule = /** @class */ (function () {
    function RegisterFirebasePageModule() {
    }
    RegisterFirebasePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_firebase__["a" /* RegisterFirebasePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_firebase__["a" /* RegisterFirebasePage */]),
            ],
        })
    ], RegisterFirebasePageModule);
    return RegisterFirebasePageModule;
}());

//# sourceMappingURL=register-firebase.module.js.map

/***/ })

});
//# sourceMappingURL=7.js.map