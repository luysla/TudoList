webpackJsonp([16],{

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AuthServiceModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_auth__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthServiceModule = /** @class */ (function () {
    function AuthServiceModule() {
    }
    AuthServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({ providers: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return AuthService; })] })
    ], AuthServiceModule);
    return AuthServiceModule;
}());

var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs) {
        this.afAuth = afAuth;
        this.afs = afs;
    }
    AuthService.prototype.newUser = function (user) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    AuthService.prototype.setProfile = function (profile) {
        return this.afs.doc("users/" + profile.user_uid).set(profile);
    };
    AuthService.prototype.setProfilePhoto = function (file, user_uid) {
        var ref = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        return ref.child("/users/" + user_uid).put(file);
    };
    AuthService.prototype.login = function (user) {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.sendEmailVerification = function () {
        return __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().onAuthStateChanged(function (user) {
            user.sendEmailVerification();
        });
    };
    AuthService.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = /** @class */ (function () {
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tab1Root = 'HomePage';
        this.tab2Root = 'StarProjectsPage';
        this.tab3Root = 'UserProfilePage';
        this.tab4Root = 'MyTasksPage';
        this.tab5Root = 'MyTasksPage';
        this.myIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="myIndex">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Projetos favoritos" tabIcon="star"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Perfil" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Perfil" tabIcon="person" show="false"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Perfil" tabIcon="person" show="false"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 261;

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-group/add-group.module": [
		848,
		15
	],
	"../pages/add-list/add-list.module": [
		849,
		14
	],
	"../pages/add-project/add-project.module": [
		850,
		13
	],
	"../pages/completed-tasks/completed-tasks.module": [
		851,
		12
	],
	"../pages/details-task/details-task.module": [
		852,
		11
	],
	"../pages/home/home.module": [
		853,
		2
	],
	"../pages/lists/lists.module": [
		854,
		10
	],
	"../pages/login-firebase/login-firebase.module": [
		855,
		9
	],
	"../pages/my-tasks/my-tasks.module": [
		856,
		8
	],
	"../pages/register-firebase/register-firebase.module": [
		857,
		7
	],
	"../pages/search-user-collaborator/search-user-collaborator.module": [
		858,
		1
	],
	"../pages/search-user/search-user.module": [
		859,
		0
	],
	"../pages/star-projects/star-projects.module": [
		860,
		6
	],
	"../pages/subtasks/subtasks.module": [
		861,
		5
	],
	"../pages/tasks/tasks.module": [
		862,
		4
	],
	"../pages/user-profile/user-profile.module": [
		863,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 302;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TaskServiceModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskServiceModule = /** @class */ (function () {
    function TaskServiceModule() {
    }
    TaskServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({ providers: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return TaskService; })] })
    ], TaskServiceModule);
    return TaskServiceModule;
}());

var TaskService = /** @class */ (function () {
    function TaskService(afs) {
        this.afs = afs;
    }
    TaskService.prototype.newTask = function (task) {
        return this.afs.collection('tasks').add(task);
    };
    TaskService.prototype.doneTask = function (id_task) {
        return this.afs.collection('tasks').doc("" + id_task).update({
            done: 1
        });
    };
    TaskService.prototype.restoreTask = function (id_task) {
        return this.afs.collection('tasks').doc("" + id_task).update({
            done: 0
        });
    };
    TaskService.prototype.addPriorityTask = function (id_task, priority, color) {
        return this.afs.collection('tasks').doc("" + id_task).update({
            priority: priority,
            color_priority: color
        });
    };
    TaskService.prototype.addReminder = function (id_task, name, local, description, initial_date, final_date) {
        return this.afs.collection('tasks').doc("" + id_task).update({
            reminder: [{
                    name: name,
                    local: local,
                    description: description,
                    initial_date: __WEBPACK_IMPORTED_MODULE_2_moment___default()(initial_date).toDate(),
                    final_date: __WEBPACK_IMPORTED_MODULE_2_moment___default()(final_date).toDate(),
                    fd: __WEBPACK_IMPORTED_MODULE_2_moment___default()(final_date).format("DD MMM")
                }]
        });
    };
    TaskService.prototype.addUserCollaborator = function (id_task, user) {
        return this.afs.collection('tasks').doc("" + id_task).update({
            collaborator: [{
                    uid: user.user_uid,
                    name: user.name,
                    username: user.username,
                    photo: user.photo
                }]
        });
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"]])
    ], TaskService);
    return TaskService;
}());

//# sourceMappingURL=task-service.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GroupServiceModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupServiceModule = /** @class */ (function () {
    function GroupServiceModule() {
    }
    GroupServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({ providers: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return GroupService; })] })
    ], GroupServiceModule);
    return GroupServiceModule;
}());

var GroupService = /** @class */ (function () {
    function GroupService(afs) {
        this.afs = afs;
    }
    GroupService.prototype.addGroup = function (group) {
        return this.afs.collection('groups').add(group);
    };
    GroupService.prototype.addMemberGroup = function (id_group, member_uid, member_name, member_photo) {
        return this.afs.collection('groups').doc("" + id_group).update({
            members: __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"].FieldValue.arrayUnion({ 'member_uid': member_uid, 'member_name': member_name, 'member_photo': member_photo })
        });
    };
    GroupService.prototype.deleteGroup = function (id_group) {
        return this.afs.collection("groups").doc("" + id_group).delete();
    };
    GroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"]])
    ], GroupService);
    return GroupService;
}());

//# sourceMappingURL=group-service.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProjectServiceModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectServiceModule = /** @class */ (function () {
    function ProjectServiceModule() {
    }
    ProjectServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({ providers: [Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* forwardRef */])(function () { return ProjectService; })] })
    ], ProjectServiceModule);
    return ProjectServiceModule;
}());

var ProjectService = /** @class */ (function () {
    function ProjectService(afs) {
        this.afs = afs;
    }
    ProjectService.prototype.newProject = function (project) {
        return this.afs.collection("projects").add(project);
    };
    ProjectService.prototype.starProject = function (id_project, flag) {
        return this.afs.collection("projects").doc("" + id_project).update({
            star: flag
        });
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["AngularFirestore"]])
    ], ProjectService);
    return ProjectService;
}());

//# sourceMappingURL=project-service.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ListServiceModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListServiceModule = /** @class */ (function () {
    function ListServiceModule() {
    }
    ListServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({ providers: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return ListService; })] })
    ], ListServiceModule);
    return ListServiceModule;
}());

var ListService = /** @class */ (function () {
    function ListService(afs) {
        this.afs = afs;
    }
    ListService.prototype.newList = function (list) {
        return this.afs.collection("lists").add(list);
    };
    ListService.prototype.editList = function (id_list, new_name) {
        return this.afs.collection("lists").doc("" + id_list).update({
            name: new_name
        });
    };
    ListService.prototype.deleteList = function (id_list) {
        return this.afs.collection("lists").doc("" + id_list).delete();
    };
    ListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"]])
    ], ListService);
    return ListService;
}());

//# sourceMappingURL=list-service.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SubtaskServiceModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubtaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubtaskServiceModule = /** @class */ (function () {
    function SubtaskServiceModule() {
    }
    SubtaskServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({ providers: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return SubtaskService; })] })
    ], SubtaskServiceModule);
    return SubtaskServiceModule;
}());

var SubtaskService = /** @class */ (function () {
    function SubtaskService(afs) {
        this.afs = afs;
    }
    SubtaskService.prototype.newSubtask = function (subtask) {
        return this.afs.collection('subtasks').add(subtask);
    };
    SubtaskService.prototype.doneSubtask = function (id_subtask) {
        return this.afs.collection('tasks').doc("" + id_subtask).update({
            done: 1
        });
    };
    SubtaskService.prototype.restoreSubtask = function (id_subtask) {
        return this.afs.collection('tasks').doc("" + id_subtask).update({
            done: 0
        });
    };
    SubtaskService.prototype.addPrioritySubtask = function (id_subtask, priority, color) {
        return this.afs.collection('subtasks').doc("" + id_subtask).update({
            priority: priority,
            color_priority: color
        });
    };
    SubtaskService.prototype.addReminderSubtask = function (id_subtask, name, local, description, initial_date, final_date) {
        return this.afs.collection('subtasks').doc("" + id_subtask).update({
            reminder: [{
                    name: name,
                    local: local,
                    description: description,
                    initial_date: __WEBPACK_IMPORTED_MODULE_2_moment___default()(initial_date).toDate(),
                    final_date: __WEBPACK_IMPORTED_MODULE_2_moment___default()(final_date).toDate(),
                    fd: __WEBPACK_IMPORTED_MODULE_2_moment___default()(final_date).format("DD MMM")
                }]
        });
    };
    SubtaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"]])
    ], SubtaskService);
    return SubtaskService;
}());

//# sourceMappingURL=subtask-service.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(662);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_calendar__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__credentials__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire_storage__ = __webpack_require__(844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_service__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_project_service__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_list_service__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_group_service__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_task_service__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_subtask_service__ = __webpack_require__(550);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/* Imports das paginas */

/* Imports do Firebase */






/* Imports dos Providers */






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-group/add-group.module#AddGroupPageModule', name: 'AddGroupPage', segment: 'novo-grupo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-list/add-list.module#AddListPageModule', name: 'AddListPage', segment: 'nova-lista', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-project/add-project.module#AddProjectPageModule', name: 'AddProjectPage', segment: 'novo-projeto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/completed-tasks/completed-tasks.module#CompletedTasksPageModule', name: 'CompletedTasksPage', segment: 'tarefas-concluidas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details-task/details-task.module#DetailsTaskPageModule', name: 'DetailsTaskPage', segment: 'detalhes-tarefa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lists/lists.module#ListsPageModule', name: 'ListsPage', segment: 'listas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-firebase/login-firebase.module#LoginFirebasePageModule', name: 'LoginFirebasePage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-tasks/my-tasks.module#MyTasksPageModule', name: 'MyTasksPage', segment: 'Minhas tarefas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-firebase/register-firebase.module#RegisterFirebasePageModule', name: 'RegisterFirebasePage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-user-collaborator/search-user-collaborator.module#SearchUserCollaboratorPageModule', name: 'SearchUserCollaboratorPage', segment: 'pesquisar-usuario-colaborador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-user/search-user.module#SearchUserPageModule', name: 'SearchUserPage', segment: 'pesquisar-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/star-projects/star-projects.module#StarProjectsPageModule', name: 'StarProjectsPage', segment: 'projetos-favoritos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subtasks/subtasks.module#SubtasksPageModule', name: 'SubtasksPage', segment: 'subtarefas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tasks/tasks.module#TasksPageModule', name: 'TasksPage', segment: 'tarefas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-profile/user-profile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'perfil', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_10__credentials__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__["AngularFirestoreModule"].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_13__angular_fire_storage__["a" /* AngularFireStorageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["AngularFireDatabase"],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_14__providers_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_15__providers_project_service__["a" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_list_service__["a" /* ListService */],
                __WEBPACK_IMPORTED_MODULE_17__providers_group_service__["a" /* GroupService */],
                __WEBPACK_IMPORTED_MODULE_18__providers_task_service__["a" /* TaskService */],
                __WEBPACK_IMPORTED_MODULE_19__providers_subtask_service__["a" /* SubtaskService */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_calendar__["a" /* Calendar */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 347,
	"./af.js": 347,
	"./ar": 348,
	"./ar-dz": 349,
	"./ar-dz.js": 349,
	"./ar-kw": 350,
	"./ar-kw.js": 350,
	"./ar-ly": 351,
	"./ar-ly.js": 351,
	"./ar-ma": 352,
	"./ar-ma.js": 352,
	"./ar-sa": 353,
	"./ar-sa.js": 353,
	"./ar-tn": 354,
	"./ar-tn.js": 354,
	"./ar.js": 348,
	"./az": 355,
	"./az.js": 355,
	"./be": 356,
	"./be.js": 356,
	"./bg": 357,
	"./bg.js": 357,
	"./bm": 358,
	"./bm.js": 358,
	"./bn": 359,
	"./bn.js": 359,
	"./bo": 360,
	"./bo.js": 360,
	"./br": 361,
	"./br.js": 361,
	"./bs": 362,
	"./bs.js": 362,
	"./ca": 363,
	"./ca.js": 363,
	"./cs": 364,
	"./cs.js": 364,
	"./cv": 365,
	"./cv.js": 365,
	"./cy": 366,
	"./cy.js": 366,
	"./da": 367,
	"./da.js": 367,
	"./de": 368,
	"./de-at": 369,
	"./de-at.js": 369,
	"./de-ch": 370,
	"./de-ch.js": 370,
	"./de.js": 368,
	"./dv": 371,
	"./dv.js": 371,
	"./el": 372,
	"./el.js": 372,
	"./en-SG": 373,
	"./en-SG.js": 373,
	"./en-au": 374,
	"./en-au.js": 374,
	"./en-ca": 375,
	"./en-ca.js": 375,
	"./en-gb": 376,
	"./en-gb.js": 376,
	"./en-ie": 377,
	"./en-ie.js": 377,
	"./en-il": 378,
	"./en-il.js": 378,
	"./en-nz": 379,
	"./en-nz.js": 379,
	"./eo": 380,
	"./eo.js": 380,
	"./es": 381,
	"./es-do": 382,
	"./es-do.js": 382,
	"./es-us": 383,
	"./es-us.js": 383,
	"./es.js": 381,
	"./et": 384,
	"./et.js": 384,
	"./eu": 385,
	"./eu.js": 385,
	"./fa": 386,
	"./fa.js": 386,
	"./fi": 387,
	"./fi.js": 387,
	"./fo": 388,
	"./fo.js": 388,
	"./fr": 389,
	"./fr-ca": 390,
	"./fr-ca.js": 390,
	"./fr-ch": 391,
	"./fr-ch.js": 391,
	"./fr.js": 389,
	"./fy": 392,
	"./fy.js": 392,
	"./ga": 393,
	"./ga.js": 393,
	"./gd": 394,
	"./gd.js": 394,
	"./gl": 395,
	"./gl.js": 395,
	"./gom-latn": 396,
	"./gom-latn.js": 396,
	"./gu": 397,
	"./gu.js": 397,
	"./he": 398,
	"./he.js": 398,
	"./hi": 399,
	"./hi.js": 399,
	"./hr": 400,
	"./hr.js": 400,
	"./hu": 401,
	"./hu.js": 401,
	"./hy-am": 402,
	"./hy-am.js": 402,
	"./id": 403,
	"./id.js": 403,
	"./is": 404,
	"./is.js": 404,
	"./it": 405,
	"./it-ch": 406,
	"./it-ch.js": 406,
	"./it.js": 405,
	"./ja": 407,
	"./ja.js": 407,
	"./jv": 408,
	"./jv.js": 408,
	"./ka": 409,
	"./ka.js": 409,
	"./kk": 410,
	"./kk.js": 410,
	"./km": 411,
	"./km.js": 411,
	"./kn": 412,
	"./kn.js": 412,
	"./ko": 413,
	"./ko.js": 413,
	"./ku": 414,
	"./ku.js": 414,
	"./ky": 415,
	"./ky.js": 415,
	"./lb": 416,
	"./lb.js": 416,
	"./lo": 417,
	"./lo.js": 417,
	"./lt": 418,
	"./lt.js": 418,
	"./lv": 419,
	"./lv.js": 419,
	"./me": 420,
	"./me.js": 420,
	"./mi": 421,
	"./mi.js": 421,
	"./mk": 422,
	"./mk.js": 422,
	"./ml": 423,
	"./ml.js": 423,
	"./mn": 424,
	"./mn.js": 424,
	"./mr": 425,
	"./mr.js": 425,
	"./ms": 426,
	"./ms-my": 427,
	"./ms-my.js": 427,
	"./ms.js": 426,
	"./mt": 428,
	"./mt.js": 428,
	"./my": 429,
	"./my.js": 429,
	"./nb": 430,
	"./nb.js": 430,
	"./ne": 431,
	"./ne.js": 431,
	"./nl": 432,
	"./nl-be": 433,
	"./nl-be.js": 433,
	"./nl.js": 432,
	"./nn": 434,
	"./nn.js": 434,
	"./pa-in": 435,
	"./pa-in.js": 435,
	"./pl": 436,
	"./pl.js": 436,
	"./pt": 437,
	"./pt-br": 438,
	"./pt-br.js": 438,
	"./pt.js": 437,
	"./ro": 439,
	"./ro.js": 439,
	"./ru": 440,
	"./ru.js": 440,
	"./sd": 441,
	"./sd.js": 441,
	"./se": 442,
	"./se.js": 442,
	"./si": 443,
	"./si.js": 443,
	"./sk": 444,
	"./sk.js": 444,
	"./sl": 445,
	"./sl.js": 445,
	"./sq": 446,
	"./sq.js": 446,
	"./sr": 447,
	"./sr-cyrl": 448,
	"./sr-cyrl.js": 448,
	"./sr.js": 447,
	"./ss": 449,
	"./ss.js": 449,
	"./sv": 450,
	"./sv.js": 450,
	"./sw": 451,
	"./sw.js": 451,
	"./ta": 452,
	"./ta.js": 452,
	"./te": 453,
	"./te.js": 453,
	"./tet": 454,
	"./tet.js": 454,
	"./tg": 455,
	"./tg.js": 455,
	"./th": 456,
	"./th.js": 456,
	"./tl-ph": 457,
	"./tl-ph.js": 457,
	"./tlh": 458,
	"./tlh.js": 458,
	"./tr": 459,
	"./tr.js": 459,
	"./tzl": 460,
	"./tzl.js": 460,
	"./tzm": 461,
	"./tzm-latn": 462,
	"./tzm-latn.js": 462,
	"./tzm.js": 461,
	"./ug-cn": 463,
	"./ug-cn.js": 463,
	"./uk": 464,
	"./uk.js": 464,
	"./ur": 465,
	"./ur.js": 465,
	"./uz": 466,
	"./uz-latn": 467,
	"./uz-latn.js": 467,
	"./uz.js": 466,
	"./vi": 468,
	"./vi.js": 468,
	"./x-pseudo": 469,
	"./x-pseudo.js": 469,
	"./yo": 470,
	"./yo.js": 470,
	"./zh-cn": 471,
	"./zh-cn.js": 471,
	"./zh-hk": 472,
	"./zh-hk.js": 472,
	"./zh-tw": 473,
	"./zh-tw.js": 473
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 804;

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_auth__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth, app, afs, authService) {
        var _this = this;
        this.platform = platform;
        this.afAuth = afAuth;
        this.app = app;
        this.afs = afs;
        this.authService = authService;
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                //this.app.getRootNavs()[0].setRoot(TabsPage);
                _this.userCollection = _this.afs.collection('users', function (ref) { return ref.where('user_uid', '==', user.uid); });
                _this.userDoc = _this.userCollection.valueChanges();
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]);
                console.log(user);
                unsubscribe();
            }
            else {
                //this.app.getRootNavs()[0].setRoot('LoginFirebasePage');
                _this.nav.setRoot('LoginFirebasePage');
                console.log('Sem usuario');
                unsubscribe();
            }
        });
        this.pages = [
            { name: 'Home', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */], icon: 'md-home', index: 0 },
            { name: 'Minhas tarefas', component: 'MyTasksPage', icon: 'list', index: 4 },
            { name: 'Meus projetos', component: 'HomePage', icon: 'md-folder-open', index: 5 }
        ];
        this.pagesConfig = [
            { name: 'Configurações', component: 'UserProfilePage', icon: 'settings', index: 3 }
        ];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function () {
            //this.platform.exitApp();
            //this.app.getRootNavs()[0].setRoot('LoginFirebasePage');
            window.location.reload();
            _this.nav.setRoot('LoginFirebasePage');
        }).catch(function (e) {
            alert("Erro ao sair do aplicativo!");
        });
    };
    MyApp.prototype.openPage = function (page) {
        var params = {};
        if (page.index) {
            params = { index: page.index };
        }
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            this.nav.setRoot(page.component, params);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/app/app.html"*/'<ion-menu color="dark" [content]="content">\n    <ion-header>\n    </ion-header>\n\n    <ion-content>\n      <div *ngFor="let user of userDoc | async">\n        <ion-thumbnail item-start>\n          <ion-avatar>\n            <img class="round-menu" [src]="user.photo || \'../assets/imgs/no-photo.jpg\'">\n            <p text-center style="font-weight: bold">@{{ user.username }}</p>\n          </ion-avatar>\n        </ion-thumbnail>\n      </div>\n\n      <ion-item-divider>\n        MENU\n      </ion-item-divider>\n\n      <ion-list no-lines>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{ p.name }}\n          <ion-icon color="dark" item-left [name]="p.icon"></ion-icon>\n          <!-- <ion-badge *ngIf="perfil.qtdMinhasTarefas!=0 && p.name == \'Minhas tarefas\'" color="vinho" style="border-radius: 45%" item-end>{{ perfil.qtdMinhasTarefas }}</ion-badge> -->\n        </button>\n      </ion-list>\n\n      <ion-item-divider>\n        CONTA\n      </ion-item-divider>\n\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pagesConfig" (click)="openPage(p)">\n          {{ p.name }}\n          <ion-icon color="dark" item-left [name]="p.icon"></ion-icon>\n        </button>\n      </ion-list>\n\n    </ion-content>\n    <ion-footer>\n      <ion-toolbar color="white"><!--\n        <button ion-button menuClose clear style="background-color: transparent; float: right" (click)="logout()">\n          <ion-title><ion-icon color="dark" name="exit"></ion-icon>\n          </ion-title>\n        </button> -->\n\n        <button ion-button menuClose clear full (click)="logout()">SAIR</button>\n      </ion-toolbar>\n    </ion-footer>\n  </ion-menu>\n<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyBuZU-HBv-s4N8IQ_lxo2iwPHey45E-xKs",
    authDomain: "taskapp-c33ae.firebaseapp.com",
    databaseURL: "https://taskapp-c33ae.firebaseio.com",
    projectId: "taskapp-c33ae",
    storageBucket: "taskapp-c33ae.appspot.com",
    messagingSenderId: "826268326090"
};
//# sourceMappingURL=.credentials.js.map

/***/ })

},[551]);
//# sourceMappingURL=main.js.map