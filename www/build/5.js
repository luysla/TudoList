webpackJsonp([5],{

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubtasksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_subtask_service__ = __webpack_require__(550);
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





var SubtasksPage = /** @class */ (function () {
    function SubtasksPage(navCtrl, navParams, subtaskService, afs, formBuilder, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.subtaskService = subtaskService;
        this.afs = afs;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.subtask = {};
        this.id_task = this.navParams.get('idTask');
        this.subtask_number = this.navParams.get('subtask');
        this.subtaskForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(3)]]
        });
        this.subtaskCollection = this.afs.collection('subtasks', function (ref) { return ref.where('id_task', '==', _this.id_task).where('done', '==', 0); });
        this.subtaskDoc = this.subtaskCollection.valueChanges();
    }
    SubtasksPage.prototype.addSubtask = function (subtask) {
        var _this = this;
        this.subtaskService.newSubtask(subtask).then(function (doc) {
            _this.afs.collection('subtasks').doc("" + doc.id).update({
                id_subtask: doc.id,
                id_task: _this.id_task,
                done: 0
            });
        });
        this.subtask_number_up = this.subtask_number++;
        this.afs.collection('tasks').doc("" + this.id_task).update({
            subtask: this.subtask_number
        });
        this.subtaskForm.reset();
        console.log(this.subtask_number_up);
    };
    SubtasksPage.prototype.addPriority = function (id_subtask) {
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
                _this.subtaskService.addPrioritySubtask(id_subtask, data, _this.color_priority);
            }
        });
        alert.present();
    };
    SubtasksPage.prototype.doneSubtask = function (id_subtask) {
        this.subtaskService.doneSubtask(id_subtask);
        this.subtask_number_up = this.subtask_number_up - 1;
        this.afs.collection('tasks').doc("" + this.id_task).update({
            subtask: this.subtask_number_up
        });
    };
    SubtasksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-subtasks',template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/subtasks/subtasks.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Subtarefas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <form [formGroup]="subtaskForm">\n        <ion-item>\n          <ion-input type="text" [(ngModel)]="subtask.name" formControlName="name" placeholder="Nova subtarefa"></ion-input>\n          <button class="bt-tarefas" ion-button icon-only clear item-end (click)="addSubtask(subtask)" [disabled]="subtask.name==null">\n            <ion-icon name="add"></ion-icon>\n          </button>\n        </ion-item>\n      </form>\n\n      <br>\n\n      <ion-item  no-lines *ngFor="let subtask of subtaskDoc | async">\n\n        <ion-label text-wrap>{{ subtask.name }}</ion-label>\n        <ion-checkbox color="dark" (click)="doneSubtask(subtask.id_subtask)"></ion-checkbox>\n\n        <button ion-button class="bt-default" *ngIf="subtask.priority==null" [ngStyle]="{\'background-color\':subtask.color_priority}" item-end round (click)="addPriority(subtask.id_subtask)">\n          P\n        </button>\n\n        <button ion-button *ngIf="subtask.priority!=null" [ngStyle]="{\'background-color\':subtask.color_priority}" item-end round (click)="addPriority(subtask.id_subtask)">\n          {{ subtask.priority }}\n        </button>\n\n        <!-- <button ion-button class="bt-tarefas" *ngIf="subtask.reminder==null" icon-only clear item-end>  (click)="addLembrete(subTarefa.id_subTarefa)"\n          <ion-icon name="md-alarm"></ion-icon>\n        </button> -->\n\n        <button ion-button class="bt-tarefas" item-end clear> <!-- (click)="excluirLembrete(subTarefa.id_subTarefa,lembrete)" -->\n          15 ABR\n        </button>\n\n        <button ion-button class="bt-tarefas" *ngFor="let reminder of subtask.reminder" item-end > <!-- (click)="excluirLembrete(subTarefa.id_subTarefa,lembrete)" -->\n          {{ reminder.fd }}\n        </button>\n<!--\n        <button ion-button class="bt-tarefas" *ngIf="edit==true" (click)="editarSubTarefa(subTarefa.id_subTarefa)" icon-only clear item-end>\n          <ion-icon name="create" style="color:black"></ion-icon>\n        </button> -->\n\n        <!-- <button ion-button class="bt-tarefas" *ngIf="edit==true" (click)="excluirSubtarefa(subTarefa.id_subTarefa, subTarefa.nome)" icon-only clear item-end>\n          <ion-icon name="close" style="color:black"></ion-icon>\n        </button> -->\n\n      </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/subtasks/subtasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_subtask_service__["a" /* SubtaskService */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
    ], SubtasksPage);
    return SubtasksPage;
}());

//# sourceMappingURL=subtasks.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtasksPageModule", function() { return SubtasksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subtasks__ = __webpack_require__(1117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubtasksPageModule = /** @class */ (function () {
    function SubtasksPageModule() {
    }
    SubtasksPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__subtasks__["a" /* SubtasksPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__subtasks__["a" /* SubtasksPage */]),
            ],
        })
    ], SubtasksPageModule);
    return SubtasksPageModule;
}());

//# sourceMappingURL=subtasks.module.js.map

/***/ })

});
//# sourceMappingURL=5.js.map