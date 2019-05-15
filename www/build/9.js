webpackJsonp([9],{

/***/ 1112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_list_service__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_group_service__ = __webpack_require__(530);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListsPage = /** @class */ (function () {
    function ListsPage(navCtrl, navParams, afs, groupService, alertCtrl, cdr, listService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.groupService = groupService;
        this.alertCtrl = alertCtrl;
        this.cdr = cdr;
        this.listService = listService;
        this.edit = false;
        this.view = 'lists';
        this.id_project = this.navParams.get('idProject');
        this.project_name = this.navParams.get('nameProject');
        this.listCollection = this.afs.collection('lists', function (ref) { return ref.where('id_project', '==', _this.id_project); });
        this.lists = this.listCollection.valueChanges();
        this.groupCollection = this.afs.collection('groups', function (ref) { return ref.where('id_project', '==', _this.id_project); });
        this.groups = this.groupCollection.valueChanges();
    }
    ListsPage.prototype.openAddList = function () {
        this.navCtrl.push('AddListPage', {
            idProject: this.id_project
        });
    };
    ListsPage.prototype.openSearchUser = function (id_group) {
        this.navCtrl.push('SearchUserPage', {
            idProjet: this.id_project,
            idGroup: id_group
        });
    };
    ListsPage.prototype.openAddGroup = function () {
        this.navCtrl.push('AddGroupPage', {
            idProject: this.id_project
        });
    };
    ListsPage.prototype.openTaskPage = function (id_list) {
        this.navCtrl.push('TasksPage', {
            idList: id_list,
            idProject: this.id_project
        });
    };
    ListsPage.prototype.showEdit = function () {
        this.edit = !this.edit;
        this.cdr.detectChanges();
    };
    ListsPage.prototype.editList = function (idList) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Editar',
            inputs: [
                {
                    name: 'new_name_list',
                    placeholder: 'Novo nome da lista',
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
                        _this.listService.editList(idList, data.new_name_list);
                    }
                }
            ]
        });
        alert.present();
    };
    ListsPage.prototype.deleteList = function (idList, listName) {
        var _this = this;
        var alertDelete = this.alertCtrl.create({
            subTitle: "Lista deletada!",
            buttons: ['OK']
        });
        var alert = this.alertCtrl.create({
            title: 'Tem certeza que quer excluir essa lista?',
            message: 'Ao excluir, todos os dados armazenados até agora vão ser perdidos!',
            inputs: [
                {
                    name: 'list_name',
                    placeholder: 'Digite o nome da lista pra continuar'
                },
            ],
            buttons: [
                {
                    text: 'Excluir',
                    handler: function (data) {
                        if (data.list_name == listName) {
                            _this.listService.deleteList(idList).then(function () {
                                alertDelete.present();
                            }).catch(function (e) {
                                alertDelete.setSubTitle("Erro ao excluir lista!");
                                alertDelete.present();
                            });
                        }
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    };
    ListsPage.prototype.deleteGroup = function (id_group) {
        var _this = this;
        var alertDelete = this.alertCtrl.create({
            subTitle: "Grupo deletado!",
            buttons: ['OK']
        });
        var alert = this.alertCtrl.create({
            title: 'Tem certeza que quer excluir esse grupo?',
            buttons: [
                {
                    text: 'Excluir',
                    handler: function (data) {
                        _this.groupService.deleteGroup(id_group).then(function () {
                            alertDelete.present();
                        }).catch(function (e) {
                            alertDelete.setSubTitle("Erro ao excluir grupo!");
                            alertDelete.present();
                        });
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    };
    ListsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-lists',template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/lists/lists.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ project_name }}</ion-title>\n    <ion-buttons end>\n        <button ion-button *ngIf="edit==false" icon-only (click)="showEdit()">\n          <ion-icon name="create" color="light"></ion-icon>\n        </button>\n\n        <button ion-button *ngIf="edit==true" icon-only (click)="showEdit()">\n            <ion-icon name="close" color="light"></ion-icon>\n          </button>\n\n        </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar color="light">\n    <ion-segment style="color:black" [(ngModel)]="view">\n      <ion-segment-button value="lists">\n        Listas\n      </ion-segment-button>\n      <ion-segment-button value="group">\n        Grupo\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div [ngSwitch]="view">\n\n  <ion-list *ngSwitchCase="\'lists\'">\n\n    <ion-item *ngFor="let list of lists | async" >\n    <ion-label (click)="openTaskPage(list.id_list)">  {{ list.name }}</ion-label>\n\n    <button ion-button class="bt-tarefas" *ngIf="edit==false" icon-only clear item-end>\n        <ion-icon name="list" style="color:black"></ion-icon>\n      </button>\n\n      <button ion-button class="bt-tarefas" *ngIf="edit==true" (click)="editList(list.id_list)" icon-only clear item-end>\n        <ion-icon name="create" style="color:black"></ion-icon>\n      </button>\n\n      <button ion-button class="bt-tarefas" *ngIf="edit==true" (click)="deleteList(list.id_list, list.name)" icon-only clear item-end>\n        <ion-icon name="trash" color="danger"></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-fab right bottom (click)="openAddList()">\n      <button class="bt-default" ion-fab mini><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n  </ion-list>\n\n  <div *ngSwitchCase="\'group\'">\n    <div *ngFor="let group of groups | async">\n\n      <ion-label text-center><h3>{{ group.name }}</h3></ion-label>\n\n      <div *ngIf="group.members!=null">\n          <ion-item *ngFor="let member of group.members" no-lines>\n              <ion-avatar item-start>\n                  <img [src]="member.member_photo || \'../../../../assets/imgs/no-photo.jpg\'">\n                </ion-avatar>\n            <h2>{{ member.member_name }}</h2>\n\n            <button ion-button class="bt-tarefas" *ngIf="edit==true" icon-only clear item-end>\n              <ion-icon name="trash" color="danger"></ion-icon>\n            </button>\n          </ion-item>\n        </div>\n        <br>\n\n        <button ion-button color="danger" *ngIf="edit==true" (click)="deleteGroup(group.id_group)" icon-start full>\n          <ion-icon name="trash"></ion-icon>\n          Excluir grupo\n        </button>\n\n      <!-- <button ion-button class="bt-default" (click)="openSearchUser(group.id_group)" icon-start>\n        <ion-icon name="person-add"></ion-icon>\n        Adicionar membro\n      </button> -->\n      <ion-fab right bottom (click)="openSearchUser(group.id_group)">\n          <button class="bt-default" ion-fab mini><ion-icon name="person-add"></ion-icon></button>\n        </ion-fab>\n    </div>\n\n    <!-- <ion-fab *ngIf="groupCollection==null" right bottom (click)="openAddGroup()">\n        <button class="bt-default" ion-fab mini><ion-icon name="add"></ion-icon></button>\n      </ion-fab> -->\n\n\n   </div>\n\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/lists/lists.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_4__providers_group_service__["a" /* GroupService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_0__providers_list_service__["a" /* ListService */]])
    ], ListsPage);
    return ListsPage;
}());

//# sourceMappingURL=lists.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsPageModule", function() { return ListsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lists__ = __webpack_require__(1112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListsPageModule = /** @class */ (function () {
    function ListsPageModule() {
    }
    ListsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lists__["a" /* ListsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lists__["a" /* ListsPage */]),
            ],
        })
    ], ListsPageModule);
    return ListsPageModule;
}());

//# sourceMappingURL=lists.module.js.map

/***/ })

});
//# sourceMappingURL=9.js.map