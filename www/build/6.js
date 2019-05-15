webpackJsonp([6],{

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_project_service__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_auth__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StarProjectsPage = /** @class */ (function () {
    function StarProjectsPage(navCtrl, navParams, afs, projectService, cdr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.projectService = projectService;
        this.cdr = cdr;
    }
    StarProjectsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.projectCollection = _this.afs.collection('projects', function (ref) { return ref.where('star', '==', 1).where('user_admin', '==', user.uid); });
                _this.starProjects = _this.projectCollection.valueChanges();
                _this.cdr.detectChanges();
                unsubscribe();
            }
        });
    };
    StarProjectsPage.prototype.deleteStarProject = function (id_project) {
        this.projectService.starProject(id_project, 0);
    };
    StarProjectsPage.prototype.openListPage = function (id_project, project_name) {
        this.navCtrl.push('ListsPage', {
            idProject: id_project,
            nameProject: project_name
        });
    };
    StarProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-star-projects',template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/star-projects/star-projects.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="light"></ion-icon>\n    </button>\n    <ion-title>Meus favoritos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let project of starProjects | async">\n    <button ion-button class="bt-tarefas" (click)="deleteStarProject(project.id_project)" icon-only clear item-end style="float: right">\n      <ion-icon name="star" [color]="project.star ? \'yellow\' : \'white\'"></ion-icon>\n    </button>\n    <ion-card-header class="card-header" (click)="openListPage(project.id_project,project.name)" text-wrap>\n      {{ project.name }}\n    </ion-card-header>\n\n    <ion-card-content text-wrap>\n      {{ project.description }}\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/star-projects/star-projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_3__providers_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], StarProjectsPage);
    return StarProjectsPage;
}());

//# sourceMappingURL=star-projects.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarProjectsPageModule", function() { return StarProjectsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__star_projects__ = __webpack_require__(1123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StarProjectsPageModule = /** @class */ (function () {
    function StarProjectsPageModule() {
    }
    StarProjectsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__star_projects__["a" /* StarProjectsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__star_projects__["a" /* StarProjectsPage */]),
            ],
        })
    ], StarProjectsPageModule);
    return StarProjectsPageModule;
}());

//# sourceMappingURL=star-projects.module.js.map

/***/ })

});
//# sourceMappingURL=6.js.map