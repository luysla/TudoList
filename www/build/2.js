webpackJsonp([2],{

/***/ 1109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_task_service__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__ = __webpack_require__(1110);
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
    function DetailsTaskPage(navCtrl, navParams, afs, taskService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.taskService = taskService;
        this.alertCtrl = alertCtrl;
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
                        __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__["a" /* Calendar */].createEventInteractivelyWithOptions(data.name, data.local, data.description, __WEBPACK_IMPORTED_MODULE_5_moment___default()(data.inicial_date).toDate(), __WEBPACK_IMPORTED_MODULE_5_moment___default()(data.final_date).toDate(), options).
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
    DetailsTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details-task',template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/details-task/details-task.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Detalhes da tarefa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-item no-lines *ngFor="let task of taskDoc | async">\n\n      <!-- <button ion-button class="bt-tarefas" style="float: right" icon-only clear>\n        <ion-icon name="flag" color="danger"></ion-icon>\n      </button> -->\n\n      <h2 class="title-card" text-wrap> {{ task.name }} </h2>\n\n      <br>\n\n      <h2 class="titulo">Prioridade:</h2>\n\n      <button ion-button class="bt-default" *ngIf="task.priority==null" icon-start (click)="addPriority(task.id_task)">\n        <ion-icon name="podium"></ion-icon>\n        Adicionar prioridade\n      </button>\n\n      <button ion-button round *ngIf="task.priority!=null" [ngStyle]="{\'background-color\':task.color_priority}" (click)="addPriority(task.id_task)">\n        {{ task.priority }}\n      </button>\n\n      <br *ngIf="task.reminder==null">\n\n      <!--<h2 class="titulo" *ngIf="task.reminder==null">Lembrete:</h2>\n\n       <button ion-button class="bt-default" *ngIf="task.reminder==null" icon-start (click)="addReminder(task.id_task)">\n        <ion-icon name="alarm"></ion-icon>\n        Adicionar lembrete\n      </button> -->\n\n      <h2 class="titulo">Tarefas vinculadas:</h2>\n      <button ion-button class="bt-default" *ngIf="task.subtask==0" icon-start (click)="openSubtask(task.id_task,task.subtask)">\n        <ion-icon name="list"></ion-icon>\n        Adicionar subtarefas\n      </button>\n\n      <button ion-button class="bt-default" *ngIf="task.subtask!=0" (click)="openSubtask(task.id_task,task.subtask)">\n        {{ task.subtask }}\n      </button>\n\n      <h2 class="titulo">Colaborador:</h2>\n      <button ion-button class="bt-default" *ngIf="task.collaborator==null" icon-start (click)="addCollaborator(task.id_task)">\n        <ion-icon name="person-add"></ion-icon>\n        Adicionar colaborador\n      </button>\n\n      <div *ngIf="task.collaborator!=null">\n        <div *ngFor="let collaborator of task.collaborator">\n          <ion-item>\n          <ion-avatar item-start>\n                <img [src]="collaborator.photo || \'../../../../assets/imgs/no-photo.jpg\'">\n              </ion-avatar>\n              <h2>@{{ collaborator.username }}</h2>\n            </ion-item>\n        </div>\n        <!-- <div *ngFor="let colaborador of tarefa.colaboradores">\n          <p style="font-weight: bold" (click)="addColaborador(tarefa.id_tarefa)">@{{ colaborador.username_colaborador }}</p>\n        </div> -->\n      </div>\n\n      <div *ngIf="task.reminder!=null">\n        <div *ngFor="let reminder of task.reminder">\n          <h2 class="titulo">Lembrete:</h2>\n          <p>{{ reminder.df }}</p>\n        </div>\n      </div>\n\n      <h2 class="titulo">Lembrete:</h2>\n      <p>15 Abr</p>\n\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/details-task/details-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_3__providers_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DetailsTaskPage);
    return DetailsTaskPage;
}());

//# sourceMappingURL=details-task.js.map

/***/ }),

/***/ 1110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_core__ = __webpack_require__(241);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CalendarOriginal = /** @class */ (function (_super) {
    __extends(CalendarOriginal, _super);
    function CalendarOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarOriginal.prototype.hasReadWritePermission = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "hasReadWritePermission", {}, arguments); };
    CalendarOriginal.prototype.hasReadPermission = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "hasReadPermission", {}, arguments); };
    CalendarOriginal.prototype.hasWritePermission = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "hasWritePermission", {}, arguments); };
    CalendarOriginal.prototype.requestWritePermission = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "requestWritePermission", {}, arguments); };
    CalendarOriginal.prototype.requestReadPermission = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "requestReadPermission", {}, arguments); };
    CalendarOriginal.prototype.requestReadWritePermission = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "requestReadWritePermission", {}, arguments); };
    CalendarOriginal.prototype.createCalendar = function (nameOrOptions) { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "createCalendar", {}, arguments); };
    CalendarOriginal.prototype.deleteCalendar = function (name) { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "deleteCalendar", {}, arguments); };
    CalendarOriginal.prototype.getCalendarOptions = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "getCalendarOptions", { "sync": true }, arguments); };
    CalendarOriginal.prototype.getCreateCalendarOptions = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "getCreateCalendarOptions", { "sync": true }, arguments); };
    CalendarOriginal.prototype.createEvent = function (title, location, notes, startDate, endDate) { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "createEvent", {}, arguments); };
    CalendarOriginal.prototype.createEventWithOptions = function (title, location, notes, startDate, endDate, options) { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "createEventWithOptions", {}, arguments); };
    CalendarOriginal.prototype.createEventInteractively = function (title, location, notes, startDate, endDate) { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "createEventInteractively", {}, arguments); };
    CalendarOriginal.prototype.createEventInteractivelyWithOptions = function (title, location, notes, startDate, endDate, options) { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "createEventInteractivelyWithOptions", {}, arguments); };
    CalendarOriginal.prototype.findEvent = function (title, location, notes, startDate, endDate) { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "findEvent", {}, arguments); };
    CalendarOriginal.prototype.findEventWithOptions = function (title, location, notes, startDate, endDate, options) { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "findEventWithOptions", {}, arguments); };
    CalendarOriginal.prototype.listEventsInRange = function (startDate, endDate) { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "listEventsInRange", { "platforms": ["Android"] }, arguments); };
    CalendarOriginal.prototype.listCalendars = function () { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "listCalendars", {}, arguments); };
    CalendarOriginal.prototype.findAllEventsInNamedCalendar = function (calendarName) { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "findAllEventsInNamedCalendar", { "platforms": ["iOS"] }, arguments); };
    CalendarOriginal.prototype.modifyEvent = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate) { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "modifyEvent", { "platforms": ["iOS"] }, arguments); };
    CalendarOriginal.prototype.modifyEventWithOptions = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, filterOptions, newOptions) { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "modifyEventWithOptions", { "platforms": ["iOS"] }, arguments); };
    CalendarOriginal.prototype.deleteEvent = function (title, location, notes, startDate, endDate) { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "deleteEvent", {}, arguments); };
    CalendarOriginal.prototype.deleteEventFromNamedCalendar = function (title, location, notes, startDate, endDate, calendarName) { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "deleteEventFromNamedCalendar", { "platforms": ["iOS"] }, arguments); };
    CalendarOriginal.prototype.openCalendar = function (date) { return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["cordova"])(this, "openCalendar", {}, arguments); };
    CalendarOriginal.pluginName = "Calendar";
    CalendarOriginal.plugin = "cordova-plugin-calendar";
    CalendarOriginal.pluginRef = "plugins.calendar";
    CalendarOriginal.repo = "https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin";
    CalendarOriginal.platforms = ["Android", "iOS"];
    return CalendarOriginal;
}(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["c" /* IonicNativePlugin */]));
var Calendar = new CalendarOriginal();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbGVuZGFyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXlGMUMsNEJBQWlCOzs7O0lBYTdDLHlDQUFzQjtJQVN0QixvQ0FBaUI7SUFTakIscUNBQWtCO0lBU2xCLHlDQUFzQjtJQVN0Qix3Q0FBcUI7SUFTckIsNkNBQTBCO0lBVzFCLGlDQUFjLGFBQUMsYUFBcUM7SUFVcEQsaUNBQWMsYUFBQyxJQUFZO0lBWTNCLHFDQUFrQjtJQVlsQiwyQ0FBd0I7SUFjeEIsOEJBQVcsYUFDVCxLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWM7SUFpQmhCLHlDQUFzQixhQUNwQixLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWMsRUFDZCxPQUF5QjtJQWdCM0IsMkNBQXdCLGFBQ3RCLEtBQWMsRUFDZCxRQUFpQixFQUNqQixLQUFjLEVBQ2QsU0FBZ0IsRUFDaEIsT0FBYztJQWlCaEIsc0RBQW1DLGFBQ2pDLEtBQWMsRUFDZCxRQUFpQixFQUNqQixLQUFjLEVBQ2QsU0FBZ0IsRUFDaEIsT0FBYyxFQUNkLE9BQXlCO0lBZ0IzQiw0QkFBUyxhQUNQLEtBQWMsRUFDZCxRQUFpQixFQUNqQixLQUFjLEVBQ2QsU0FBZ0IsRUFDaEIsT0FBYztJQWdCaEIsdUNBQW9CLGFBQ2xCLEtBQWMsRUFDZCxRQUFpQixFQUNqQixLQUFjLEVBQ2QsU0FBZ0IsRUFDaEIsT0FBYyxFQUNkLE9BQXlCO0lBZTNCLG9DQUFpQixhQUFDLFNBQWUsRUFBRSxPQUFhO0lBU2hELGdDQUFhO0lBV2IsK0NBQTRCLGFBQUMsWUFBb0I7SUFzQmpELDhCQUFXLGFBQ1QsS0FBYyxFQUNkLFFBQWlCLEVBQ2pCLEtBQWMsRUFDZCxTQUFnQixFQUNoQixPQUFjLEVBQ2QsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsUUFBaUIsRUFDakIsWUFBbUIsRUFDbkIsVUFBaUI7SUF5Qm5CLHlDQUFzQixhQUNwQixLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWMsRUFDZCxRQUFpQixFQUNqQixXQUFvQixFQUNwQixRQUFpQixFQUNqQixZQUFtQixFQUNuQixVQUFpQixFQUNqQixhQUErQixFQUMvQixVQUE0QjtJQWdCOUIsOEJBQVcsYUFDVCxLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWM7SUFtQmhCLCtDQUE0QixhQUMxQixLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWMsRUFDZCxZQUFxQjtJQVd2QiwrQkFBWSxhQUFDLElBQVU7Ozs7OzttQkFuZXpCO0VBMEY4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBJZFxuICAgKi9cbiAgaWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBmaXJzdFJlbWluZGVyTWludXRlcz86IG51bWJlcjtcblxuICAvKipcbiAgICpcbiAgICovXG4gIHNlY29uZFJlbWluZGVyTWludXRlcz86IG51bWJlcjtcblxuICAvKipcbiAgICogUmVjdXJyZW5jZS4gQ2FuIGJlIHNldCB0byBgZGFpbHlgLCBgd2Vla2x5YCwgYG1vbnRobHlgIG9yIGB5ZWFybHlgXG4gICAqL1xuICByZWN1cnJlbmNlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZWN1cnJlbmNlIGludGVydmFsLiBWYWxpZCBvbmx5IHdoZW4gYHJlY3VycmVuY2VgIG9wdGlvbiBpcyBzZXQuXG4gICAqL1xuICByZWN1cnJlbmNlSW50ZXJ2YWw/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJlY3VycmVuY2UgZW5kIGRhdGUuIFZhbGlkIG9ubHkgd2hlbiBgcmVjdXJyZW5jZWAgb3B0aW9uIGlzIHNldC5cbiAgICovXG4gIHJlY3VycmVuY2VFbmREYXRlPzogRGF0ZTtcblxuICAvKipcbiAgICogQ2FsZW5kYXIgbmFtZS4gVGhzIGlzIHN1cHBvcnRlZCBieSBgaU9TYCBvbmx5LlxuICAgKi9cbiAgY2FsZW5kYXJOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDYWxlbmRhciBpZFxuICAgKi9cbiAgY2FsZW5kYXJJZD86IG51bWJlcjtcblxuICAvKipcbiAgICogVVJMXG4gICAqL1xuICB1cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmFtZU9yT3B0aW9ucyB7XG4gIC8qKiBDYWxlbmRhciBuYW1lICovXG4gIGNhbGVuZGFyTmFtZT86IHN0cmluZztcblxuICAvKiogQ2FsZW5kYXIgY29sb3IgYXMgYSBIRVggc3RyaW5nICovXG4gIGNhbGVuZGFyQ29sb3I/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgQ2FsZW5kYXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBhZGQgZXZlbnRzIHRvIHRoZSBDYWxlbmRhciBvZiB0aGUgbW9iaWxlIGRldmljZS5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWNhbGVuZGFyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NhbGVuZGFyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vQ2FsZW5kYXItUGhvbmVHYXAtUGx1Z2luKS5cbiAqXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2FsZW5kYXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbGVuZGFyOiBDYWxlbmRhcikgeyB9XG4gKlxuICpcbiAqIHRoaXMuY2FsZW5kYXIuY3JlYXRlQ2FsZW5kYXIoJ015Q2FsZW5kYXInKS50aGVuKFxuICogICAobXNnKSA9PiB7IGNvbnNvbGUubG9nKG1zZyk7IH0sXG4gKiAgIChlcnIpID0+IHsgY29uc29sZS5sb2coZXJyKTsgfVxuICogKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENhbGVuZGFyT3B0aW9uc1xuICogTmFtZU9yT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhbGVuZGFyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2FsZW5kYXInLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmNhbGVuZGFyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9DYWxlbmRhci1QaG9uZUdhcC1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gY2hlY2tzIGlmIHdlIGhhdmUgcGVybWlzc2lvbiB0byByZWFkL3dyaXRlIGZyb20vdG8gdGhlIGNhbGVuZGFyLlxuICAgKiBUaGUgcHJvbWlzZSB3aWxsIHJlc29sdmUgd2l0aCBgdHJ1ZWAgd2hlbjpcbiAgICogLSBZb3UncmUgcnVubmluZyBvbiBpT1MsIG9yXG4gICAqIC0gWW91J3JlIHRhcmdldGluZyBBUEkgbGV2ZWwgbG93ZXIgdGhhbiAyMywgb3JcbiAgICogLSBZb3UncmUgdXNpbmcgQW5kcm9pZCA8IDYsIG9yXG4gICAqIC0gWW91J3ZlIGFscmVhZHkgZ3JhbnRlZCBwZXJtaXNzaW9uXG4gICAqXG4gICAqIElmIHRoaXMgcmV0dXJucyBmYWxzZSwgeW91IHNob3VsZCBjYWxsIHRoZSBgcmVxdWVzdFJlYWRXcml0ZVBlcm1pc3Npb25gIGZ1bmN0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYXNSZWFkV3JpdGVQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB3ZSBoYXZlIHJlYWQgcGVybWlzc2lvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzUmVhZFBlcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHdlIGhhdmUgd3JpdGUgcGVybWlzc2lvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzV3JpdGVQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHdyaXRlIHBlcm1pc3Npb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFdyaXRlUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHJlYWQgcGVybWlzc2lvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0UmVhZFBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdHMgcmVhZC93cml0ZSBwZXJtaXNzaW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0UmVhZFdyaXRlUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBjYWxlbmRhci4gKGlPUyBvbmx5KVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZyB8IE5hbWVPck9wdGlvbnN9IG5hbWVPck9wdGlvbnMgIGVpdGhlciBhIHN0cmluZyBuYW1lIG9yIGEgb3B0aW9ucyBvYmplY3QuIElmIHN0cmluZywgcHJvdmlkZSB0aGUgY2FsZW5kYXIgbmFtZS4gSUYgYW4gb2JqZWN0LCBwcm92aWRlIGEgY2FsZW5kYXIgbmFtZSBhcyBhIHN0cmluZyBhbmQgYSBjYWxlbmRhciBjb2xvciBpbiBoZXggZm9ybWF0IGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNyZWF0ZUNhbGVuZGFyKG5hbWVPck9wdGlvbnM6IHN0cmluZyB8IE5hbWVPck9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYSBjYWxlbmRhci4gKGlPUyBvbmx5KVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgTmFtZSBvZiB0aGUgY2FsZW5kYXIgdG8gZGVsZXRlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWxldGVDYWxlbmRhcihuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IGNhbGVuZGFyIG9wdGlvbnMuXG4gICAqXG4gICAqIEByZXR1cm4ge0NhbGVuZGFyT3B0aW9uc30gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgZGVmYXVsdCBjYWxlbmRhciBvcHRpb25zXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBnZXRDYWxlbmRhck9wdGlvbnMoKTogQ2FsZW5kYXJPcHRpb25zIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvcHRpb25zIGZvciBhIGN1c3RvbSBjYWxlbmRlciB3aXRoIHNwZWNpZmljIGNvbG9yXG4gICAqXG4gICAqIEByZXR1cm4ge05hbWVPck9wdGlvbnN9IFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIGRlZmF1bHQgb3B0aW9uc1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgZ2V0Q3JlYXRlQ2FsZW5kYXJPcHRpb25zKCk6IE5hbWVPck9wdGlvbnMge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaWxlbnRseSBjcmVhdGUgYW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhdGlvbl0gIFRoZSBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2VuZERhdGVdICBUaGUgZXZlbnQgZW5kIGRhdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY3JlYXRlRXZlbnQoXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgbG9jYXRpb24/OiBzdHJpbmcsXG4gICAgbm90ZXM/OiBzdHJpbmcsXG4gICAgc3RhcnREYXRlPzogRGF0ZSxcbiAgICBlbmREYXRlPzogRGF0ZVxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaWxlbnRseSBjcmVhdGUgYW4gZXZlbnQgd2l0aCBhZGRpdGlvbmFsIG9wdGlvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhdGlvbl0gIFRoZSBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2VuZERhdGVdICBUaGUgZXZlbnQgZW5kIGRhdGVcbiAgICogQHBhcmFtIHtDYWxlbmRhck9wdGlvbnN9IFtvcHRpb25zXSAgQWRkaXRpb25hbCBvcHRpb25zLCBzZWUgYGdldENhbGVuZGFyT3B0aW9uc2BcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY3JlYXRlRXZlbnRXaXRoT3B0aW9ucyhcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBsb2NhdGlvbj86IHN0cmluZyxcbiAgICBub3Rlcz86IHN0cmluZyxcbiAgICBzdGFydERhdGU/OiBEYXRlLFxuICAgIGVuZERhdGU/OiBEYXRlLFxuICAgIG9wdGlvbnM/OiBDYWxlbmRhck9wdGlvbnNcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJhY3RpdmVseSBjcmVhdGUgYW4gZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhdGlvbl0gIFRoZSBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2VuZERhdGVdICBUaGUgZXZlbnQgZW5kIGRhdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY3JlYXRlRXZlbnRJbnRlcmFjdGl2ZWx5KFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIGxvY2F0aW9uPzogc3RyaW5nLFxuICAgIG5vdGVzPzogc3RyaW5nLFxuICAgIHN0YXJ0RGF0ZT86IERhdGUsXG4gICAgZW5kRGF0ZT86IERhdGVcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJhY3RpdmVseSBjcmVhdGUgYW4gZXZlbnQgd2l0aCBhZGRpdGlvbmFsIG9wdGlvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhdGlvbl0gIFRoZSBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2VuZERhdGVdICBUaGUgZXZlbnQgZW5kIGRhdGVcbiAgICogQHBhcmFtIHtDYWxlbmRhck9wdGlvbnN9IFtvcHRpb25zXSAgQWRkaXRpb25hbCBvcHRpb25zLCBzZWUgYGdldENhbGVuZGFyT3B0aW9uc2BcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY3JlYXRlRXZlbnRJbnRlcmFjdGl2ZWx5V2l0aE9wdGlvbnMoXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgbG9jYXRpb24/OiBzdHJpbmcsXG4gICAgbm90ZXM/OiBzdHJpbmcsXG4gICAgc3RhcnREYXRlPzogRGF0ZSxcbiAgICBlbmREYXRlPzogRGF0ZSxcbiAgICBvcHRpb25zPzogQ2FsZW5kYXJPcHRpb25zXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYW4gZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhdGlvbl0gIFRoZSBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2VuZERhdGVdICBUaGUgZXZlbnQgZW5kIGRhdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZmluZEV2ZW50KFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIGxvY2F0aW9uPzogc3RyaW5nLFxuICAgIG5vdGVzPzogc3RyaW5nLFxuICAgIHN0YXJ0RGF0ZT86IERhdGUsXG4gICAgZW5kRGF0ZT86IERhdGVcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRmluZCBhbiBldmVudCB3aXRoIGFkZGl0aW9uYWwgb3B0aW9ucy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm90ZXNdICBUaGUgZXZlbnQgbm90ZXNcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxuICAgKiBAcGFyYW0ge0NhbGVuZGFyT3B0aW9uc30gW29wdGlvbnNdICBBZGRpdGlvbmFsIG9wdGlvbnMsIHNlZSBgZ2V0Q2FsZW5kYXJPcHRpb25zYFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGV2ZW50LCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGZpbmRFdmVudFdpdGhPcHRpb25zKFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIGxvY2F0aW9uPzogc3RyaW5nLFxuICAgIG5vdGVzPzogc3RyaW5nLFxuICAgIHN0YXJ0RGF0ZT86IERhdGUsXG4gICAgZW5kRGF0ZT86IERhdGUsXG4gICAgb3B0aW9ucz86IENhbGVuZGFyT3B0aW9uc1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGEgbGlzdCBvZiBldmVudHMgd2l0aGluIHRoZSBzcGVjaWZpZWQgZGF0ZSByYW5nZS4gKEFuZHJvaWQgb25seSlcbiAgICpcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBlbmQgZGF0ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxpc3Qgb2YgZXZlbnRzLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICBsaXN0RXZlbnRzSW5SYW5nZShzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBsaXN0IG9mIGFsbCBjYWxlbmRhcnMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxpc3Qgb2YgY2FsZW5kYXJzLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxpc3RDYWxlbmRhcnMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgbGlzdCBvZiBhbGwgZnV0dXJlIGV2ZW50cyBpbiB0aGUgc3BlY2lmaWVkIGNhbGVuZGFyLiAoaU9TIG9ubHkpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbGlzdCBvZiBldmVudHMsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ11cbiAgfSlcbiAgZmluZEFsbEV2ZW50c0luTmFtZWRDYWxlbmRhcihjYWxlbmRhck5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vZGlmeSBhbiBldmVudC4gKGlPUyBvbmx5KVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlXSAgVGhlIGV2ZW50IHRpdGxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbG9jYXRpb25dICBUaGUgZXZlbnQgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub3Rlc10gIFRoZSBldmVudCBub3Rlc1xuICAgKiBAcGFyYW0ge0RhdGV9IFtzdGFydERhdGVdICBUaGUgZXZlbnQgc3RhcnQgZGF0ZVxuICAgKiBAcGFyYW0ge0RhdGV9IFtlbmREYXRlXSAgVGhlIGV2ZW50IGVuZCBkYXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmV3VGl0bGVdICBUaGUgbmV3IGV2ZW50IHRpdGxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmV3TG9jYXRpb25dICBUaGUgbmV3IGV2ZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmV3Tm90ZXNdICBUaGUgbmV3IGV2ZW50IG5vdGVzXG4gICAqIEBwYXJhbSB7RGF0ZX0gW25ld1N0YXJ0RGF0ZV0gIFRoZSBuZXcgZXZlbnQgc3RhcnQgZGF0ZVxuICAgKiBAcGFyYW0ge0RhdGV9IFtuZXdFbmREYXRlXSAgVGhlIG5ldyBldmVudCBlbmQgZGF0ZVxuICAgKiBAcmV0dXJuIFJldHVybnMgYSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddXG4gIH0pXG4gIG1vZGlmeUV2ZW50KFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIGxvY2F0aW9uPzogc3RyaW5nLFxuICAgIG5vdGVzPzogc3RyaW5nLFxuICAgIHN0YXJ0RGF0ZT86IERhdGUsXG4gICAgZW5kRGF0ZT86IERhdGUsXG4gICAgbmV3VGl0bGU/OiBzdHJpbmcsXG4gICAgbmV3TG9jYXRpb24/OiBzdHJpbmcsXG4gICAgbmV3Tm90ZXM/OiBzdHJpbmcsXG4gICAgbmV3U3RhcnREYXRlPzogRGF0ZSxcbiAgICBuZXdFbmREYXRlPzogRGF0ZVxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb2RpZnkgYW4gZXZlbnQgd2l0aCBhZGRpdGlvbmFsIG9wdGlvbnMuIChpT1Mgb25seSlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm90ZXNdICBUaGUgZXZlbnQgbm90ZXNcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25ld1RpdGxlXSAgVGhlIG5ldyBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25ld0xvY2F0aW9uXSAgVGhlIG5ldyBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25ld05vdGVzXSAgVGhlIG5ldyBldmVudCBub3Rlc1xuICAgKiBAcGFyYW0ge0RhdGV9IFtuZXdTdGFydERhdGVdICBUaGUgbmV3IGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbbmV3RW5kRGF0ZV0gIFRoZSBuZXcgZXZlbnQgZW5kIGRhdGVcbiAgICogQHBhcmFtIHtDYWxlbmRhck9wdGlvbnN9IFtmaWx0ZXJPcHRpb25zXSBFdmVudCBPcHRpb25zLCBzZWUgYGdldENhbGVuZGFyT3B0aW9uc2BcbiAgICogQHBhcmFtIHtDYWxlbmRhck9wdGlvbnN9IFtuZXdPcHRpb25zXSAgTmV3IGV2ZW50IG9wdGlvbnMsIHNlZSBgZ2V0Q2FsZW5kYXJPcHRpb25zYFxuICAgKiBAcmV0dXJuIFJldHVybnMgYSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddXG4gIH0pXG4gIG1vZGlmeUV2ZW50V2l0aE9wdGlvbnMoXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgbG9jYXRpb24/OiBzdHJpbmcsXG4gICAgbm90ZXM/OiBzdHJpbmcsXG4gICAgc3RhcnREYXRlPzogRGF0ZSxcbiAgICBlbmREYXRlPzogRGF0ZSxcbiAgICBuZXdUaXRsZT86IHN0cmluZyxcbiAgICBuZXdMb2NhdGlvbj86IHN0cmluZyxcbiAgICBuZXdOb3Rlcz86IHN0cmluZyxcbiAgICBuZXdTdGFydERhdGU/OiBEYXRlLFxuICAgIG5ld0VuZERhdGU/OiBEYXRlLFxuICAgIGZpbHRlck9wdGlvbnM/OiBDYWxlbmRhck9wdGlvbnMsXG4gICAgbmV3T3B0aW9ucz86IENhbGVuZGFyT3B0aW9uc1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYW4gZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhdGlvbl0gIFRoZSBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2VuZERhdGVdICBUaGUgZXZlbnQgZW5kIGRhdGVcbiAgICogQHJldHVybiBSZXR1cm5zIGEgUHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWxldGVFdmVudChcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBsb2NhdGlvbj86IHN0cmluZyxcbiAgICBub3Rlcz86IHN0cmluZyxcbiAgICBzdGFydERhdGU/OiBEYXRlLFxuICAgIGVuZERhdGU/OiBEYXRlXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbiBldmVudCBmcm9tIHRoZSBzcGVjaWZpZWQgQ2FsZW5kYXIuIChpT1Mgb25seSlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm90ZXNdICBUaGUgZXZlbnQgbm90ZXNcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FsZW5kYXJOYW1lXG4gICAqIEByZXR1cm4gUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ11cbiAgfSlcbiAgZGVsZXRlRXZlbnRGcm9tTmFtZWRDYWxlbmRhcihcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBsb2NhdGlvbj86IHN0cmluZyxcbiAgICBub3Rlcz86IHN0cmluZyxcbiAgICBzdGFydERhdGU/OiBEYXRlLFxuICAgIGVuZERhdGU/OiBEYXRlLFxuICAgIGNhbGVuZGFyTmFtZT86IHN0cmluZ1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIHRoZSBjYWxlbmRhciBhdCB0aGUgc3BlY2lmaWVkIGRhdGUuXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBUaGUgZGF0ZSB5b3Ugd2FudCB0byBvcGVuIHRoZSBjYWxlbmRhciBvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFByb21pc2UgcmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb3BlbkNhbGVuZGFyKGRhdGU6IERhdGUpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsTaskPageModule", function() { return DetailsTaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_task__ = __webpack_require__(1109);
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
//# sourceMappingURL=2.js.map