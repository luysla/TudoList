webpackJsonp([16],{

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_group_service__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_auth__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddGroupPage = /** @class */ (function () {
    function AddGroupPage(navCtrl, navParams, groupService, afs, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.groupService = groupService;
        this.afs = afs;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.group = {};
        this.groupForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(3)]]
        });
        this.id_project = this.navParams.get('idProject');
    }
    AddGroupPage.prototype.addGroup = function (group) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Grupo criado com sucesso!',
            duration: 3000,
            position: 'top'
        });
        this.groupService.addGroup(group).then(function (doc) {
            _this.afs.collection('groups').doc("" + doc.id).update({
                id_group: doc.id,
                id_project: _this.id_project,
                user_admin: __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser.uid
            });
            toast.present();
            _this.navCtrl.push('SearchUserPage', {
                idProject: _this.id_project,
                idGroup: doc.id
            });
        }).catch(function (e) {
            toast.setMessage("Erro ao criar grupo! Tente novamente...");
            toast.present();
        });
    };
    AddGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-group',template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/add-group/add-group.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Novo grupo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="groupForm">\n    <ion-item>\n      <ion-label stacked>Nome do grupo*</ion-label>\n      <ion-input type="text" [(ngModel)]="group.name" formControlName="name"></ion-input>\n    </ion-item>\n\n    <br>\n\n    <button ion-button class="bt-default" full (click)="addGroup(group)" [disabled]="!groupForm.valid">Ok</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/add-group/add-group.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_group_service__["a" /* GroupService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AddGroupPage);
    return AddGroupPage;
}());

//# sourceMappingURL=add-group.js.map

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupPageModule", function() { return AddGroupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_group__ = __webpack_require__(1123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddGroupPageModule = /** @class */ (function () {
    function AddGroupPageModule() {
    }
    AddGroupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_group__["a" /* AddGroupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_group__["a" /* AddGroupPage */]),
            ],
        })
    ], AddGroupPageModule);
    return AddGroupPageModule;
}());

//# sourceMappingURL=add-group.module.js.map

/***/ })

});
//# sourceMappingURL=16.js.map