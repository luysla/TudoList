webpackJsonp([14],{

/***/ 1125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_project_service__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_auth__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddProjectPage = /** @class */ (function () {
    function AddProjectPage(navCtrl, navParams, formBuilder, projectService, afs, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.projectService = projectService;
        this.afs = afs;
        this.toastCtrl = toastCtrl;
        this.project = {};
        this.projectForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(3)]],
            description: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(3)]]
        });
    }
    AddProjectPage.prototype.addProject = function (project) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Projeto criado com sucesso!',
            duration: 3000,
            position: 'top'
        });
        project.user_admin = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.projectService.newProject(project).then(function (doc) {
            _this.afs.collection('projects').doc("" + doc.id).update({
                id_project: doc.id,
                date_hour_create: __WEBPACK_IMPORTED_MODULE_7_moment___default()().format('DD/MM/YYYY, h:mm:ss a'),
                star: 0
            });
            _this.idProject = doc.id;
            toast.present();
            _this.navCtrl.pop();
        }).catch(function (e) {
            toast.setMessage("Erro ao criar projeto!");
            toast.present();
        });
    };
    AddProjectPage.prototype.openSearchUser = function () {
        this.navCtrl.push('SearchUserPage');
    };
    var _a, _b, _c, _d, _e, _f;
    AddProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-add-project',template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/add-project/add-project.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Novo projeto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="projectForm">\n    <ion-item>\n      <ion-label stacked>Nome do projeto*</ion-label>\n      <ion-input type="text" [(ngModel)]="project.name" formControlName="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Descrição*</ion-label>\n      <ion-input type="text" [(ngModel)]="project.description" formControlName="description"></ion-input>\n    </ion-item>\n\n    <br>\n\n    <button ion-button class="bt-default" full (click)="addProject(project)" [disabled]="!projectForm.valid">Ok</button>\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/add-project/add-project.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__providers_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_project_service__["a" /* ProjectService */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["AngularFirestore"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["AngularFirestore"]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */]) === "function" ? _f : Object])
    ], AddProjectPage);
    return AddProjectPage;
}());

//# sourceMappingURL=add-project.js.map

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectPageModule", function() { return AddProjectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_project__ = __webpack_require__(1125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddProjectPageModule = /** @class */ (function () {
    function AddProjectPageModule() {
    }
    AddProjectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_project__["a" /* AddProjectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_project__["a" /* AddProjectPage */]),
            ],
        })
    ], AddProjectPageModule);
    return AddProjectPageModule;
}());

//# sourceMappingURL=add-project.module.js.map

/***/ })

});
//# sourceMappingURL=14.js.map