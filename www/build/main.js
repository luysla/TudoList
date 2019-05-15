webpackJsonp([14],{

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AuthServiceModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_auth__ = __webpack_require__(139);
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

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(138);
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
		844,
		13
	],
	"../pages/add-list/add-list.module": [
		845,
		12
	],
	"../pages/add-project/add-project.module": [
		846,
		11
	],
	"../pages/completed-tasks/completed-tasks.module": [
		847,
		10
	],
	"../pages/details-task/details-task.module": [
		848,
		2
	],
	"../pages/home/home.module": [
		849,
		1
	],
	"../pages/lists/lists.module": [
		850,
		9
	],
	"../pages/login-firebase/login-firebase.module": [
		851,
		8
	],
	"../pages/register-firebase/register-firebase.module": [
		852,
		7
	],
	"../pages/search-user/search-user.module": [
		853,
		0
	],
	"../pages/star-projects/star-projects.module": [
		854,
		6
	],
	"../pages/subtasks/subtasks.module": [
		855,
		5
	],
	"../pages/tasks/tasks.module": [
		856,
		4
	],
	"../pages/user-profile/user-profile.module": [
		857,
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

/***/ 530:
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

/***/ 531:
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

/***/ 533:
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

/***/ 549:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(661);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__credentials__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire_storage__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_project_service__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_list_service__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_group_service__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_task_service__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_subtask_service__ = __webpack_require__(550);
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
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
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
                        { loadChildren: '../pages/register-firebase/register-firebase.module#RegisterFirebasePageModule', name: 'RegisterFirebasePage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-user/search-user.module#SearchUserPageModule', name: 'SearchUserPage', segment: 'pesquisar-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/star-projects/star-projects.module#StarProjectsPageModule', name: 'StarProjectsPage', segment: 'projetos-favoritos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subtasks/subtasks.module#SubtasksPageModule', name: 'SubtasksPage', segment: 'subtarefas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tasks/tasks.module#TasksPageModule', name: 'TasksPage', segment: 'tarefas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-profile/user-profile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'perfil', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_9__credentials__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["AngularFirestoreModule"].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_12__angular_fire_storage__["a" /* AngularFireStorageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["AngularFireDatabase"],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_13__providers_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_14__providers_project_service__["a" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_15__providers_list_service__["a" /* ListService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_group_service__["a" /* GroupService */],
                __WEBPACK_IMPORTED_MODULE_17__providers_task_service__["a" /* TaskService */],
                __WEBPACK_IMPORTED_MODULE_18__providers_subtask_service__["a" /* SubtaskService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 348,
	"./af.js": 348,
	"./ar": 349,
	"./ar-dz": 350,
	"./ar-dz.js": 350,
	"./ar-kw": 351,
	"./ar-kw.js": 351,
	"./ar-ly": 352,
	"./ar-ly.js": 352,
	"./ar-ma": 353,
	"./ar-ma.js": 353,
	"./ar-sa": 354,
	"./ar-sa.js": 354,
	"./ar-tn": 355,
	"./ar-tn.js": 355,
	"./ar.js": 349,
	"./az": 356,
	"./az.js": 356,
	"./be": 357,
	"./be.js": 357,
	"./bg": 358,
	"./bg.js": 358,
	"./bm": 359,
	"./bm.js": 359,
	"./bn": 360,
	"./bn.js": 360,
	"./bo": 361,
	"./bo.js": 361,
	"./br": 362,
	"./br.js": 362,
	"./bs": 363,
	"./bs.js": 363,
	"./ca": 364,
	"./ca.js": 364,
	"./cs": 365,
	"./cs.js": 365,
	"./cv": 366,
	"./cv.js": 366,
	"./cy": 367,
	"./cy.js": 367,
	"./da": 368,
	"./da.js": 368,
	"./de": 369,
	"./de-at": 370,
	"./de-at.js": 370,
	"./de-ch": 371,
	"./de-ch.js": 371,
	"./de.js": 369,
	"./dv": 372,
	"./dv.js": 372,
	"./el": 373,
	"./el.js": 373,
	"./en-SG": 374,
	"./en-SG.js": 374,
	"./en-au": 375,
	"./en-au.js": 375,
	"./en-ca": 376,
	"./en-ca.js": 376,
	"./en-gb": 377,
	"./en-gb.js": 377,
	"./en-ie": 378,
	"./en-ie.js": 378,
	"./en-il": 379,
	"./en-il.js": 379,
	"./en-nz": 380,
	"./en-nz.js": 380,
	"./eo": 381,
	"./eo.js": 381,
	"./es": 382,
	"./es-do": 383,
	"./es-do.js": 383,
	"./es-us": 384,
	"./es-us.js": 384,
	"./es.js": 382,
	"./et": 385,
	"./et.js": 385,
	"./eu": 386,
	"./eu.js": 386,
	"./fa": 387,
	"./fa.js": 387,
	"./fi": 388,
	"./fi.js": 388,
	"./fo": 389,
	"./fo.js": 389,
	"./fr": 390,
	"./fr-ca": 391,
	"./fr-ca.js": 391,
	"./fr-ch": 392,
	"./fr-ch.js": 392,
	"./fr.js": 390,
	"./fy": 393,
	"./fy.js": 393,
	"./ga": 394,
	"./ga.js": 394,
	"./gd": 395,
	"./gd.js": 395,
	"./gl": 396,
	"./gl.js": 396,
	"./gom-latn": 397,
	"./gom-latn.js": 397,
	"./gu": 398,
	"./gu.js": 398,
	"./he": 399,
	"./he.js": 399,
	"./hi": 400,
	"./hi.js": 400,
	"./hr": 401,
	"./hr.js": 401,
	"./hu": 402,
	"./hu.js": 402,
	"./hy-am": 403,
	"./hy-am.js": 403,
	"./id": 404,
	"./id.js": 404,
	"./is": 405,
	"./is.js": 405,
	"./it": 406,
	"./it-ch": 407,
	"./it-ch.js": 407,
	"./it.js": 406,
	"./ja": 408,
	"./ja.js": 408,
	"./jv": 409,
	"./jv.js": 409,
	"./ka": 410,
	"./ka.js": 410,
	"./kk": 411,
	"./kk.js": 411,
	"./km": 412,
	"./km.js": 412,
	"./kn": 413,
	"./kn.js": 413,
	"./ko": 414,
	"./ko.js": 414,
	"./ku": 415,
	"./ku.js": 415,
	"./ky": 416,
	"./ky.js": 416,
	"./lb": 417,
	"./lb.js": 417,
	"./lo": 418,
	"./lo.js": 418,
	"./lt": 419,
	"./lt.js": 419,
	"./lv": 420,
	"./lv.js": 420,
	"./me": 421,
	"./me.js": 421,
	"./mi": 422,
	"./mi.js": 422,
	"./mk": 423,
	"./mk.js": 423,
	"./ml": 424,
	"./ml.js": 424,
	"./mn": 425,
	"./mn.js": 425,
	"./mr": 426,
	"./mr.js": 426,
	"./ms": 427,
	"./ms-my": 428,
	"./ms-my.js": 428,
	"./ms.js": 427,
	"./mt": 429,
	"./mt.js": 429,
	"./my": 430,
	"./my.js": 430,
	"./nb": 431,
	"./nb.js": 431,
	"./ne": 432,
	"./ne.js": 432,
	"./nl": 433,
	"./nl-be": 434,
	"./nl-be.js": 434,
	"./nl.js": 433,
	"./nn": 435,
	"./nn.js": 435,
	"./pa-in": 436,
	"./pa-in.js": 436,
	"./pl": 437,
	"./pl.js": 437,
	"./pt": 438,
	"./pt-br": 439,
	"./pt-br.js": 439,
	"./pt.js": 438,
	"./ro": 440,
	"./ro.js": 440,
	"./ru": 441,
	"./ru.js": 441,
	"./sd": 442,
	"./sd.js": 442,
	"./se": 443,
	"./se.js": 443,
	"./si": 444,
	"./si.js": 444,
	"./sk": 445,
	"./sk.js": 445,
	"./sl": 446,
	"./sl.js": 446,
	"./sq": 447,
	"./sq.js": 447,
	"./sr": 448,
	"./sr-cyrl": 449,
	"./sr-cyrl.js": 449,
	"./sr.js": 448,
	"./ss": 450,
	"./ss.js": 450,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 452,
	"./sw.js": 452,
	"./ta": 453,
	"./ta.js": 453,
	"./te": 454,
	"./te.js": 454,
	"./tet": 455,
	"./tet.js": 455,
	"./tg": 456,
	"./tg.js": 456,
	"./th": 457,
	"./th.js": 457,
	"./tl-ph": 458,
	"./tl-ph.js": 458,
	"./tlh": 459,
	"./tlh.js": 459,
	"./tr": 460,
	"./tr.js": 460,
	"./tzl": 461,
	"./tzl.js": 461,
	"./tzm": 462,
	"./tzm-latn": 463,
	"./tzm-latn.js": 463,
	"./tzm.js": 462,
	"./ug-cn": 464,
	"./ug-cn.js": 464,
	"./uk": 465,
	"./uk.js": 465,
	"./ur": 466,
	"./ur.js": 466,
	"./uz": 467,
	"./uz-latn": 468,
	"./uz-latn.js": 468,
	"./uz.js": 467,
	"./vi": 469,
	"./vi.js": 469,
	"./x-pseudo": 470,
	"./x-pseudo.js": 470,
	"./yo": 471,
	"./yo.js": 471,
	"./zh-cn": 472,
	"./zh-cn.js": 472,
	"./zh-hk": 473,
	"./zh-hk.js": 473,
	"./zh-tw": 474,
	"./zh-tw.js": 474
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
webpackContext.id = 800;

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_auth__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(242);
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
    var _a, _b, _c, _d, _e, _f, _g, _h;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" ? _a : Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/app/app.html"*/'<ion-menu color="dark" [content]="content">\n    <ion-header>\n    </ion-header>\n\n    <ion-content>\n      <div *ngFor="let user of userDoc | async">\n        <ion-thumbnail item-start>\n          <ion-avatar>\n            <img class="round-menu" [src]="user.photo || \'../assets/imgs/no-photo.jpg\'">\n            <p text-center style="font-weight: bold">@{{ user.username }}</p>\n          </ion-avatar>\n        </ion-thumbnail>\n      </div>\n\n      <ion-item-divider>\n        MENU\n      </ion-item-divider>\n\n      <ion-list no-lines>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{ p.name }}\n          <ion-icon color="dark" item-left [name]="p.icon"></ion-icon>\n          <!-- <ion-badge *ngIf="perfil.qtdMinhasTarefas!=0 && p.name == \'Minhas tarefas\'" color="vinho" style="border-radius: 45%" item-end>{{ perfil.qtdMinhasTarefas }}</ion-badge> -->\n        </button>\n      </ion-list>\n\n      <ion-item-divider>\n        CONTA\n      </ion-item-divider>\n\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pagesConfig" (click)="openPage(p)">\n          {{ p.name }}\n          <ion-icon color="dark" item-left [name]="p.icon"></ion-icon>\n        </button>\n      </ion-list>\n\n    </ion-content>\n    <ion-footer>\n      <ion-toolbar color="white"><!--\n        <button ion-button menuClose clear style="background-color: transparent; float: right" (click)="logout()">\n          <ion-title><ion-icon color="dark" name="exit"></ion-icon>\n          </ion-title>\n        </button> -->\n\n        <button ion-button menuClose clear full (click)="logout()">SAIR</button>\n      </ion-toolbar>\n    </ion-footer>\n  </ion-menu>\n<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["AngularFirestore"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["AngularFirestore"]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */]) === "function" ? _h : Object])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 830:
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