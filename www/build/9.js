webpackJsonp([9],{

/***/ 1131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_project_service__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
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






var MyProjectsPage = /** @class */ (function () {
    function MyProjectsPage(navCtrl, navParams, cdr, afs, projectService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cdr = cdr;
        this.afs = afs;
        this.projectService = projectService;
        this.alertCtrl = alertCtrl;
        this.edit = false;
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.projectCollection = _this.afs.collection("projects", function (ref) { return ref.where('user_admin', '==', user.uid); });
                _this.projects = _this.projectCollection.valueChanges();
                _this.cdr.detectChanges();
                unsubscribe();
            }
        });
    }
    MyProjectsPage.prototype.viewEdit = function () {
        this.edit = !this.edit;
        this.cdr.detectChanges();
    };
    MyProjectsPage.prototype.openListPage = function (id_project, project_name) {
        this.navCtrl.push('ListsPage', {
            idProject: id_project,
            nameProject: project_name
        });
    };
    MyProjectsPage.prototype.editProject = function (id_project) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Editar',
            inputs: [
                {
                    name: 'new_project_name',
                    placeholder: 'Novo nome do projeto',
                    type: 'text'
                },
                {
                    name: 'new_description_project',
                    placeholder: 'Nova descrição',
                    type: 'text'
                }
            ],
            buttons: [
                {
                    text: "Cancelar",
                    role: "cancel"
                },
                {
                    text: "Ok",
                    handler: function (data) {
                        _this.projectService.editProject(id_project, data.new_project_name, data.new_description_project);
                    }
                }
            ]
        });
        alert.present();
    };
    MyProjectsPage.prototype.deleteProject = function (id_project, project_name) {
        var _this = this;
        var alertDelete = this.alertCtrl.create({
            subTitle: "Projeto deletado!",
            buttons: ['OK']
        });
        var alert = this.alertCtrl.create({
            title: 'Tem certeza que quer excluir esse projeto?',
            message: 'Ao excluir, todos os dados armazenados até agora vão ser perdidos!',
            inputs: [
                {
                    name: 'project_name',
                    placeholder: 'Digite o nome do projeto pra continuar'
                },
            ],
            buttons: [
                {
                    text: 'Excluir',
                    handler: function (data) {
                        if (data.project_name == project_name) {
                            _this.projectService.deleteProject(id_project).then(function () {
                                alertDelete.present();
                            }).catch(function (e) {
                                alertDelete.setSubTitle("Erro ao excluir o projeto!");
                                alertDelete.present();
                            });
                        }
                        else {
                            alertDelete.setSubTitle("O texto digitado não corresponde ao nome do projeto!");
                            alertDelete.present();
                        }
                    },
                },
                {
                    text: 'Cancelar',
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    };
    MyProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-projects',template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/my-projects/my-projects.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="light"></ion-icon>\n    </button>\n    <ion-title>Meus projetos</ion-title>\n    <ion-buttons end>\n      <button ion-button *ngIf="edit==false" (click)="viewEdit()" icon-only clear>\n        <ion-icon name="create" color="light"></ion-icon>\n      </button>\n      <button ion-button *ngIf="edit==true" (click)="viewEdit()" icon-only clear>\n        <ion-icon name="close" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item  *ngFor="let project of projects | async">\n\n    <ion-label *ngIf="project.star==1" (click)="openListPage(project.id_project, project.name)" text-wrap>\n      {{ project.name }} <ion-icon name="star" color="yellow"></ion-icon>\n    </ion-label>\n    <ion-label *ngIf="project.star==0">{{ project.name }}</ion-label>\n    <button ion-button class="bt-tarefas" *ngIf="edit==false" icon-only clear item-end>\n      <ion-icon name="list" color="dark"></ion-icon>\n    </button>\n    <button ion-button class="bt-tarefas" *ngIf="edit==true" (click)="editProject(project.id_project)" icon-only clear item-end>\n      <ion-icon name="create" color="dark"></ion-icon>\n    </button>\n    <button ion-button class="bt-tarefas" *ngIf="edit==true" (click)="deleteProject(project.id_project, project.name)" icon-only clear item-end>\n      <ion-icon name="trash" color="danger"></ion-icon>\n    </button>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/my-projects/my-projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_3__providers_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyProjectsPage);
    return MyProjectsPage;
}());

//# sourceMappingURL=my-projects.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectsPageModule", function() { return MyProjectsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_projects__ = __webpack_require__(1131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyProjectsPageModule = /** @class */ (function () {
    function MyProjectsPageModule() {
    }
    MyProjectsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_projects__["a" /* MyProjectsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_projects__["a" /* MyProjectsPage */]),
            ],
        })
    ], MyProjectsPageModule);
    return MyProjectsPageModule;
}());

//# sourceMappingURL=my-projects.module.js.map

/***/ })

});
//# sourceMappingURL=9.js.map