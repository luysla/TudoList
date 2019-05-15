webpackJsonp([13],{

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_list_service__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddListPage = /** @class */ (function () {
    function AddListPage(navCtrl, navParams, alertCtrl, listService, afs, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.listService = listService;
        this.afs = afs;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.list = {};
        this.id_project = this.navParams.get('idProject');
        this.listForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(3)]]
        });
    }
    AddListPage.prototype.addList = function (list) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Lista criada com sucesso!',
            duration: 3000,
            position: 'top'
        });
        this.listService.newList(list).then(function (doc) {
            _this.afs.collection("lists").doc("" + doc.id).update({
                id_list: doc.id,
                id_project: _this.id_project
            });
            toast.present();
            _this.navCtrl.pop();
        }).catch(function (e) {
            toast.setMessage("Erro ao criar lista! Tente novamente...");
            toast.present();
        });
    };
    AddListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-list',template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/add-list/add-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Nova lista</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="listForm">\n    <ion-item>\n      <ion-label stacked>Nome da lista*</ion-label>\n      <ion-input type="text" [(ngModel)]="list.name" formControlName="name"></ion-input>\n    </ion-item>\n\n    <br>\n\n    <button ion-button class="bt-default" full (click)="addList(list)" [disabled]="!listForm.valid">Ok</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/add-list/add-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_list_service__["a" /* ListService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AddListPage);
    return AddListPage;
}());

//# sourceMappingURL=add-list.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListPageModule", function() { return AddListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_list__ = __webpack_require__(1108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddListPageModule = /** @class */ (function () {
    function AddListPageModule() {
    }
    AddListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_list__["a" /* AddListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_list__["a" /* AddListPage */]),
            ],
        })
    ], AddListPageModule);
    return AddListPageModule;
}());

//# sourceMappingURL=add-list.module.js.map

/***/ })

});
//# sourceMappingURL=13.js.map