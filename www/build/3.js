webpackJsonp([3],{

/***/ 1120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_task_service__ = __webpack_require__(533);
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







var TasksPage = /** @class */ (function () {
    function TasksPage(navCtrl, navParams, formBuilder, taskService, afs, cdr, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.taskService = taskService;
        this.afs = afs;
        this.cdr = cdr;
        this.alertCtrl = alertCtrl;
        this.task = {};
        this.id_list = this.navParams.get('idList');
        this.id_project = this.navParams.get('idProject');
        this.taskForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(3)]]
        });
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.taskCollection = _this.afs.collection('tasks', function (ref) { return ref.where('id_list', '==', _this.id_list).where('done', '==', 0); });
                _this.taskDoc = _this.taskCollection.valueChanges();
                _this.cdr.detectChanges();
                unsubscribe();
            }
        });
    }
    TasksPage.prototype.addTask = function (task) {
        var _this = this;
        this.taskService.newTask(task).then(function (doc) {
            _this.afs.collection('tasks').doc("" + doc.id).update({
                id_task: doc.id,
                id_list: _this.id_list,
                done: 0,
                subtask: 0
            });
            _this.taskForm.reset();
        }).catch(function (e) {
            console.log("Erro ao criar tarefa" + e);
        });
    };
    TasksPage.prototype.openCompletedTasks = function () {
        this.navCtrl.push('CompletedTasksPage', {
            idList: this.id_list
        });
    };
    TasksPage.prototype.openDetailsTask = function (id_task) {
        this.navCtrl.push('DetailsTaskPage', {
            idTask: id_task,
            idProject: this.id_project
        });
    };
    TasksPage.prototype.doneTask = function (id_task, subtask) {
        var _this = this;
        console.log(subtask);
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
    TasksPage.prototype.addPriority = function (id_task) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Prioridade da tarefa',
            inputs: [
                {
                    type: 'radio',
                    label: 'Alta',
                    value: '1',
                    checked: true
                },
                {
                    type: 'radio',
                    label: 'Média',
                    value: '2',
                    checked: false
                },
                {
                    type: 'radio',
                    label: 'Baixa',
                    value: '3',
                    checked: false
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel'
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        if (data == 1) {
                            _this.color_priority = '#FF4500';
                        }
                        if (data == 2) {
                            _this.color_priority = '#FF8C00';
                        }
                        if (data == 3) {
                            _this.color_priority = '#FFD700';
                        }
                        _this.taskService.addPriorityTask(id_task, data, _this.color_priority);
                    }
                },
            ]
        });
        alert.present();
    };
    TasksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tasks',template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/tasks/tasks.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Tarefas</ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="openCompletedTasks()" icon-only>\n        <ion-icon name="checkbox-outline" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="taskForm">\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="task.name" formControlName="name" placeholder="Nova tarefa"></ion-input>\n      <button class="bt-tarefas" ion-button icon-only clear item-end (click)="addTask(task)" [disabled]="task.name==null">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-item>\n  </form>\n  <br>\n\n  <ion-item no-lines *ngFor="let task of taskDoc | async" text-wrap>\n    <ion-label>{{ task.name }}</ion-label>\n    <ion-checkbox color="dark" (click)="doneTask(task.id_task,task.subtask)"></ion-checkbox>\n\n    <button ion-button *ngIf="task.priority!=null" [ngStyle]="{\'background-color\':task.color_priority}" item-end round (click)="addPriority(task.id_task)">\n      {{ task.priority }}\n    </button>\n\n    <button ion-button class="bt-tarefas" *ngFor="let lembrete of task.lembrete" clear item-end> <!-- (click)="excluirLembrete(tarefa.id_tarefa, lembrete)" -->\n      {{ lembrete.df }}\n    </button>\n\n    <button ion-button class="bt-tarefas" clear icon-only item-end (click)="openDetailsTask(task.id_task)">\n      <ion-icon name="arrow-round-forward"></ion-icon>\n    </button>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/tasks/tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], TasksPage);
    return TasksPage;
}());

//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksPageModule", function() { return TasksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks__ = __webpack_require__(1120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TasksPageModule = /** @class */ (function () {
    function TasksPageModule() {
    }
    TasksPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tasks__["a" /* TasksPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tasks__["a" /* TasksPage */]),
            ],
        })
    ], TasksPageModule);
    return TasksPageModule;
}());

//# sourceMappingURL=tasks.module.js.map

/***/ })

});
//# sourceMappingURL=3.js.map