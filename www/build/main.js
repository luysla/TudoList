webpackJsonp([17],{

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AuthServiceModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_auth__ = __webpack_require__(143);
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

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(74);
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
        this.tab5Root = 'MyProjectsPage';
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

/***/ 263:
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
webpackEmptyAsyncContext.id = 263;

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-group/add-group.module": [
		861,
		16
	],
	"../pages/add-list/add-list.module": [
		862,
		15
	],
	"../pages/add-project/add-project.module": [
		863,
		14
	],
	"../pages/completed-tasks/completed-tasks.module": [
		864,
		13
	],
	"../pages/details-task/details-task.module": [
		865,
		12
	],
	"../pages/home/home.module": [
		866,
		2
	],
	"../pages/lists/lists.module": [
		867,
		11
	],
	"../pages/login-firebase/login-firebase.module": [
		868,
		10
	],
	"../pages/my-projects/my-projects.module": [
		869,
		9
	],
	"../pages/my-tasks/my-tasks.module": [
		870,
		8
	],
	"../pages/register-firebase/register-firebase.module": [
		871,
		7
	],
	"../pages/search-user-collaborator/search-user-collaborator.module": [
		872,
		1
	],
	"../pages/search-user/search-user.module": [
		873,
		0
	],
	"../pages/star-projects/star-projects.module": [
		874,
		6
	],
	"../pages/subtasks/subtasks.module": [
		875,
		5
	],
	"../pages/tasks/tasks.module": [
		876,
		4
	],
	"../pages/user-profile/user-profile.module": [
		877,
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
webpackAsyncContext.id = 305;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 536:
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
                }],
            id_collaborator: user.user_uid
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

/***/ 537:
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
    ProjectService.prototype.editProject = function (id_project, new_name, new_description) {
        return this.afs.collection("projects").doc("" + id_project).update({
            name: new_name,
            description: new_description
        });
    };
    ProjectService.prototype.deleteProject = function (id_project) {
        return this.afs.collection("projects").doc("" + id_project).delete();
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["AngularFirestore"]])
    ], ProjectService);
    return ProjectService;
}());

//# sourceMappingURL=project-service.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GroupServiceModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(98);
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
    GroupService.prototype.addMemberGroup = function (id_group, member) {
        return this.afs.collection('groups').doc("" + id_group).update({
            members: __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"].FieldValue.arrayUnion({ 'user_uid': member.user_uid, 'name': member.name, 'username': member.username, 'photo': member.photo })
        });
    };
    GroupService.prototype.deleteGroup = function (id_group) {
        return this.afs.collection("groups").doc("" + id_group).delete();
    };
    GroupService.prototype.deleteMemberGroup = function (id_group, member) {
        return this.afs.collection("groups").doc("" + id_group).update({
            members: __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"].FieldValue.arrayRemove({ 'user_uid': member.user_uid, 'name': member.name, 'username': member.username, 'photo': member.photo })
        });
    };
    GroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"]])
    ], GroupService);
    return GroupService;
}());

//# sourceMappingURL=group-service.js.map

/***/ }),

/***/ 557:
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

/***/ 559:
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
        return this.afs.collection('subtasks').doc("" + id_subtask).delete();
    };
    /*  restoreSubtask(id_subtask: string): Promise<any>{
       return this.afs.collection('subtasks').doc(`${id_subtask}`).delete();
     } */
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

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(672);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_calendar__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_image_loader__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__credentials__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire_storage__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_service__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_project_service__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_list_service__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_group_service__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_task_service__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_subtask_service__ = __webpack_require__(559);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
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
                        { loadChildren: '../pages/my-projects/my-projects.module#MyProjectsPageModule', name: 'MyProjectsPage', segment: 'meus-projetos', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_11__credentials__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__["AngularFirestoreModule"].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_14__angular_fire_storage__["a" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_image_loader__["a" /* IonicImageLoader */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["AngularFireDatabase"],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_15__providers_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_project_service__["a" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_17__providers_list_service__["a" /* ListService */],
                __WEBPACK_IMPORTED_MODULE_18__providers_group_service__["a" /* GroupService */],
                __WEBPACK_IMPORTED_MODULE_19__providers_task_service__["a" /* TaskService */],
                __WEBPACK_IMPORTED_MODULE_20__providers_subtask_service__["a" /* SubtaskService */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_calendar__["a" /* Calendar */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 350,
	"./af.js": 350,
	"./ar": 351,
	"./ar-dz": 352,
	"./ar-dz.js": 352,
	"./ar-kw": 353,
	"./ar-kw.js": 353,
	"./ar-ly": 354,
	"./ar-ly.js": 354,
	"./ar-ma": 355,
	"./ar-ma.js": 355,
	"./ar-sa": 356,
	"./ar-sa.js": 356,
	"./ar-tn": 357,
	"./ar-tn.js": 357,
	"./ar.js": 351,
	"./az": 358,
	"./az.js": 358,
	"./be": 359,
	"./be.js": 359,
	"./bg": 360,
	"./bg.js": 360,
	"./bm": 361,
	"./bm.js": 361,
	"./bn": 362,
	"./bn.js": 362,
	"./bo": 363,
	"./bo.js": 363,
	"./br": 364,
	"./br.js": 364,
	"./bs": 365,
	"./bs.js": 365,
	"./ca": 366,
	"./ca.js": 366,
	"./cs": 367,
	"./cs.js": 367,
	"./cv": 368,
	"./cv.js": 368,
	"./cy": 369,
	"./cy.js": 369,
	"./da": 370,
	"./da.js": 370,
	"./de": 371,
	"./de-at": 372,
	"./de-at.js": 372,
	"./de-ch": 373,
	"./de-ch.js": 373,
	"./de.js": 371,
	"./dv": 374,
	"./dv.js": 374,
	"./el": 375,
	"./el.js": 375,
	"./en-SG": 376,
	"./en-SG.js": 376,
	"./en-au": 377,
	"./en-au.js": 377,
	"./en-ca": 378,
	"./en-ca.js": 378,
	"./en-gb": 379,
	"./en-gb.js": 379,
	"./en-ie": 380,
	"./en-ie.js": 380,
	"./en-il": 381,
	"./en-il.js": 381,
	"./en-nz": 382,
	"./en-nz.js": 382,
	"./eo": 383,
	"./eo.js": 383,
	"./es": 384,
	"./es-do": 385,
	"./es-do.js": 385,
	"./es-us": 386,
	"./es-us.js": 386,
	"./es.js": 384,
	"./et": 387,
	"./et.js": 387,
	"./eu": 388,
	"./eu.js": 388,
	"./fa": 389,
	"./fa.js": 389,
	"./fi": 390,
	"./fi.js": 390,
	"./fo": 391,
	"./fo.js": 391,
	"./fr": 392,
	"./fr-ca": 393,
	"./fr-ca.js": 393,
	"./fr-ch": 394,
	"./fr-ch.js": 394,
	"./fr.js": 392,
	"./fy": 395,
	"./fy.js": 395,
	"./ga": 396,
	"./ga.js": 396,
	"./gd": 397,
	"./gd.js": 397,
	"./gl": 398,
	"./gl.js": 398,
	"./gom-latn": 399,
	"./gom-latn.js": 399,
	"./gu": 400,
	"./gu.js": 400,
	"./he": 401,
	"./he.js": 401,
	"./hi": 402,
	"./hi.js": 402,
	"./hr": 403,
	"./hr.js": 403,
	"./hu": 404,
	"./hu.js": 404,
	"./hy-am": 405,
	"./hy-am.js": 405,
	"./id": 406,
	"./id.js": 406,
	"./is": 407,
	"./is.js": 407,
	"./it": 408,
	"./it-ch": 409,
	"./it-ch.js": 409,
	"./it.js": 408,
	"./ja": 410,
	"./ja.js": 410,
	"./jv": 411,
	"./jv.js": 411,
	"./ka": 412,
	"./ka.js": 412,
	"./kk": 413,
	"./kk.js": 413,
	"./km": 414,
	"./km.js": 414,
	"./kn": 415,
	"./kn.js": 415,
	"./ko": 416,
	"./ko.js": 416,
	"./ku": 417,
	"./ku.js": 417,
	"./ky": 418,
	"./ky.js": 418,
	"./lb": 419,
	"./lb.js": 419,
	"./lo": 420,
	"./lo.js": 420,
	"./lt": 421,
	"./lt.js": 421,
	"./lv": 422,
	"./lv.js": 422,
	"./me": 423,
	"./me.js": 423,
	"./mi": 424,
	"./mi.js": 424,
	"./mk": 425,
	"./mk.js": 425,
	"./ml": 426,
	"./ml.js": 426,
	"./mn": 427,
	"./mn.js": 427,
	"./mr": 428,
	"./mr.js": 428,
	"./ms": 429,
	"./ms-my": 430,
	"./ms-my.js": 430,
	"./ms.js": 429,
	"./mt": 431,
	"./mt.js": 431,
	"./my": 432,
	"./my.js": 432,
	"./nb": 433,
	"./nb.js": 433,
	"./ne": 434,
	"./ne.js": 434,
	"./nl": 435,
	"./nl-be": 436,
	"./nl-be.js": 436,
	"./nl.js": 435,
	"./nn": 437,
	"./nn.js": 437,
	"./pa-in": 438,
	"./pa-in.js": 438,
	"./pl": 439,
	"./pl.js": 439,
	"./pt": 440,
	"./pt-br": 441,
	"./pt-br.js": 441,
	"./pt.js": 440,
	"./ro": 442,
	"./ro.js": 442,
	"./ru": 443,
	"./ru.js": 443,
	"./sd": 444,
	"./sd.js": 444,
	"./se": 445,
	"./se.js": 445,
	"./si": 446,
	"./si.js": 446,
	"./sk": 447,
	"./sk.js": 447,
	"./sl": 448,
	"./sl.js": 448,
	"./sq": 449,
	"./sq.js": 449,
	"./sr": 450,
	"./sr-cyrl": 451,
	"./sr-cyrl.js": 451,
	"./sr.js": 450,
	"./ss": 452,
	"./ss.js": 452,
	"./sv": 453,
	"./sv.js": 453,
	"./sw": 454,
	"./sw.js": 454,
	"./ta": 455,
	"./ta.js": 455,
	"./te": 456,
	"./te.js": 456,
	"./tet": 457,
	"./tet.js": 457,
	"./tg": 458,
	"./tg.js": 458,
	"./th": 459,
	"./th.js": 459,
	"./tl-ph": 460,
	"./tl-ph.js": 460,
	"./tlh": 461,
	"./tlh.js": 461,
	"./tr": 462,
	"./tr.js": 462,
	"./tzl": 463,
	"./tzl.js": 463,
	"./tzm": 464,
	"./tzm-latn": 465,
	"./tzm-latn.js": 465,
	"./tzm.js": 464,
	"./ug-cn": 466,
	"./ug-cn.js": 466,
	"./uk": 467,
	"./uk.js": 467,
	"./ur": 468,
	"./ur.js": 468,
	"./uz": 469,
	"./uz-latn": 470,
	"./uz-latn.js": 470,
	"./uz.js": 469,
	"./vi": 471,
	"./vi.js": 471,
	"./x-pseudo": 472,
	"./x-pseudo.js": 472,
	"./yo": 473,
	"./yo.js": 473,
	"./zh-cn": 474,
	"./zh-cn.js": 474,
	"./zh-hk": 475,
	"./zh-hk.js": 475,
	"./zh-tw": 476,
	"./zh-tw.js": 476
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
webpackContext.id = 813;

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_auth__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(245);
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
            { name: 'Minhas tarefas', component: 'MyTasksPage', icon: 'list', index: 3 },
            { name: 'Meus projetos', component: 'MyProjectsPage', icon: 'md-folder-open', index: 4 }
        ];
        this.pagesConfig = [
            { name: 'Configurações', component: 'UserProfilePage', icon: 'settings', index: 2 }
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

/***/ 847:
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

},[561]);
//# sourceMappingURL=main.js.map