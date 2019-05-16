webpackJsonp([8],{

/***/ 1132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTasksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_task_service__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
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






var MyTasksPage = /** @class */ (function () {
    function MyTasksPage(navCtrl, navParams, afs, taskService, alertCtrl, cdr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.taskService = taskService;
        this.alertCtrl = alertCtrl;
        this.cdr = cdr;
    }
    MyTasksPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.myTasksCollection = _this.afs.collection("tasks", function (ref) { return ref.where('id_collaborator', '==', user.uid); });
                _this.myTasks = _this.myTasksCollection.valueChanges();
                _this.cdr.detectChanges();
                console.log(_this.myTasks);
                unsubscribe();
            }
        });
    };
    MyTasksPage.prototype.openDetailsTask = function (id_task) {
        this.navCtrl.push('DetailsTaskPage', {
            idTask: id_task
        });
    };
    MyTasksPage.prototype.doneTask = function (id_task, subtask) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Atenção!',
            message: 'Existem sub tarefas vinculadas que não foram concluídas ainda. Para continuar é necessário concluí-las',
            buttons: [
                {
                    text: 'Excluir mesmo assim',
                    handler: function (data) {
                        _this.taskService.doneTask(id_task);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel'
                }
            ]
        });
        if (subtask == 0) {
            this.taskService.doneTask(id_task);
        }
        else {
            alert.present();
        }
    };
    MyTasksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-my-tasks',template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/my-tasks/my-tasks.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="light"></ion-icon>\n    </button>\n    <ion-title>Minhas tarefas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p *ngIf="(myTasks | async)?.length == 0">Nenhuma tarefa foi encontrada!</p>\n  <div *ngFor="let task of myTasks | async">\n    <ion-item no-lines>\n      <ion-label text-wrap>{{ task.name }}</ion-label>\n      <ion-checkbox color="dark" (click)="doneTask(task.id_task,task.subtask)"></ion-checkbox>\n      \n      <button ion-button class="bt-tarefas" (click)="openDetailsTask(task.id_task)" clear icon-only item-end>\n        <ion-icon name="arrow-round-forward" color="dark"></ion-icon>\n      </button>\n    </ion-item>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/my-tasks/my-tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_0__providers_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]])
    ], MyTasksPage);
    return MyTasksPage;
}());

//# sourceMappingURL=my-tasks.js.map

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTasksPageModule", function() { return MyTasksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_tasks__ = __webpack_require__(1132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyTasksPageModule = /** @class */ (function () {
    function MyTasksPageModule() {
    }
    MyTasksPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_tasks__["a" /* MyTasksPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_tasks__["a" /* MyTasksPage */]),
            ],
        })
    ], MyTasksPageModule);
    return MyTasksPageModule;
}());

//# sourceMappingURL=my-tasks.module.js.map

/***/ })

});
//# sourceMappingURL=8.js.map