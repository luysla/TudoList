webpackJsonp([4],{

/***/ 1121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_auth__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(navCtrl, navParams, afs, afAuth, authService, cdr) {
        var _this_1 = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.afAuth = afAuth;
        this.authService = authService;
        this.cdr = cdr;
        this.edit = false;
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this_1.userCollection = _this_1.afs.collection('users', function (ref) { return ref.where('user_uid', '==', user.uid); });
                _this_1.userDoc = _this_1.userCollection.valueChanges();
                _this_1.cdr.detectChanges();
                unsubscribe();
            }
        });
    }
    UserProfilePage.prototype.showEdit = function () {
        this.edit = !this.edit;
        this.cdr.detectChanges();
    };
    UserProfilePage.prototype.uploadPhoto = function (event) {
        this.filePhoto = event.target.files[0];
    };
    UserProfilePage.prototype.saveChange = function (profile) {
        var _this = this;
        if (this.filePhoto) {
            var uploadTask_1 = this.authService.setProfilePhoto(this.filePhoto, profile.user_uid);
            uploadTask_1.on('state_changed', function (snapshot) {
            }, function (error) {
                alert('Erro ao salva foto!' + error);
            }, function () {
                uploadTask_1.snapshot.ref.getDownloadURL().then(function (url) {
                    _this.afs.collection("users").doc("" + profile.user_uid).update({
                        photo: url
                    });
                });
            });
        }
        this.edit = !this.edit;
        this.cdr.detectChanges();
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-user-profile',template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/user-profile/user-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Perfil</ion-title>\n    <ion-buttons end>\n      <button ion-button *ngIf="edit==false" (click)="showEdit()" icon-only>\n        <ion-icon name="create" color="light"></ion-icon>\n      </button>\n\n      <button ion-button *ngIf="edit==true" (click)="showEdit()" icon-only>\n        <ion-icon name="close" color="light"></ion-icon>\n      </button>\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="screen" *ngFor="let user of userDoc | async">\n    <ion-avatar>\n      <img class="round-perfil" [src]="user.photo || \'../../../../assets/imgs/no-photo.jpg\'">\n    </ion-avatar>\n\n    <br>\n\n    <div *ngIf="edit==false">\n      <h2 text-center>{{ user.name }}</h2>\n      <p text-center>@{{ user.username }}</p>\n    </div>\n\n    <div *ngIf="edit==true">\n\n      <p>Escolha uma nova foto:</p>\n\n      <ion-item>\n        <ion-icon name="image" item-left></ion-icon>\n        <input type="file" (change)="uploadPhoto($event)">\n      </ion-item>\n\n      <br>\n\n    </div>\n\n    <button ion-button class="bt-default" *ngIf="edit==true" (click)="saveChange(user)" full>Salvar</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/user-profile/user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile__ = __webpack_require__(1121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserProfilePageModule = /** @class */ (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */]),
            ],
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());

//# sourceMappingURL=user-profile.module.js.map

/***/ })

});
//# sourceMappingURL=4.js.map