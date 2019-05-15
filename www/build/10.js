webpackJsonp([10],{

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_task_service__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar_ngx__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailsTaskPage = /** @class */ (function () {
    function DetailsTaskPage(navCtrl, navParams, afs, taskService, alertCtrl, calendar) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.taskService = taskService;
        this.alertCtrl = alertCtrl;
        this.calendar = calendar;
        this.id_task = this.navParams.get('idTask');
        this.id_project = this.navParams.get('idProject');
        this.taskColletion = this.afs.collection('tasks', function (ref) { return ref.where('id_task', '==', _this.id_task); });
        this.taskDoc = this.taskColletion.valueChanges();
    }
    DetailsTaskPage.prototype.addPriority = function (id_task) {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Prioridade da tarefa');
        alert.addInput({
            type: 'radio',
            label: 'Alta',
            value: '1',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Média',
            value: '2',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Baixa',
            value: '3',
            checked: false
        });
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'OK',
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
        });
        alert.present();
    };
    DetailsTaskPage.prototype.addReminder = function (id_task) {
        var _this = this;
        var options = { calendarName: 'TudoList', firstReminderMinutes: 15 };
        var alertReminder = this.alertCtrl.create({
            subTitle: "Lembrete criado com sucesso!",
            buttons: ['OK']
        });
        var alert = this.alertCtrl.create({
            title: 'Lembrete',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Nome*',
                    type: 'text'
                },
                {
                    name: 'description',
                    placeholder: 'Descrição(opcional)',
                    type: 'text'
                },
                {
                    name: 'local',
                    placeholder: 'Local(opcional)',
                    type: 'text'
                },
                {
                    name: 'initial_date',
                    placeholder: 'Data inicial*',
                    type: 'date'
                },
                {
                    name: 'final_date',
                    placeholder: 'Data final*',
                    type: 'date'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel'
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        _this.calendar.createEventInteractivelyWithOptions(data.name, data.local, data.description, __WEBPACK_IMPORTED_MODULE_5_moment___default()(data.inicial_date).toDate(), __WEBPACK_IMPORTED_MODULE_5_moment___default()(data.final_date).toDate(), options).
                            then(function () {
                            _this.taskService.addReminder(id_task, data.name, data.local, data.description, data.initial_date, data.final_date);
                            alertReminder.present();
                        }).catch(function (e) {
                            alertReminder.setSubTitle("Erro ao criar o lembrete! Tente novamente...");
                            alertReminder.setMessage(e);
                            alertReminder.present();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DetailsTaskPage.prototype.openSubtask = function (id_task, subtask) {
        this.navCtrl.push('SubtasksPage', {
            idTask: id_task,
            subtask: subtask
        });
    };
    DetailsTaskPage.prototype.addCollaborator = function (id_task) {
        this.navCtrl.push('SearchUserCollaboratorPage', {
            idTask: id_task,
            idProject: this.id_project
        });
    };
    var _a, _b, _c, _d, _e, _f;
    DetailsTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details-task',template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/details-task/details-task.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Detalhes da tarefa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-item no-lines *ngFor="let task of taskDoc | async">\n\n      <!-- <button ion-button class="bt-tarefas" style="float: right" icon-only clear>\n        <ion-icon name="flag" color="danger"></ion-icon>\n      </button> -->\n\n      <h2 class="title-card" text-wrap> {{ task.name }} </h2>\n\n      <br>\n\n      <h2 class="titulo">Prioridade:</h2>\n\n      <button ion-button class="bt-default" *ngIf="task.priority==null" icon-start (click)="addPriority(task.id_task)">\n        <ion-icon name="podium"></ion-icon>\n        Adicionar prioridade\n      </button>\n\n      <button ion-button round *ngIf="task.priority!=null" [ngStyle]="{\'background-color\':task.color_priority}" (click)="addPriority(task.id_task)">\n        {{ task.priority }}\n      </button>\n\n      <br *ngIf="task.reminder==null">\n\n      <h2 class="titulo" *ngIf="task.reminder==null">Lembrete:</h2>\n\n       <button ion-button class="bt-default" *ngIf="task.reminder==null" icon-start (click)="addReminder(task.id_task)">\n        <ion-icon name="alarm"></ion-icon>\n        Adicionar lembrete\n      </button> \n\n      <h2 class="titulo">Tarefas vinculadas:</h2>\n      <button ion-button class="bt-default" *ngIf="task.subtask==0" icon-start (click)="openSubtask(task.id_task,task.subtask)">\n        <ion-icon name="list"></ion-icon>\n        Adicionar subtarefas\n      </button>\n\n      <button ion-button class="bt-default" *ngIf="task.subtask!=0" (click)="openSubtask(task.id_task,task.subtask)">\n        {{ task.subtask }}\n      </button>\n\n      <h2 class="titulo">Colaborador:</h2>\n      <button ion-button class="bt-default" *ngIf="task.collaborator==null" icon-start (click)="addCollaborator(task.id_task)">\n        <ion-icon name="person-add"></ion-icon>\n        Adicionar colaborador\n      </button>\n\n      <div *ngIf="task.collaborator!=null">\n        <div *ngFor="let collaborator of task.collaborator">\n          <ion-item>\n          <ion-avatar item-start>\n                <img [src]="collaborator.photo || \'../../../../assets/imgs/no-photo.jpg\'">\n              </ion-avatar>\n              <h2>@{{ collaborator.username }}</h2>\n            </ion-item>\n        </div>\n        <!-- <div *ngFor="let colaborador of tarefa.colaboradores">\n          <p style="font-weight: bold" (click)="addColaborador(tarefa.id_tarefa)">@{{ colaborador.username_colaborador }}</p>\n        </div> -->\n      </div>\n\n      <div *ngIf="task.reminder!=null">\n        <div *ngFor="let reminder of task.reminder">\n          <h2 class="titulo">Lembrete:</h2>\n          <p>{{ reminder.df }}</p>\n        </div>\n      </div>\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/details-task/details-task.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_task_service__["a" /* TaskService */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar_ngx__["a" /* Calendar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar_ngx__["a" /* Calendar */]) === "function" ? _f : Object])
    ], DetailsTaskPage);
    return DetailsTaskPage;
}());

//# sourceMappingURL=details-task.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsTaskPageModule", function() { return DetailsTaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_task__ = __webpack_require__(1111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailsTaskPageModule = /** @class */ (function () {
    function DetailsTaskPageModule() {
    }
    DetailsTaskPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__details_task__["a" /* DetailsTaskPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__details_task__["a" /* DetailsTaskPage */]),
            ],
        })
    ], DetailsTaskPageModule);
    return DetailsTaskPageModule;
}());

//# sourceMappingURL=details-task.module.js.map

/***/ })

});
//# sourceMappingURL=10.js.map