webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/advantages/advantages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".validation-message{\t\n\tmargin: 0px !important;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/advantages/advantages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-h absolute\" [ngClass]=\"{'hidden': isLoaded}\">\n\t<div class=\"loader\"></div>\n</div>\n<div [ngClass]=\"{'disabled': !isLoaded}\">\n\t<textarea class='w-100' name=\"area1\" cols=\"40\"></textarea>\n\t<br />\n</div>\n<p class=\"t-left validation-message transition f-12\" [ngClass]=\"{'active': !isHidden, 'positive': isPositiveMessage}\" >{{validationMessage}}</p>\n<div class='flex-h f-start'>\n\t<div class=\"gradient-button transition\" (click)=\"saveHTML()\">Acepto</div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/advantages/advantages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvantagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdvantagesComponent = (function () {
    function AdvantagesComponent(af) {
        var _this = this;
        this.af = af;
        this.isHidden = false;
        this.isPositiveMessage = false;
        this.isLoaded = false;
        this.mainDB = af.list("/");
        af.list("/advantages").subscribe(function (resp) {
            var myContainer = document.querySelector(".nicEdit-main");
            _this.isLoaded = true;
            myContainer.innerHTML = resp[0].$value;
        });
    }
    AdvantagesComponent.prototype.ngOnInit = function () {
    };
    AdvantagesComponent.prototype.saveHTML = function () {
        var _this = this;
        this.isPositiveMessage = true;
        this.validationMessage = "Advantages section updated ";
        this.isHidden = false;
        var myContainer = document.querySelector(".nicEdit-main");
        this.mainDB.update("advantages", { value: "" + myContainer.innerHTML }).then(function () {
            setTimeout(function () { _this.isHidden = true; }, 2000);
        });
    };
    return AdvantagesComponent;
}());
AdvantagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-advantages',
        template: __webpack_require__("../../../../../src/app/advantages/advantages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/advantages/advantages.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], AdvantagesComponent);

var _a;
//# sourceMappingURL=advantages.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__panel_panel_component__ = __webpack_require__("../../../../../src/app/panel/panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__edit_posts_edit_posts_component__ = __webpack_require__("../../../../../src/app/edit-posts/edit-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__edit_desktop_edit_desktop_component__ = __webpack_require__("../../../../../src/app/edit-desktop/edit-desktop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__new_post_new_post_component__ = __webpack_require__("../../../../../src/app/new-post/new-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__send_to_send_to_component__ = __webpack_require__("../../../../../src/app/send-to/send-to.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__router_screen_router_screen_component__ = __webpack_require__("../../../../../src/app/router-screen/router-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__switchable_switchable_component__ = __webpack_require__("../../../../../src/app/switchable/switchable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__new_client_new_client_component__ = __webpack_require__("../../../../../src/app/new-client/new-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__users_modal_users_modal_component__ = __webpack_require__("../../../../../src/app/users-modal/users-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__core_filter_pipe__ = __webpack_require__("../../../../../src/app/core/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__core_upload_service__ = __webpack_require__("../../../../../src/app/core/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__edit_client_edit_client_component__ = __webpack_require__("../../../../../src/app/edit-client/edit-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__files_modal_files_modal_component__ = __webpack_require__("../../../../../src/app/files-modal/files-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__advantages_advantages_component__ = __webpack_require__("../../../../../src/app/advantages/advantages.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// New imports to update based on AngularFire2 version 4















//Providers





var firebaseConfig = {
    apiKey: "AIzaSyALt8qY3-yr5h_aeJuTvXKF2QqYds4fFe0",
    authDomain: "coacherapp-3011d.firebaseapp.com",
    databaseURL: "https://coacherapp-3011d.firebaseio.com",
    projectId: "coacherapp-3011d",
    storageBucket: "coacherapp-3011d.appspot.com",
    messagingSenderId: "859263399158"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__panel_panel_component__["a" /* PanelComponent */],
            __WEBPACK_IMPORTED_MODULE_12__edit_posts_edit_posts_component__["a" /* EditPostsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__new_post_new_post_component__["a" /* NewPostComponent */],
            __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__send_to_send_to_component__["a" /* SendToComponent */],
            __WEBPACK_IMPORTED_MODULE_17__router_screen_router_screen_component__["a" /* RouterScreenComponent */],
            __WEBPACK_IMPORTED_MODULE_18__switchable_switchable_component__["a" /* SwitchableComponent */],
            __WEBPACK_IMPORTED_MODULE_19__new_client_new_client_component__["a" /* NewClientComponent */],
            __WEBPACK_IMPORTED_MODULE_13__edit_desktop_edit_desktop_component__["a" /* EditDesktopComponent */],
            __WEBPACK_IMPORTED_MODULE_20__users_modal_users_modal_component__["a" /* UsersModalComponent */],
            __WEBPACK_IMPORTED_MODULE_24__edit_client_edit_client_component__["a" /* EditClientComponent */],
            __WEBPACK_IMPORTED_MODULE_21__core_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_25__files_modal_files_modal_component__["a" /* FilesModalComponent */],
            __WEBPACK_IMPORTED_MODULE_26__advantages_advantages_component__["a" /* AdvantagesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot([
                {
                    path: 'login',
                    component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */]
                },
                {
                    path: 'dashboard',
                    component: __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
                    children: [
                        {
                            path: 'edit',
                            component: __WEBPACK_IMPORTED_MODULE_17__router_screen_router_screen_component__["a" /* RouterScreenComponent */]
                        },
                        {
                            path: 'create',
                            component: __WEBPACK_IMPORTED_MODULE_17__router_screen_router_screen_component__["a" /* RouterScreenComponent */]
                        },
                        {
                            path: 'settings',
                            component: __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__["a" /* SettingsComponent */]
                        },
                        {
                            path: 'advantages',
                            component: __WEBPACK_IMPORTED_MODULE_26__advantages_advantages_component__["a" /* AdvantagesComponent */]
                        },
                        {
                            path: 'edit/client',
                            component: __WEBPACK_IMPORTED_MODULE_24__edit_client_edit_client_component__["a" /* EditClientComponent */]
                        },
                        {
                            path: 'edit/post',
                            component: __WEBPACK_IMPORTED_MODULE_12__edit_posts_edit_posts_component__["a" /* EditPostsComponent */]
                        },
                        {
                            path: 'edit/desktop',
                            component: __WEBPACK_IMPORTED_MODULE_13__edit_desktop_edit_desktop_component__["a" /* EditDesktopComponent */]
                        },
                        {
                            path: 'create/desktop',
                            component: __WEBPACK_IMPORTED_MODULE_13__edit_desktop_edit_desktop_component__["a" /* EditDesktopComponent */]
                        },
                        {
                            path: 'create/client',
                            component: __WEBPACK_IMPORTED_MODULE_19__new_client_new_client_component__["a" /* NewClientComponent */]
                        },
                        {
                            path: 'create/post',
                            component: __WEBPACK_IMPORTED_MODULE_14__new_post_new_post_component__["a" /* NewPostComponent */]
                        },
                        {
                            path: '**',
                            redirectTo: 'edit',
                        }
                    ]
                },
                {
                    path: '',
                    redirectTo: 'login',
                    pathMatch: 'prefix'
                },
                {
                    path: '**',
                    redirectTo: 'login'
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_22__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_23__core_upload_service__["a" /* UploadService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(afAuth, db, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.authState = null;
        this.isLogged = false;
        this.afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
            _this.isLogged = true;
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        // Returns true if user is logged in
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        // Returns current user UID
        get: function () {
            return this.authenticated ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        // Returns current user data
        get: function () {
            return this.authenticated ? this.authState : null;
        },
        enumerable: true,
        configurable: true
    });
    //// Email/Password Auth ////
    AuthService.prototype.emailSignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            _this.updateUserData();
            return true;
        })
            .catch(function (error) { console.log(error); return false; });
    };
    AuthService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            _this.updateUserData();
        })
            .catch(function (error) { return console.log(error); });
    };
    //// Helpers ////
    AuthService.prototype.updateUserData = function () {
        // Writes user name and email to realtime db
        // useful if your app displays information about users or for admin features
        var path = "users/" + this.currentUserId; // Endpoint on firebase
        var data = {
            email: this.authState.email,
            name: this.authState.displayName
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    //// Sign Out ////
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['/']);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.title.toLowerCase().includes(searchText) || it.type.toLowerCase().includes(searchText);
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/core/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = (function () {
    function UploadService(af, db) {
        this.af = af;
        this.db = db;
        this.basePath = 'uploads/';
    }
    UploadService.prototype.pushUpload = function (upload) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + upload.file.name).put(upload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
        }, function (error) {
            console.log(error);
            console.log('Erroring');
        }, function () {
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            _this.saveFileData(upload);
        });
    };
    UploadService.prototype.saveFileData = function (upload) {
        this.db.list(this.basePath + "/").push(upload);
    };
    return UploadService;
}());
UploadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireModule */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object])
], UploadService);

var _a, _b;
//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard  {\n\twidth: 80%;\n\theight: 80vh;\n\tmargin: 0 auto;\n\tmax-width: 720px;\n\tposition: relative;\t}\n\n.logo-wraper  {\n\tposition: absolute;\n\topacity: 0.2;\n\tbottom: 15px;\n\tright: 30px;\t\n\twidth: 180px;\t}\n\n.dash-content  {\n\tbackground: rgba(0,0,0,0.05);\n\twidth: 100%; margin-left: 20px;\n\tborder-radius: 10px;\n\tpadding: 20px; }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full flex-v main-container transition\">\n\t<div class=\"card dashboard flex-v space-between\">\n\t\t<div class=\"h-100 w-100 flex-h space-between\">\n\t\t\t<app-panel class='flex-v f-start'></app-panel>\n\t\t\t<div class='dash-content'>\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t<div class=\"logo-wraper flex-h\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<img src=\"./assets/images/crown-dark.png\" alt=\"Logo image\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p class=\"f-20 title\">My Reputation</p>\n\t\t\t\t\t\t<p class='f-10'>some slogan</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<footer>\n\t<p class='grey-color t-center f-12'>MyReputation admin © all rights reserved 2017</p>\n</footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(auth, router, afAuth, db) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.afAuth = afAuth;
        this.db = db;
        this.adminEmail = '';
        db.list('/admin').subscribe(function (res) {
            _this.adminEmail = res[0].$value;
            if (_this.adminEmail != auth.currentUser.email) {
                auth.signOut();
            }
        });
        afAuth.authState.subscribe(function (auth) {
            if (!auth) {
                router.navigateByUrl('/login');
            }
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-client/edit-client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-client/edit-client.component.html":
/***/ (function(module, exports) {

module.exports = "  <div id=\"details-container\" class='full-container'>\n      <div *ngFor=\"let user of users; let i = index\" class='flex-v space-between'>\n        <div class=\"card\">\n          <p>{{user.nickName}}</p>\n        </div>\n      </div>\n      <div *ngIf=\"!theresItems\" class=\"flex-v full-container\">\n      \t<p class='t-center f-24'>Aún no hay clientes</p>\n      </div>\n      <div *ngIf=\"theresItems == 1\" class='flex-v full-container'>\n      \t<div class=\"c-container\">\n      \t\t<div class=\"loader\"></div>\n      \t</div>\n      </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/edit-client/edit-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditClientComponent = (function () {
    function EditClientComponent(af) {
        var _this = this;
        this.af = af;
        this.msgVal = '';
        this.theresItems = 1; //1: waiting, 0: no items, 2: theres items
        this.usersDB = af.list('/users');
        this.usersDB.subscribe(function (resp) {
            _this.theresItems = (resp.length) ? 2 : 0;
            _this.users = resp;
        });
    }
    EditClientComponent.prototype.ngOnInit = function () {
    };
    return EditClientComponent;
}());
EditClientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-client',
        template: __webpack_require__("../../../../../src/app/edit-client/edit-client.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-client/edit-client.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], EditClientComponent);

var _a;
//# sourceMappingURL=edit-client.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-desktop/edit-desktop.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ion-android-attach{\n\tmargin: 0 10px; }\n\n.image-container{\n\toverflow-y: auto; }\n\n.gradient-button{\n\theight: 40px; }\n\n#title-container{\n\theight: 140px; }\n\n#button-container{\n\t-webkit-box-flex: 0;\n\t    -ms-flex: 0 1 120px;\n\t        flex: 0 1 120px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-desktop/edit-desktop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-v h-100\">\n\t<div #upload (click)=\"file.click()\" class=\"icon-button transition flex-h\" id=\"title-container\">\n\t\t<div class=\"flex-v\">\n\t\t\t<i class='f-30 ion-android-attach'></i>\n\t\t</div>\n\t\t<div class=\"flex-v\">\n\t\t\t<p>Adjuntar imagen para sección <b>Escritorio</b></p>\n\t\t</div>\n\t</div>\n\t<div class=\"flex-v\">\n\t\t<div class=\"image-container\">\n\t\t\t<img class='w-100' src=\"{{desktopImage}}\" alt=\"Desktop image\">\n\t\t</div>\n\t</div>\n\t<div class=\"flex-h\" id='button-container'>\n\t\t<button class=\"gradient-button transition\" [ngClass]=\"{'disabled': noFile}\" (click)=\"uploadFile()\">Enviar</button>\n\t</div>\n</div>\n<input #file type=\"file\" accept=\"image/*\" (change)=\"detectFiles(file.files)\" class='disp-none'>\n<div class=\"loader-container flex-v full-container\" [ngClass]=\"{'active': isSending}\">\n\t<p class=\"t-center f-22\">Creando nuevo post</p>\n\t<div class=\"c-container flex-h\">\n\t\t<div class=\"loader\"></div>\n\t</div>\n\t<div class=\"progress-wrapper\">\n\t\t<div class=\"progress-bar transition\" [style.width]=\"progressBarWidth\"></div>\n\t</div>\n\t<div class='flex-h'>\n\t\t<button class=\"gradient-button transition negative\">cancelar</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edit-desktop/edit-desktop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDesktopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_upload__ = __webpack_require__("../../../../../src/app/models/upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditDesktopComponent = (function () {
    function EditDesktopComponent(af) {
        var _this = this;
        this.af = af;
        this.progressBarWidth = '0%';
        this.basePath = 'uploads/';
        this.finalUrls = [];
        this.isSending = false;
        this.noFile = true;
        this.desktopDB = af.list('/desktop');
        this.desktopDB.subscribe(function (snap) {
            _this.desktopImage = snap[0].$value;
        });
        this.storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["storage"]().ref();
    }
    EditDesktopComponent.prototype.pushUpload = function (upload) {
        var _this = this;
        var uploadTask = this.storageRef.child(this.basePath + "/" + upload.file.name).put(upload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_3_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            _this.progressBarWidth = (_this.currentUpload.progress) + '%';
        }, function (error) {
            console.log(error);
            console.log('Erroring');
        }, function () {
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            _this.saveFileData(upload);
            _this.finalUrls.push({ name: upload.file.name, path: upload.url });
        });
    };
    EditDesktopComponent.prototype.uploadFile = function () {
        this.isSending = true;
        var file = this.desktopFile;
        this.currentUpload = new __WEBPACK_IMPORTED_MODULE_2__models_upload__["a" /* Upload */](file.item(0));
        this.pushUpload(this.currentUpload);
    };
    EditDesktopComponent.prototype.detectFiles = function (file) {
        this.desktopFile = file;
        this.noFile = false;
    };
    EditDesktopComponent.prototype.saveFileData = function (upload) {
        this.isSending = false;
        __WEBPACK_IMPORTED_MODULE_3_firebase_app__["database"]().ref().update({ "desktop": { "value": upload.url } });
    };
    EditDesktopComponent.prototype.ngOnInit = function () {
    };
    return EditDesktopComponent;
}());
EditDesktopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-desktop',
        template: __webpack_require__("../../../../../src/app/edit-desktop/edit-desktop.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-desktop/edit-desktop.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], EditDesktopComponent);

var _a;
//# sourceMappingURL=edit-desktop.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-posts/edit-posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 100%; }\n\n.file-container p {\n\tcolor: rgba(0,0,0,.75);\n\tfont-size: 12px;}\n\n.file-container {\n\tborder-bottom: 1px solid rgba(0,0,0,0.1);\n\tpadding: 0 10px;}\n\n.file-container:hover {\n\tbackground-color: rgba(0,0,0,0.05); }\n\n.post .title{\n    border: none;\n    font-size: 14px;\n    margin: 0px;\n    background-color: transparent;\n    opacity: 0.8;\n    border-bottom: 1px solid rgba(0,0,0,0.05);\n    padding: 0 10px; }\n\n.post textarea{\n\tborder-bottom: 1px solid rgba(0,0,0,0.05); \n\tborder: 1px solid rgba(0,0,0,.05);\n    padding: 5px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-posts/edit-posts.component.html":
/***/ (function(module, exports) {

module.exports = "  <div id=\"details-container\" class='full-container'>\n      <div *ngIf=\"theresItems == 0\" class=\"flex-v full-container\">\n      \t<p class='t-center f-24'>Aún no hay posts</p>\n      </div>\n      <div *ngIf=\"theresItems == 1\" class='flex-v full-container'>\n      \t<div class=\"c-container\">\n      \t\t<div class=\"loader\"></div>\n      \t</div>\n      </div>\n      <div *ngIf=\"theresItems == 2\" class='posts-container h-100'>\n        <div class=\"search-bar flex-h\">\n          <i class=\"ion-ios-search\"></i>\n          <input type=\"text\" placeholder=\"Busqueda por tipo o categoría\" [(ngModel)]=\"search\">\n        </div>\n        <div *ngFor=\"let post of posts | filter: search; let i = index\" class='post flex-v space-between'>\n          <div class=\"header flex-h space-between\">\n            <div class=\"flex-v\">\n              <p>Título: </p>\n            </div>\n            <input type=\"text\" id='title' name='title' class='title w-90' [(ngModel)]=\"post.title\" (keypress)=\"updateCurrentPost(post.$key, i)\">\n            <p class='icon-button transition' (click)=\"prepareForDelete(post)\">\n              <i class=\"ion-android-close\"></i>\n            </p>\n          </div>\n          <div>\n          <p>Descripción</p>\n          <textarea name=\"description\" class='description w-90' id=\"description\" cols=\"30\" rows=\"10\" [(ngModel)]=\"post.description\" (keypress)=\"updateCurrentPost(post.$key, i)\"></textarea>\n          </div>\n          <div *ngIf=\"post.files[0] != ''\">\n            <p [ngClass]=\"{'hidden': !post.files.length }\">Adjuntos: </p>\n            <div [ngClass]=\"{'hidden': !post.files.length }\" *ngFor=\"let file of post.files; let indx = index\" class=\"transition file-container flex-h space-between\">\n              <div class=\"flex-h space-between w-100\">\n                <div class=\"flex-v\">\n                  <p class=\"fw-1\">{{file.name}}</p>\n                </div>\n                <div class=\"flex-v\">\n                  <i class='red-color ion-android-close' (click)=\"deleteFile(file, post, indx, i)\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class='flex-h space-between'>\n            <div class=\"flex-h\">\n              <div #upload (click)=\"file.click(); setUpdatePost(post, i)\" class=\"icon-button transition flex-v space-around\" id=\"title-container\">\n                <i class='f-30 ion-android-attach'></i>\n              </div>\n              <div class=\"flex-v\">\n                <div class=\"flex-h\">\n                  <p>Tipo: &nbsp;</p>\n                  <p class='type'>{{ post.type }}</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"flex-h\">\n              <div class=\"flex-v\">\n                <button class='gradient-button transition' [ngClass]=\"{'disabled': !updateble[i], 'updated': updated[i]}\" (click)=\"updatePost(post, i)\">Actualizar</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n  <input #file type=\"file\" accept=\"image/*\" (change)=\"detectFiles(file.files)\" class='disp-none'>\n<div class=\"loader-container flex-v full-container\" [ngClass]=\"{'active': isSending}\">\n  <p class=\"t-center f-22\">Creando nuevo post</p>\n  <div class=\"c-container flex-h\">\n    <div class=\"loader\"></div>\n  </div>\n  <div class=\"progress-wrapper\">\n    <div class=\"progress-bar transition\" [style.width]=\"progressBarWidth\"></div>\n  </div>\n  <div class='flex-h'>\n    <button class=\"gradient-button transition negative\">cancelar</button>\n  </div>\n</div>\n\n<div class=\"loader-container transition flex-v full-container dark-color\" [ngClass]=\"{'active': deletePopUp}\">\n  <div class=\"card w-70 c-container dark-color\">\n    <div class=\"flex-h f-end\">\n      <i class=\"ion-android-close pointer\" (click)=\"deletePopUp = false\"></i>\n    </div>\n    <p class=\"t-center f-22\">Seguro desea eliminar el siguiente post?</p>\n    <p class='f-12'>Título: <b>{{postForDelete.title}}</b></p>\n    <p class='f-12'>Descripción: <b>{{postForDelete.description}}</b></p>\n    <div class='flex-h'>\n      <button class=\"gradient-button transition negative\" (click)=\"removePost(postForDelete)\">aceptar</button>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/edit-posts/edit-posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_upload__ = __webpack_require__("../../../../../src/app/models/upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditPostsComponent = (function () {
    function EditPostsComponent(af) {
        var _this = this;
        this.af = af;
        this.msgVal = '';
        this.theresItems = 1; //1: waiting, 0: no items, 2: theres items
        this.search = "";
        this.updateble = [];
        this.updated = [];
        this.isModalOpen = false;
        this.basePath = 'uploads/';
        this.selectedPost = {
            files: [""],
            title: "",
            description: ''
        };
        this.progressBarWidth = '0%';
        this.isSending = false;
        this.selectedFilesCount = 0;
        this.deletePopUp = false;
        this.postForDelete = {
            $key: ""
        };
        this.postsDB = af.list('/posts');
        this.postsDB.subscribe(function (resp) {
            _this.posts = resp.sort(function (a, b) {
                return b.date - a.date;
            });
            for (var _i = 0, _a = _this.posts; _i < _a.length; _i++) {
                var post = _a[_i];
                _this.updateble.push(false);
                _this.updated.push(false);
            }
            _this.theresItems = (resp.length) ? 2 : 0;
            _this.selectedPost = _this.posts[0];
        });
    }
    EditPostsComponent.prototype.pushUpload = function (post, upload, index, total) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + upload.file.name).put(upload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_3_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            _this.progressBarWidth = (_this.currentUpload.progress) + '%';
        }, function (error) {
            console.log(error);
            console.log('Erroring');
        }, function () {
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            _this.saveFileData(post, upload);
        });
    };
    EditPostsComponent.prototype.saveFileData = function (post, upload) {
        var _this = this;
        var finalPost = post;
        if (finalPost.files[0] == "")
            finalPost.files = [];
        finalPost.files.push({ "name": upload.name, "path": upload.url });
        this.postsDB.update(finalPost.$key, { files: finalPost.files }).then(function (e) {
            _this.isSending = false;
            _this.updateble[_this._listIndex] = false;
            setTimeout(function () { _this.updated[_this._listIndex] = false; }, 1000);
        });
    };
    EditPostsComponent.prototype.updateCurrentPost = function (postKey, index) {
        this.postToUpdate = postKey;
        this.updateble[index] = true;
    };
    EditPostsComponent.prototype.upload = function (post) {
        var _this = this;
        if (this.selectedFilesCount > 1) {
            var files_1 = this.files;
            var filesIndex = __WEBPACK_IMPORTED_MODULE_4_lodash__["range"](files_1.length);
            __WEBPACK_IMPORTED_MODULE_4_lodash__["each"](filesIndex, function (idx) {
                _this.currentUpload = new __WEBPACK_IMPORTED_MODULE_2__models_upload__["a" /* Upload */](files_1[idx]);
                _this.pushUpload(post, _this.currentUpload, idx, _this.selectedFilesCount);
            });
        }
        else {
            var file = this.files.item(0);
            this.currentUpload = new __WEBPACK_IMPORTED_MODULE_2__models_upload__["a" /* Upload */](file);
            this.pushUpload(post, this.currentUpload, 0, 1);
        }
    };
    EditPostsComponent.prototype.updatePost = function (post, index) {
        var _this = this;
        if (typeof this.files !== 'undefined' && index == this._listIndex) {
            if (this.files.length) {
                this.isSending = true;
                this.upload(post);
            }
        }
        else {
            this.postsDB.update(post.$key, post).then(function () {
                _this.updated[index] = true;
                _this.updateble[index] = false;
                setTimeout(function () { _this.updated[index] = false; }, 1000);
            });
        }
    };
    EditPostsComponent.prototype.detectFiles = function (files) {
        this.files = files;
        if (files.lenght == 0)
            this.updateble[this._listIndex] = false;
    };
    EditPostsComponent.prototype.deleteFile = function (file, selectedPost, fileIndex, listIndex) {
        this.selectedPost = selectedPost;
        var postIndex = 0;
        for (var i = 0; i < this.posts.length; i++)
            if (selectedPost.$key == this.posts[i].$key)
                postIndex = i;
        this.posts[postIndex].files.splice(fileIndex, 1);
        this.updateble[listIndex] = true;
        this.selectedPost.files.splice(postIndex, 1);
        if (this.selectedPost.files.length == 0)
            this.selectedPost.files = [""];
    };
    EditPostsComponent.prototype.setUpdatePost = function (post, listIndex) {
        this.selectedPost = post;
        this._listIndex = listIndex;
        this.updateble[this._listIndex] = true;
    };
    EditPostsComponent.prototype.openModal = function (post) {
        this.isModalOpen = true;
        this.selectedPost = post;
    };
    EditPostsComponent.prototype.prepareForDelete = function (post) {
        this.deletePopUp = true;
        this.postForDelete = post;
    };
    EditPostsComponent.prototype.removePost = function (post) {
        var _this = this;
        this.postsDB.remove(post.$key).then(function (_) {
            _this.deletePopUp = false;
        });
    };
    EditPostsComponent.prototype.ngOnInit = function () {
    };
    return EditPostsComponent;
}());
EditPostsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-posts',
        template: __webpack_require__("../../../../../src/app/edit-posts/edit-posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-posts/edit-posts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], EditPostsComponent);

var _a;
//# sourceMappingURL=edit-posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/files-modal/files-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\tposition: fixed;\n\tbackground-color: rgba(0,0,0,0.5);\n\tz-index: -1;  \n\topacity: 0 }\n\n:host.active {\n\tz-index: 999;\n\topacity: 1;  }\n\n.form-container{\n\twidth: 80%;\n\tmax-width: 400px;\n\tmargin: 0 auto 100px;  }\n\n.form-container input[type=checkbox] {\n\tmargin: 0 15px;}\n\n.form-container .f-18 {\n\theight: 20px;}\n\n.file-container p {\n\tcolor: rgba(0,0,0,.75);\n\tfont-size: 14px;}\n\n.file-container {\n\tpadding: 10px;\n\tborder-bottom: 1px solid rgba(0,0,0,0.1);\n    padding: 10px;}\n\n.file-container:hover {\n\tbackground-color: rgba(0,0,0,0.05); }\n\n.files-container{\n\tmax-height: 180px;\n\tmargin: 20px 0 5px;\n    border-radius: 10px; }\n\n.filess-container .header{\n\tcursor: pointer;\n\theight: 20px;\n\tpadding: 10px 20px 10px 10px;\n    border-bottom: 1px solid rgba(0,0,0,0.1);\n    color: #03A9F4; }\n\n .filess-container .scroll-container{\n \theight: 140px;\n\toverflow-y: auto}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/files-modal/files-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-container flex-v\">\n\t<div class=\"form-container\">\n\t\t<div class=\"flex-h space-between\" id='header'>\n\t\t\t<div class=\"flex-v\">\n\t\t\t\t<p class=\"f22\">Eliminar / Añadir archivos</p>\n\t\t\t</div>\n\t\t\t<div class=\"flex-v\">\n\t\t\t\t<i (click)=\"closeModal()\" class='ion-android-close f-22'></i>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"files-container\">\n\t\t\t<div class=\"scroll-container\">\n\t\t\t\t<div *ngFor=\"let file of files; let i = index\" class=\"transition file-container flex-h space-between\">\n\t\t\t\t\t<div class=\"flex-h space-between w-100\">\n\t\t\t\t\t\t<div class=\"flex-v\">\n\t\t\t\t\t\t\t<p class=\"fw-1\">{{file.name}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"flex-v\">\n\t\t\t\t\t\t\t<i class='red-color ion-android-close f-22'></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='flex-h f-end'>\n\t\t\t<button class=\"gradient-button transition\" (click)=\"editingDone()\">done</button>\n\t\t</div>\n\t</div>\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/files-modal/files-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilesModalComponent = (function () {
    function FilesModalComponent() {
        this.modalSender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.filesSender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isModalOpen = false;
    }
    FilesModalComponent.prototype.ngOnInit = function () {
    };
    FilesModalComponent.prototype.editingDone = function () {
        this.modalSender.emit(this.isModalOpen);
        this.filesSender.emit(this.files);
    };
    FilesModalComponent.prototype.closeModal = function () {
        this.isModalOpen = false;
        this.modalSender.emit(this.isModalOpen);
        this.files = [];
    };
    return FilesModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], FilesModalComponent.prototype, "files", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], FilesModalComponent.prototype, "modalSender", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], FilesModalComponent.prototype, "filesSender", void 0);
FilesModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-files-modal',
        template: __webpack_require__("../../../../../src/app/files-modal/files-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/files-modal/files-modal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FilesModalComponent);

var _a, _b;
//# sourceMappingURL=files-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo-wraper\t{\n\tposition: absolute;\n\ttop: 20px;\n\tleft: 20px;\t}\n\n.form-container\t{\n\twidth: 80%;\n\tmax-width: 280px;\n\tmax-height: 70vh;\n\tmin-height: 380px;\n\tmargin: 0 auto; }\n\n#forgot-link  {\n\tcolor: #1e3c7f;\n\tfont-size: 12px;\n\tmargin: 0 0 20px 0;  }\n\n.input-wrapper input {\n  margin-left: 10px;\n  padding: 0px 5px 5px 5px; }\n\n .loader{ \n  border: 2px solid #f3f3f3;\n  border-top: 2px solid #243156; \n  width: 20px;\n  height: 20px;\n  margin-bottom: 10px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo-wraper flex-h\">\n\t<div>\n\t\t<img src=\"./assets/images/crown.png\" alt=\"Logo image\">\n\t</div>\n\t<div>\n\t\t<p class=\"white-color f-20 title\">My Reputation</p>\n\t\t<p class='white-color f-10'>some slogan</p>\n\t</div>\n</div>\n\n<div class=\"full flex-v main-container transition\">\n\t<div class=\"form-container card flex\">\n\t\t<div class=\"flex-h space-between w-100\">\n\t\t\t<div class=\"cool-line\"></div>\n\t\t\t<div class='w-100 flex-v space-between'>\n\t\t\t\t<div class=\"flex-h f-start w-100\">\n\t\t\t\t\t<h2>Login</h2>\n\t\t\t\t</div>\n\t\t\t\t<form action=\"#\" class='flex-v '>\n\t\t\t\t\t<div class=\"flex-h f-start input-wrapper\">\n\t\t\t\t\t\t<i class=\"ion-android-person\"></i>\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"userData.email\" #name=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"flex-h f-start input-wrapper\">\n\t\t\t\t\t\t<i class=\"ion-android-lock\"></i>\n\t\t\t\t\t\t<input type=\"password\" placeholder=\"password\" id=\"password\" name=\"password \" [(ngModel)]=\"userData.password\" #name=\"ngModel\">\n\t\t\t\t\t\t<i class=\"ion-eye\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a routeLiner=\"forgot-password\" id='forgot-link' class='t-center'>olvidaste tu contraseña</a>\n\t\t\t\t\t<p class=\"validation-message transition f-12 t-center\" [ngClass]=\"{'active': \n\t\t\t\t\t!isValidated, 'positive': isPositiveMessage}\">{{validationMessage}}</p>\n\t\t\t\t\t<div class=\"flex-h\" [ngClass]=\"{'hidden': !isLoading}\">\n\t\t\t\t\t\t<div class=\"loader\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='c-container'>\n\t\t\t\t\t\t<button class=\"gradient-button transition\" (click)=\"login()\">login</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<div></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<footer>\n\t<p class='grey-color t-center f-12'>CoacherApp admin © all rights reserved 2017</p>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LoginComponent = (function () {
    function LoginComponent(auth, router, afAuth) {
        this.auth = auth;
        this.router = router;
        this.afAuth = afAuth;
        this.userData = {
            email: "",
            password: ""
        };
        this.isValidated = true;
        this.validationMessage = "";
        this.isLoading = false;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth) {
                router.navigateByUrl('/dashboard');
            }
        });
    }
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this.auth.emailLogin(this.userData.email, this.userData.password)];
                    case 1:
                        if (_a.sent()) {
                            this.router.navigateByUrl('/dasboard');
                            this.isLoading = false;
                        }
                        else {
                            this.validationMessage = "Wrong email or password, please try again";
                            this.isValidated = false;
                            this.isLoading = false;
                            setTimeout(function () { _this.isValidated = true; }, 5000);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/upload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
var Upload = (function () {
    function Upload(file) {
        this.createdAt = new Date();
        this.file = file;
    }
    return Upload;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ "../../../../../src/app/new-client/new-client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-container{\n\tmax-width: 350px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-client/new-client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-container flex-v space-between\">\n\t<div class=\"form-container\">\n\t\t<div class=\"flex-h space-between\">\n\t\t\t<div class=\"flex-v\">\n\t\t\t\t<h3 class=\"title\">Crear nuevo cliente</h3>\n\t\t\t</div>\n\t\t</div>\n\t\t<form action=\"#\" class='w-90 post-form'>\n\t\t\t<div class=\"flex-v f-start input-wrapper w-100\">\n\t\t\t\t<input id=\"email\" name=\"email\" type=\"text\" placeholder=\"email *\" [(ngModel)]=\"userData.email\" #name=\"ngModel\">\n\t\t\t</div>\n\t\t\t<div class=\"flex-v f-start input-wrapper w-100\">\n\t\t\t\t<input id=\"name\" name=\"name\" type=\"text\" placeholder=\"nick name (optional)\" [(ngModel)]=\"userData.nickName\" #name=\"ngModel\">\n\t\t\t</div>\n\t\t\t<div class=\"flex-v f-start input-wrapper w-100\">\n\t\t\t\t<input id=\"password\" name=\"password\" type=\"password\" placeholder=\"password *\" [(ngModel)]=\"password\" #name=\"ngModel\">\n\t\t\t</div>\n\t\t\t<div class=\"flex-v f-start input-wrapper w-100\">\n\t\t\t\t<input id=\"repeat-password\" name=\"repeat-password\" type=\"password\" placeholder=\"repeat password *\" [(ngModel)]=\"passwordRepeat\" #name=\"ngModel\">\n\t\t\t</div>\n\t\t\t<div class=\"flex-h f-start\">\n\t\t\t\t<p class=\"validation-message transition f-12\" [ngClass]=\"{'active': !isValidated, 'positive': isPositiveMessage}\">{{validationMessage}}</p>\n\t\t\t</div>\n\t\t\t<div class='flex-h f-start'>\n\t\t\t\t<button class=\"gradient-button transition\" (click)=\"validate()\">send</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"loader-container flex-v full-container\" [ngClass]=\"{'active': isSending}\">\n\t<p class=\"t-center f-22\">Creando nuevo cliente</p>\n\t<div class=\"c-container flex-h\">\n\t\t<div class=\"loader\"></div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-client/new-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewClientComponent = (function () {
    function NewClientComponent(af, auth) {
        this.af = af;
        this.auth = auth;
        this.userData = {
            email: "",
            nickName: "",
            type: "client",
            date: Date.now(),
            readedSections: {
                calendar: true,
                notification: true,
                desktop: true,
                service: true,
                advantage: true,
                rest_toom: true
            },
            posts: {
                calendar: [""],
                service: [""],
                rest_room: [""]
            },
            notifications: "on"
        };
        this.isValidated = true;
        this.isSending = false;
        this.isPositiveMessage = false;
        this.usersBD = af.list('/users');
    }
    NewClientComponent.prototype.validate = function () {
        var _this = this;
        if (this.userData.email == "")
            this.validationMessage = "Nombre de usuario obligatorio";
        else if (this.password == "")
            this.validationMessage = "Contraseña obligatoria";
        else if (this.password.length < 7)
            this.validationMessage = "La contraseña debe tener 8 o más caracteres";
        else if (this.passwordRepeat == "")
            this.validationMessage = "Repetir contraseña es obligatorio";
        else if (this.passwordRepeat != this.password)
            this.validationMessage = "Las contraseñas no coinciden";
        else {
            this.isSending = true;
            this.auth.emailSignUp(this.userData.email, this.password).then(function (a) {
                var lastUser = _this.af.list("/users", { query: {
                        orderByChild: "email",
                        equalTo: _this.userData.email,
                    } });
                lastUser.subscribe(function (res) {
                    console.log(res[0].$key);
                    _this.usersBD.update(res[0].$key, _this.userData).then(function () {
                        _this.isSending = false;
                        _this.userData = {
                            email: "",
                            nickName: "",
                            type: "client",
                            date: Date.now(),
                            readedSections: {
                                calendar: true,
                                notification: true,
                                desktop: true,
                                service: true,
                                advantage: true,
                                rest_toom: true
                            },
                            posts: {
                                calendar: [""],
                                service: [""],
                                rest_room: [""]
                            },
                            notifications: "on"
                        };
                        _this.validationMessage = "Usuario creado con éxito";
                        _this.isPositiveMessage = true;
                        _this.isValidated = false;
                        setTimeout(function () { _this.isValidated = true; _this.isPositiveMessage = false; }, 5000);
                    });
                });
            });
            return;
        }
        this.isValidated = false;
        setTimeout(function () { _this.isValidated = true; }, 5000);
    };
    NewClientComponent.prototype.ngOnInit = function () {
    };
    return NewClientComponent;
}());
NewClientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new-client',
        template: __webpack_require__("../../../../../src/app/new-client/new-client.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-client/new-client.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], NewClientComponent);

var _a, _b;
//# sourceMappingURL=new-client.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-post/new-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-container{\n\tmax-width: 350px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-post/new-post.component.html":
/***/ (function(module, exports) {

module.exports = "<app-users-modal \nclass='transition' [ngClass]=\"{'active': isModalOpen}\"\n(modalSender)=\"isModalOpen = $event\" (usersSender)=\"selectedUsers = $event\"></app-users-modal>\n\n<div class=\"full-container flex-v space-between\">\n\t<div class=\"form-container transition\">\n\t\t<div class=\"flex-h space-between\">\n\t\t\t<div class=\"flex-v\">\n\t\t\t\t<p class=\"title f-16\">Crear un nuevo <span class='f-18'><b>{{ postData.type }}</b></span> post</p>\n\t\t\t</div>\n\t\t\t<div class=\"flex-h f-start light-button transition\" (click)=\"openModal()\">\n\t\t\t\t<div class='flex-h'>\n\t\t\t\t\t<div class=\"flex-v\">\n\t\t\t\t\t\t<p>Enviar a</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"flex-v\">\n\t\t\t\t\t\t<i class='f-22 ion-android-arrow-forward'></i>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<form action=\"#\" class='w-100 post-form'>\n\t\t\t<div class=\"flex-v f-start input-wrapper w-100\">\n\t\t\t\t<input id=\"title\" name=\"title\" type=\"text\" placeholder=\"post title\" [(ngModel)]=\"postData.title\" #name=\"ngModel\">\n\t\t\t</div>\n\t\t\t<textarea id=\"description\" name=\"description\" type=\"text\" placeholder=\"post description\" [(ngModel)]=\"postData.description\" #name=\"ngModel\" cols=\"30\" rows=\"5\" class='w-100'></textarea>\n\t\t\t<div class=\"flex-h space-between\">\n\t\t\t\t<div class=\"flex-v transition\" [ngClass]=\"{'hidden': postData.type != 'calendar'}\">\n\t\t\t\t\t<p class='f-12'>Archivos para subir: {{ selectedFilesCount || 0 }}</p>\n\t\t\t\t</div>\n\t\t\t\t<div class='flex-h'>\n\t\t\t\t\t<div #upload (click)=\"file.click()\" class=\"icon-button transition\" [ngClass]=\"{'disabled': \n\t\t\t\t\tpostData.type == 'service' ||\n\t\t\t\t\tpostData.type == 'rest_room'}\">\n\t\t\t\t\t\t<i class='f-30 ion-android-attach'></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p>&nbsp;&nbsp;&nbsp;</p>\n\t\t\t\t\t<app-switchable \n\t\t\t\t\tclass='f-30 flex-v' \n\t\t\t\t\ticonOn=\"ion-android-notifications\" \n\t\t\t\t\ticonOff=\"ion-android-notifications-off\"\n\t\t\t\t\t[ngClass]=\"{'disabled': \n\t\t\t\t\tpostData.type == 'service'}\"\n\t\t\t\t\t[state]=\"postData.notification\"\n\t\t\t\t\t(sender)=\"notificable = $event\"></app-switchable>\n\t\t\t\t\t<p>&nbsp;&nbsp;&nbsp;</p>\n\t\t\t\t\t\n\t\t\t\t\t<app-switchable \n\t\t\t\t\tclass='f-30 flex-v' \n\t\t\t\t\ticonOn=\"ion-android-checkbox-outline\" \n\t\t\t\t\ticonOff=\"ion-android-checkbox-outline-blank\"\n\t\t\t\t\t[ngClass]=\"{'disabled': \n\t\t\t\t\tpostData.type != 'service'}\"\n\t\t\t\t\t[state]=\"isActive\"\n\t\t\t\t\t(sender)=\"isActive = $event\"></app-switchable>\n\t\t\t\t\t<p>&nbsp;&nbsp;&nbsp;</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class='flex-h space-between'>\n\t\t\t\t<div class=\"flex-v\">\n\t\t\t\t\t<div class=\"flex-h\">\n\t\t\t\t\t\t<p class=\"validation-message transition f-12\" [ngClass]=\"{'active': !isValidated, 'positive': isPositiveMessage}\" >{{validationMessage}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"flex-h\">\n\t\t\t\t\t\t<button class=\"gradient-button transition\" (click)=\"validate()\">Enviar</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"flex-v w-50 radio-container\">\n\t\t\t\t\t<p class='f-16'>Tipo de post: </p>\n\t\t\t\t\t<div class=\"flex-h space-between w-100\">\n\t\t\t\t\t\t<div class='flex-v f-start'>\n\t\t\t\t\t\t\t<div class=\"flex-h space-between radio-wrapper\">\n\t\t\t\t\t\t\t\t<label class='f-12' for='calendar'>Calendario</label>\n\t\t\t\t\t\t\t\t<div class=\"flex-v\">\n\t\t\t\t\t\t\t\t\t<input id='calendar' checked value=\"calendar\" name='type' type=\"radio\" [(ngModel)]=\"postData.type\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"flex-v\">\n\t\t\t\t\t\t\t<div class=\"flex-h space-between radio-wrapper\">\n\t\t\t\t\t\t\t\t<label class='f-12' for='rest_room'>Sala de espera</label>\n\t\t\t\t\t\t\t\t<div class=\"flex-v\">\n\t\t\t\t\t\t\t\t\t<input id='rest_room' value=\"rest_room\" name='type' type=\"radio\" [(ngModel)]=\"postData.type\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"flex-h space-between radio-wrapper\">\n\t\t\t\t\t\t\t\t<label class='f-12' for='service'>Servicio</label>\n\t\t\t\t\t\t\t\t<div class=\"flex-v\">\n\t\t\t\t\t\t\t\t\t<input id='service' value=\"service\" name='type' type=\"radio\" [(ngModel)]=\"postData.type\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n<input #file type=\"file\" multiple (change)=\"detectFiles(file.files)\" class='disp-none'>\n<div class=\"loader-container flex-v full-container\" [ngClass]=\"{'active': isSending}\">\n\t<p class=\"t-center f-22\">Creando nuevo post</p>\n\t<div class=\"c-container flex-h\">\n\t\t<div class=\"loader\"></div>\n\t</div>\n\t<div class=\"progress-wrapper\">\n\t\t<div class=\"progress-bar transition\" [style.width]=\"progressBarWidth\"></div>\n\t</div>\n\t<div class='flex-h'>\n\t\t<button class=\"gradient-button transition negative\">cancelar</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-post/new-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_upload_service__ = __webpack_require__("../../../../../src/app/core/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_upload__ = __webpack_require__("../../../../../src/app/models/upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewPostComponent = (function () {
    function NewPostComponent(af, uploader) {
        this.af = af;
        this.uploader = uploader;
        this.types = {
            calendar: "Calendario",
            service: "Servicio",
            desktop: "Escritorio",
            rest_room: "Sala de espera",
            advantage: "Ventaja"
        };
        this.postData = {
            title: "",
            description: "",
            files: [],
            type: 'calendar',
            date: 0
        };
        this.clientData = {
            email: "",
            nickName: "",
            type: "client",
            date: "",
            readedSections: {
                calendar: true,
                notification: true,
                desktop: true,
                service: true,
                advantage: true
            },
            posts: {
                calendar: [""],
                service: [""],
                rest_room: [""]
            },
            title: ""
        };
        this.progressBarWidth = '0%';
        this.notificable = false;
        this.isValidated = true;
        this.isActive = false;
        this.isModalOpen = false;
        this.isSending = false;
        this.isPositiveMessage = false;
        this.selectedUsers = [];
        this.basePath = 'uploads/';
        this.finalUrls = [];
        this.postsBD = af.list('/posts');
        this.usersDB = af.list('/users');
    }
    NewPostComponent.prototype.pushUpload = function (upload, index, total) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + upload.file.name).put(upload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_5_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            _this.progressBarWidth = (_this.currentUpload.progress) + '%';
        }, function (error) {
            console.log(error);
            console.log('Erroring');
        }, function () {
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            _this.saveFileData(upload);
            _this.finalUrls.push({ name: upload.file.name, path: upload.url });
            if (!index)
                _this.updateDatabase(_this.finalUrls);
        });
    };
    NewPostComponent.prototype.saveFileData = function (upload) {
        this.af.list(this.basePath + "/").push(upload);
    };
    NewPostComponent.prototype.detectFiles = function (files) {
        this.selectedFiles = files;
        this.selectedFilesCount = files.length;
    };
    NewPostComponent.prototype.upload = function () {
        var _this = this;
        if (this.selectedFilesCount > 1) {
            var files_1 = this.selectedFiles;
            var filesIndex = __WEBPACK_IMPORTED_MODULE_4_lodash__["range"](files_1.length);
            __WEBPACK_IMPORTED_MODULE_4_lodash__["each"](filesIndex, function (idx) {
                _this.currentUpload = new __WEBPACK_IMPORTED_MODULE_3__models_upload__["a" /* Upload */](files_1[idx]);
                _this.pushUpload(_this.currentUpload, idx, _this.selectedFilesCount);
            });
        }
        else {
            var file = this.selectedFiles.item(0);
            this.currentUpload = new __WEBPACK_IMPORTED_MODULE_3__models_upload__["a" /* Upload */](file);
            this.pushUpload(this.currentUpload, 0, 1);
        }
    };
    NewPostComponent.prototype.ngOnInit = function () {
    };
    NewPostComponent.prototype.openModal = function () {
        this.isModalOpen = true;
    };
    NewPostComponent.prototype.validate = function () {
        var _this = this;
        if (this.postData.title == "")
            this.validationMessage = "El título es obligatorio";
        else if (this.postData.description == "")
            this.validationMessage = "La descripción es obligatoria";
        else if (__WEBPACK_IMPORTED_MODULE_4_lodash__["isEmpty"](this.selectedUsers))
            this.validationMessage = "Debes seleccionar al menos a un destinatario";
        else {
            this.isSending = true;
            if (!this.selectedFilesCount) {
                this.updateDatabase([""]);
            }
            else {
                this.upload();
            }
        }
        this.isValidated = false;
        setTimeout(function () { _this.isValidated = true; }, 5000);
    };
    NewPostComponent.prototype.updateDatabase = function (finalUrls) {
        var _this = this;
        this.postData.files = finalUrls;
        this.postData.date = new Date().getTime();
        this.postsBD.push(this.postData).then(function (snap) {
            for (var i = 0; i < _this.selectedUsers.length; i++) {
                (_this.selectedUsers[i].posts[_this.postData.type][0] == "") ? _this.selectedUsers[i].posts[_this.postData.type][0] = [] : null;
                var user = {
                    readedSections: _this.selectedUsers[i].readedSections,
                    posts: _this.selectedUsers[i].posts,
                    notifications: (_this.notificable == true) ? "on" : "off",
                    title: _this.postData.title + " - [ " + _this.types[_this.postData.type] + " ] "
                };
                user.posts[_this.postData.type].push({
                    "readed": false,
                    "key": snap.key,
                    "notification": _this.notificable
                });
                user.readedSections[_this.postData.type] = false;
                if (_this.notificable)
                    user.readedSections["notification"] = false;
                _this.usersDB.update(_this.selectedUsers[i], user).then(function () {
                    _this.isSending = false;
                    _this.postData = {
                        title: '',
                        description: '',
                        files: [],
                        type: '',
                        date: 0
                    };
                    _this.finalUrls = [];
                    _this.selectedFilesCount = 0;
                    _this.validationMessage = "Post creado con éxito";
                    _this.isPositiveMessage = true;
                    _this.isValidated = false;
                    setTimeout(function () { _this.isValidated = true; _this.isPositiveMessage = false; }, 5000);
                });
            }
            return;
        });
    };
    return NewPostComponent;
}());
NewPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new-post',
        template: __webpack_require__("../../../../../src/app/new-post/new-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-post/new-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_upload_service__["a" /* UploadService */]) === "function" && _b || Object])
], NewPostComponent);

var _a, _b;
//# sourceMappingURL=new-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/panel/panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-item\t{\n\twidth: 80px;\n\theight: 80px;\t\n\tmargin: 5px 0;\t\n\tborder-bottom: 1px solid rgba(0,0,0,0.1);\n\topacity: .2;\n\tcursor: pointer;}\n\n.panel-item.active {\n    border-radius: 5px;\n    box-shadow: 2px 2px 5px rgba(0,0,0,.2); \n\topacity: 1;\n\toutline: none;}\n\n.panel-item img  {\n\twidth: 30px;\n\theight: 30px;\n\tpadding: 5px;\n\tmargin: 5px 0;}\n\n.panel-item:hover{\n\tborder-radius: 5px;\n    box-shadow: 2px 2px 5px rgba(0,0,0,.2); \n\topacity: .8}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/panel/panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='flex-v space-between h-100'>\n\t<div>\n\t\t<div \n\t\t*ngFor=\"let item of panelItems\" \n\t\t[ngClass]=\"{'active': activeElement == item.routerLink.toLowerCase()}\"\n\t\tclass=\"panel-item transition\" \n\t\trouterLink=\"{{item.routerLink}}\" \n\t\t(click)=\"setActive(item)\">\n\t\t\t<div class=\"flex-h image-container\">\n\t\t\t\t<img src=\"{{item.mainImage}}\" alt=\"\">\n\t\t\t</div>\t\t\n\t\t\t<p class=\"t-center f-12\">{{item.labelText}}</p>\n\t\t</div>\n\t</div>\n\t<div>\n\t\t<div  class=\"panel-item transition\"  (click)=\"signOut()\">\n\t\t\t<div class=\"flex-h image-container\">\n\t\t\t\t<img src=\"./assets/images/logout.png\" alt=\"\">\n\t\t\t</div>\t\t\n\t\t\t<p class=\"t-center f-12\">Cerrar sesión</p>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/panel/panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PanelComponent = (function () {
    function PanelComponent(auth) {
        this.auth = auth;
        this.imagesPath = './assets/images';
        this.panelItems = [
            {
                mainImage: this.imagesPath + '/edit.png',
                labelText: 'Editar',
                routerLink: 'edit'
            },
            {
                mainImage: this.imagesPath + '/create.png',
                labelText: 'Crear',
                routerLink: 'create'
            },
            {
                mainImage: this.imagesPath + '/settings.png',
                labelText: 'Configuración',
                routerLink: 'settings'
            },
            {
                mainImage: this.imagesPath + '/advantages.png',
                labelText: 'Ventajas',
                routerLink: 'advantages'
            }
        ];
        this.activeElement = window.location.href.split('/')[4];
    }
    PanelComponent.prototype.ngOnInit = function () {
        console.log(this.activeElement);
    };
    PanelComponent.prototype.setActive = function (newElement) {
        if (newElement.labelText == "Ventajas") {
            this.activeElement = "advantages";
            window.location.href = "/dashboard/advantages";
        }
        else {
            this.activeElement = newElement.routerLink.toLowerCase();
        }
    };
    PanelComponent.prototype.signOut = function () {
        this.auth.signOut();
    };
    return PanelComponent;
}());
PanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-panel',
        template: __webpack_require__("../../../../../src/app/panel/panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/panel/panel.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], PanelComponent);

var _a;
//# sourceMappingURL=panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/router-screen/router-screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-v.router-element \t{\n\tbackground-color: #fff;\n\tpadding: 20px;\n\tmargin: 10px;\t\n\tcursor: pointer;\n    border-radius: 5px;\n    box-shadow: 2px 2px 5px rgba(0,0,0,.2);\n    outline: none;}\n\n.flex-v.router-element p{\n\tmargin-top: 10px;\t}\n\n.flex-v.router-element:hover{\n\topacity: 0.5 }\n\n.flex-v.router-element img {\n    width: 60px;\n    height: 60px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/router-screen/router-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-v full-container\">\n\t<p class=\"title t-center\">Te gustaría {{translatedAction}} un:</p>\n\t<div class=\"c-container flex-h\">\n\t\t<div class=\"flex-v\">\n\t\t\t<div class=\"flex-h\">\n\t\t\t\t<div *ngFor=\"let element of elements\"  class='flex-v router-element transition' routerLink=\"{{element.routerLink}}\">\n\t\t\t\t\t<div class=\"flex-h\">\n\t\t\t\t\t\t<img src=\"{{element.path}}\" alt=\"{{element.title}}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class='t-center f-14'>{{element.title}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class='active button' routerLink=\"desktop\">Modificar infografía de escritorio</p>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/router-screen/router-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouterScreenComponent = (function () {
    function RouterScreenComponent() {
        this.actionType = window.location.href.split('/')[4];
        this.elements = [
            {
                title: "Client",
                path: "./assets/images/client.png",
                routerLink: "client"
            },
            {
                title: "Post",
                path: "./assets/images/post.png",
                routerLink: "post"
            }
        ];
        this.translatedAction = (this.actionType == 'create') ? 'crear' : 'editar';
    }
    RouterScreenComponent.prototype.ngOnInit = function () {
    };
    return RouterScreenComponent;
}());
RouterScreenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-router-screen',
        template: __webpack_require__("../../../../../src/app/router-screen/router-screen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/router-screen/router-screen.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RouterScreenComponent);

//# sourceMappingURL=router-screen.component.js.map

/***/ }),

/***/ "../../../../../src/app/send-to/send-to.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground-color: rgba(0,0,0,.5)}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/send-to/send-to.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  send-to works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/send-to/send-to.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendToComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SendToComponent = (function () {
    function SendToComponent() {
    }
    SendToComponent.prototype.ngOnInit = function () {
    };
    return SendToComponent;
}());
SendToComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-send-to',
        template: __webpack_require__("../../../../../src/app/send-to/send-to.component.html"),
        styles: [__webpack_require__("../../../../../src/app/send-to/send-to.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SendToComponent);

//# sourceMappingURL=send-to.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-container{\n\tmax-width: 350px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-container flex-v space-between\">\n\t<div class=\"form-container\">\n\t\t<div class=\"flex-h space-between\">\n\t\t\t<div class=\"flex-v\">\n\t\t\t\t<h3 class=\"title\">Cambiar contraseña</h3>\n\t\t\t</div>\n\t\t</div>\n\t\t<form action=\"#\" class='w-90 post-form'>\n\t\t\t<div class=\"flex-v f-start input-wrapper w-100\">\n\t\t\t\t<input id=\"new-password\" name=\"new-password\" type=\"password\" placeholder=\"new password *\" [(ngModel)]=\"passwordData.newPassword\" #name=\"ngModel\">\n\t\t\t</div>\n\t\t\t<div class=\"flex-v f-start input-wrapper w-100\">\n\t\t\t\t<input id=\"new-password-repeat\" name=\"new-password-repeat\" type=\"password\" placeholder=\"repeat new password *\" [(ngModel)]=\"passwordData.newPasswordRepeat\" #name=\"ngModel\">\n\t\t\t</div>\n\t\t\t<div class=\"flex-h f-start\">\n\t\t\t\t<p class=\"validation-message transition f-12\" [ngClass]=\"{'active': !isValidated, 'positive': isPositiveMessage}\">{{validationMessage}}</p>\n\t\t\t</div>\n\t\t\t<div class='flex-h f-start'>\n\t\t\t\t<button class=\"gradient-button transition\" (click)=\"validate()\">Actualiazar</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"loader-container flex-v full-container\" [ngClass]=\"{'active': isSending}\">\n\t<p class=\"t-center f-22\">Actualizando información</p>\n\t<div class=\"c-container flex-h\">\n\t\t<div class=\"loader\"></div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = (function () {
    function SettingsComponent(af, afAuth) {
        var _this = this;
        this.af = af;
        this.afAuth = afAuth;
        this.passwordData = {
            newPassword: "",
            newPasswordRepeat: ""
        };
        this.isValidated = true;
        this.isSending = false;
        this.isPositiveMessage = false;
        afAuth.authState.subscribe(function (auth) {
            _this.currentUser = auth;
        });
    }
    SettingsComponent.prototype.validate = function () {
        var _this = this;
        if (this.passwordData.newPassword == "" &&
            this.passwordData.newPasswordRepeat == "")
            this.validationMessage = "All fields are required";
        else if (this.passwordData.newPassword != this.passwordData.newPasswordRepeat)
            this.validationMessage = "New passwords are not equal";
        else {
            var self_1 = this;
            this.isSending = true;
            var user = this.currentUser;
            user.updatePassword(this.passwordData.newPassword).then(function () {
                var _this = this;
                self_1.isSending = false;
                self_1.passwordData = {
                    newPassword: '',
                    newPasswordRepeat: ''
                };
                self_1.validationMessage = "Password successfully updated!!";
                self_1.isPositiveMessage = true;
                self_1.isValidated = false;
                setTimeout(function () { _this.isValidated = true; _this.isPositiveMessage = false; }, 5000);
            }).catch(function (error) {
                var _this = this;
                self_1.validationMessage = "There was an error trying to update your password";
                self_1.isPositiveMessage = false;
                self_1.isValidated = false;
                setTimeout(function () { _this.isValidated = true; _this.isPositiveMessage = false; }, 5000);
            });
            return;
        }
        this.isValidated = false;
        setTimeout(function () { _this.isValidated = true; }, 5000);
    };
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], SettingsComponent);

var _a, _b;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/switchable/switchable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host:hover{\n\topacity: 0.5; \n\tcursor: pointer;}\ni{\n\tfont-size: inherit;\n\tcolor:inherit; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/switchable/switchable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"switchable transition\" (click)=\"onClick()\">\n\t<i class='f-30 transition {{currentIcon}}'></i>\n</div>"

/***/ }),

/***/ "../../../../../src/app/switchable/switchable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwitchableComponent = (function () {
    function SwitchableComponent() {
        this.sender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SwitchableComponent.prototype.ngOnInit = function () {
        this.currentIcon = this.state == true ? this.iconOn : this.iconOff;
    };
    SwitchableComponent.prototype.onClick = function () {
        this.state = !this.state;
        this.currentIcon = this.state == true ? this.iconOn : this.iconOff;
        this.sender.emit(this.state);
    };
    return SwitchableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SwitchableComponent.prototype, "iconOn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SwitchableComponent.prototype, "iconOff", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], SwitchableComponent.prototype, "state", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], SwitchableComponent.prototype, "sender", void 0);
SwitchableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-switchable',
        template: __webpack_require__("../../../../../src/app/switchable/switchable.component.html"),
        styles: [__webpack_require__("../../../../../src/app/switchable/switchable.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SwitchableComponent);

var _a;
//# sourceMappingURL=switchable.component.js.map

/***/ }),

/***/ "../../../../../src/app/users-modal/users-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\tposition: fixed;\n\tbackground-color: rgba(0,0,0,0.5);\n\tz-index: -1;  \n\topacity: 0  }\n\n:host.active{\n\tz-index: 999;\n\topacity: 1;  }\n\n.form-container{\n\twidth: 80%;\n\tmax-width: 400px;\n\tmargin: 0 auto 100px;  }\n\n.form-container input[type=checkbox]{\n\tmargin: 0 15px;}\n\n.form-container .f-18{\n\theight: 20px;}\n\n.user-container{\n\tpadding: 10px;\n\tborder-bottom: 1px solid rgba(0,0,0,0.1);\n    padding: 10px;}\n\n.user-container(even){\n\tbackground-color: rgba(0,0,0,0.05); }\n\n.users-container{\n\tmax-height: 180px;\n\tmargin: 20px 0 5px;\n    border: 1px solid rgba(0,0,0,.05);\n    border-radius: 10px; }\n\n.users-container .header{\n\tcursor: pointer;\n\theight: 20px;\n\tpadding: 10px 20px 10px 10px;\n    border-bottom: 1px solid rgba(0,0,0,0.1);\n    color: #03A9F4; }\n\n .users-container .scroll-container{\n \theight: 140px;\n\toverflow-y: auto}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users-modal/users-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-container flex-v\">\n\t<div class=\"form-container\">\n\t\t<div class=\"flex-h space-around\" id='header'>\n\t\t\t<div class=\"flex-v\">\n\t\t\t\t<p class=\"f22\">Seleccione los usuarios a quienes desea enviar este post</p>\n\t\t\t</div>\n\t\t\t<div class=\"flex-v\">\n\t\t\t\t<i (click)=\"closeModal()\" class='ion-android-close f-22'></i>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"users-container\">\n\t\t\t<div class=\"flex-h f-end header\">\n\t\t\t\t<p class=\"f-16\" (click)=\"selectAll()\">Todos</p>\n\t\t\t</div>\n\t\t\t<div class=\"scroll-container\">\n\t\t\t\t<div *ngFor=\"let user of users; let i = index\"  class=\"user-container flex-h space-between\">\n\t\t\t\t\t<div class=\"flex-h f-start\">\n\t\t\t\t\t\t<div class=\"flex-v\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" [checked]=\"checkedArray[i]\" (change)=\"updateUsers(i)\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"flex-v\">\n\t\t\t\t\t\t\t<p class=\"f-18\">{{user.nickName}}</p>\n\t\t\t\t\t\t\t<p class='f-12'><b>{{user.email}}</b></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"flex-v\">\n\t\t\t\t\t\t<p class='f-12 t-right'>Created:</p>\n\t\t\t\t\t\t<p class=\"f-14 t-right grey-color\">{{humanDate(user.date)}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<p class=\"f-12\">{{totalSelected}} clientes seleccionados</p>\n\t\t<div class='flex-h f-start'>\n\t\t\t<button class=\"gradient-button transition\" (click)=\"sendSelection()\">Aceptar</button>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users-modal/users-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersModalComponent = (function () {
    function UsersModalComponent(af) {
        var _this = this;
        this.af = af;
        this.modalSender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.usersSender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isModalOpen = true;
        this.checkedArray = [];
        this.totalSelected = 0;
        this.selectedUsers = [];
        this.usersBD = af.list('/users', { query: {
                orderByChild: "type",
                equalTo: "client"
            }
        });
        this.usersBD.subscribe(function (resp) {
            _this.users = resp;
            for (var i = 0; i <= _this.users.length - 1; i++)
                _this.checkedArray[i] = false;
        });
    }
    UsersModalComponent.prototype.closeModal = function () {
        this.isModalOpen = false;
        this.modalSender.emit(this.isModalOpen);
        this.selectedUsers = [];
        this.totalSelected = this.selectedUsers.length;
    };
    UsersModalComponent.prototype.selectAll = function () {
        for (var i = 0; i <= this.checkedArray.length - 1; i++)
            this.checkedArray[i] = true;
        this.totalSelected = this.checkedArray.length;
    };
    UsersModalComponent.prototype.sendSelection = function () {
        var json = {};
        for (var i = 0; i <= this.checkedArray.length - 1; i++)
            if (this.checkedArray[i]) {
                this.selectedUsers.push(this.users[i]);
            }
        this.isModalOpen = false;
        this.modalSender.emit(this.isModalOpen);
        this.usersSender.emit(this.selectedUsers);
    };
    UsersModalComponent.prototype.updateUsers = function (index) {
        this.checkedArray[index] = !this.checkedArray[index];
        this.totalSelected = 0;
        for (var _i = 0, _a = this.checkedArray; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value)
                this.totalSelected++;
        }
    };
    UsersModalComponent.prototype.humanDate = function (timeStamp) {
        var fullDate = "" + new Date(timeStamp);
        var arrayDate = fullDate.split(' ');
        var formatedDate = arrayDate[2] + " " + arrayDate[1] + " " + arrayDate[3] + " at " + arrayDate[4];
        return formatedDate;
    };
    UsersModalComponent.prototype.ngOnInit = function () {
    };
    return UsersModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], UsersModalComponent.prototype, "modalSender", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], UsersModalComponent.prototype, "usersSender", void 0);
UsersModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-users-modal',
        template: __webpack_require__("../../../../../src/app/users-modal/users-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users-modal/users-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
], UsersModalComponent);

var _a, _b, _c;
//# sourceMappingURL=users-modal.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map