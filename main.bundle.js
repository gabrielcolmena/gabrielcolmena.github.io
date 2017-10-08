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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__new_post_new_post_component__ = __webpack_require__("../../../../../src/app/new-post/new-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__send_to_send_to_component__ = __webpack_require__("../../../../../src/app/send-to/send-to.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__router_screen_router_screen_component__ = __webpack_require__("../../../../../src/app/router-screen/router-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__switchable_switchable_component__ = __webpack_require__("../../../../../src/app/switchable/switchable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__new_client_new_client_component__ = __webpack_require__("../../../../../src/app/new-client/new-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__users_modal_users_modal_component__ = __webpack_require__("../../../../../src/app/users-modal/users-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
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
            __WEBPACK_IMPORTED_MODULE_13__new_post_new_post_component__["a" /* NewPostComponent */],
            __WEBPACK_IMPORTED_MODULE_14__settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__send_to_send_to_component__["a" /* SendToComponent */],
            __WEBPACK_IMPORTED_MODULE_16__router_screen_router_screen_component__["a" /* RouterScreenComponent */],
            __WEBPACK_IMPORTED_MODULE_17__switchable_switchable_component__["a" /* SwitchableComponent */],
            __WEBPACK_IMPORTED_MODULE_18__new_client_new_client_component__["a" /* NewClientComponent */],
            __WEBPACK_IMPORTED_MODULE_19__users_modal_users_modal_component__["a" /* UsersModalComponent */]
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
                            component: __WEBPACK_IMPORTED_MODULE_16__router_screen_router_screen_component__["a" /* RouterScreenComponent */]
                        },
                        {
                            path: 'create',
                            component: __WEBPACK_IMPORTED_MODULE_16__router_screen_router_screen_component__["a" /* RouterScreenComponent */]
                        },
                        {
                            path: 'settings',
                            component: __WEBPACK_IMPORTED_MODULE_14__settings_settings_component__["a" /* SettingsComponent */]
                        },
                        {
                            path: 'edit/client',
                            component: __WEBPACK_IMPORTED_MODULE_12__edit_posts_edit_posts_component__["a" /* EditPostsComponent */]
                        },
                        {
                            path: 'edit/post',
                            component: __WEBPACK_IMPORTED_MODULE_12__edit_posts_edit_posts_component__["a" /* EditPostsComponent */]
                        },
                        {
                            path: 'create/client',
                            component: __WEBPACK_IMPORTED_MODULE_18__new_client_new_client_component__["a" /* NewClientComponent */]
                        },
                        {
                            path: 'create/post',
                            component: __WEBPACK_IMPORTED_MODULE_13__new_post_new_post_component__["a" /* NewPostComponent */]
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
        providers: [__WEBPACK_IMPORTED_MODULE_20__core_auth_service__["a" /* AuthService */]],
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
        })
            .catch(function (error) { return console.log(error); });
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

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard  {\n\twidth: 80%;\n\theight: 80vh;\n\tmargin: 0 auto;\n\tmax-width: 720px;\n\tposition: relative;\t}\n\n.logo-wraper  {\n\tposition: absolute;\n\topacity: 0.2;\n\tbottom: 15px;\n\tright: 30px;\t\n\twidth: 160px;\t}\n\n.dash-content  {\n\tbackground: rgba(0,0,0,0.05);\n\twidth: 100%; margin-left: 20px;\n\tborder-radius: 10px;\n\tpadding: 20px; }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full flex-v main-container transition\">\n\t<div class=\"card dashboard flex-v space-between\">\n\t\t<div class=\"h-100 w-100 flex-h space-between\">\n\t\t\t<app-panel class='flex-v f-start'></app-panel>\n\t\t\t<div class='dash-content'>\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t<div class=\"logo-wraper flex-h\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<img src=\"./assets/images/crown-dark.png\" alt=\"Logo image\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p class=\"f-20 title\">Coacher App</p>\n\t\t\t\t\t\t<p class='f-10'>some slogan</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<footer>\n\t<p class='grey-color t-center f-12'>CoacherApp admin © all rights reserved 2017</p>\n</footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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




var DashboardComponent = (function () {
    function DashboardComponent(auth, router, afAuth) {
        this.auth = auth;
        this.router = router;
        this.afAuth = afAuth;
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-posts/edit-posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 100%; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-posts/edit-posts.component.html":
/***/ (function(module, exports) {

module.exports = "  <div id=\"details-container\" class='full-container'>\n      <p *ngFor=\"let item of items | async\"><img src=\"../assets/images/pin.svg\">{{item.message}}</p>\n      <div *ngIf=\"!theresItems\" class=\"flex-v full-container\">\n      \t<p class='t-center f-24'>there are no posts</p>\n      </div>\n      <div *ngIf=\"theresItems == 1\" class='flex-v full-container'>\n      \t<div class=\"c-container\">\n      \t\t<div class=\"loader\"></div>\n      \t</div>\n      </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/edit-posts/edit-posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPostsComponent; });
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


var EditPostsComponent = (function () {
    function EditPostsComponent(af) {
        var _this = this;
        this.af = af;
        this.msgVal = '';
        this.theresItems = 1; //1: waiting, 0: no items, 2: theres items
        this.postsDB = af.list('/posts', {
            query: {
                limitToLast: 50
            }
        });
        this.postsDB.subscribe(function (resp) {
            _this.theresItems = (resp.length) ? 2 : 0;
        });
    }
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

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo-wraper\t{\n\tposition: absolute;\n\ttop: 20px;\n\tleft: 20px;\t}\n\n.form-container\t{\n\twidth: 80%;\n\tmax-width: 280px;\n\tmax-height: 70vh;\n\tmin-height: 380px;\n\tmargin: 0 auto; }\n\n#forgot-link  {\n\tcolor: #1e3c7f;\n\tfont-size: 12px;\n\tmargin: 0 0 40px 0;  }\n\n.input-wrapper input {\n  margin-left: 10px;\n  padding: 0px 5px 5px 5px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo-wraper flex-h\">\n\t<div>\n\t\t<img src=\"./assets/images/crown.png\" alt=\"Logo image\">\n\t</div>\n\t<div>\n\t\t<p class=\"white-color f-20 title\">Coacher App</p>\n\t\t<p class='white-color f-10'>some slogan</p>\n\t</div>\n</div>\n\n<div class=\"full flex-v main-container transition\">\n\t<div class=\"form-container card flex\">\n\t\t<div class=\"flex-h space-between w-100\">\n\t\t\t<div class=\"cool-line\"></div>\n\t\t\t<div class='w-100 flex-v space-between'>\n\t\t\t\t<div class=\"flex-h f-start w-100\">\n\t\t\t\t\t<h2>Login</h2>\n\t\t\t\t</div>\n\t\t\t\t<form action=\"#\" class='flex-v '>\n\t\t\t\t\t<div class=\"flex-h f-start input-wrapper\">\n\t\t\t\t\t\t<i class=\"ion-android-person\"></i>\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"userData.email\" #name=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"flex-h f-start input-wrapper\">\n\t\t\t\t\t\t<i class=\"ion-android-lock\"></i>\n\t\t\t\t\t\t<input type=\"password\" placeholder=\"password\" id=\"password\" name=\"password \" [(ngModel)]=\"userData.password\" #name=\"ngModel\">\n\t\t\t\t\t\t<i class=\"ion-eye\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a routeLiner=\"forgot-password\" id='forgot-link' class='t-center'>forgot password</a>\n\t\t\t\t\t<p class=\"validation-message transition f-12 t-center\" [ngClass]=\"{'active': !isValidated, 'positive': isPositiveMessage}\">{{validationMessage}}</p>\n\t\t\t\t\t<div class='c-container'>\n\t\t\t\t\t\t<button class=\"gradient-button transition\" (click)=\"login()\">login</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<div></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<footer>\n\t<p class='grey-color t-center f-12'>CoacherApp admin © all rights reserved 2017</p>\n</footer>"

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
        this.afAuth.authState.subscribe(function (auth) {
            if (auth) {
                router.navigateByUrl('/dashboard');
            }
        });
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.emailLogin(this.userData.email, this.userData.password).then(function () {
            _this.router.navigateByUrl('/dasboard');
        });
        this.validationMessage = "Wrong email or password, please try again";
        this.isValidated = false;
        setTimeout(function () { _this.isValidated = true; }, 5000);
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

module.exports = "<div class=\"full-container flex-v space-between\">\n\t<div class=\"form-container\">\n\t\t<div class=\"flex-h space-between\">\n\t\t\t<div class=\"flex-v\">\n\t\t\t\t<h3 class=\"title\">Create a new client</h3>\n\t\t\t</div>\n\t\t</div>\n\t\t<form action=\"#\" class='w-90 post-form'>\n\t\t\t<div class=\"flex-v f-start input-wrapper w-100\">\n\t\t\t\t<input id=\"username\" name=\"username\" type=\"text\" placeholder=\"username *\" [(ngModel)]=\"userData.username\" #name=\"ngModel\">\n\t\t\t</div>\n\t\t\t<div class=\"flex-v f-start input-wrapper w-100\">\n\t\t\t\t<input id=\"name\" name=\"name\" type=\"text\" placeholder=\"nick name (optional)\" [(ngModel)]=\"userData.nickName\" #name=\"ngModel\">\n\t\t\t</div>\n\t\t\t<div class=\"flex-v f-start input-wrapper w-100\">\n\t\t\t\t<input id=\"password\" name=\"password\" type=\"password\" placeholder=\"password *\" [(ngModel)]=\"userData.password\" #name=\"ngModel\">\n\t\t\t</div>\n\t\t\t<div class=\"flex-v f-start input-wrapper w-100\">\n\t\t\t\t<input id=\"repeat-password\" name=\"repeat-password\" type=\"password\" placeholder=\"repeat password *\" [(ngModel)]=\"userData.passwordRepeat\" #name=\"ngModel\">\n\t\t\t</div>\n\t\t\t<div class=\"flex-h f-start\">\n\t\t\t\t<p class=\"validation-message transition f-12\" [ngClass]=\"{'active': !isValidated, 'positive': isPositiveMessage}\">{{validationMessage}}</p>\n\t\t\t</div>\n\t\t\t<div class='flex-h f-start'>\n\t\t\t\t<button class=\"gradient-button transition\" (click)=\"validate()\">send</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"loader-container flex-v full-container\" [ngClass]=\"{'active': isSending}\">\n\t<p class=\"t-center f-22\">Creating new client</p>\n\t<div class=\"c-container flex-h\">\n\t\t<div class=\"loader\"></div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-client/new-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewClientComponent; });
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


var NewClientComponent = (function () {
    function NewClientComponent(af) {
        this.af = af;
        this.userData = {
            username: "",
            nickName: "",
            password: "",
            passwordRepeat: "",
            date: Date.now()
        };
        this.isValidated = true;
        this.isSending = false;
        this.isPositiveMessage = false;
        this.usersBD = af.list('/clients');
    }
    NewClientComponent.prototype.validate = function () {
        var _this = this;
        if (this.userData.username == "")
            this.validationMessage = "Username is required";
        else if (this.userData.password == "")
            this.validationMessage = "password is required";
        else if (this.userData.password.length < 7)
            this.validationMessage = "password most have 8 characters or more";
        else if (this.userData.passwordRepeat == "")
            this.validationMessage = "repeat the password is required";
        else if (this.userData.passwordRepeat != this.userData.password)
            this.validationMessage = "passwords are not equal";
        else {
            this.isSending = true;
            this.usersBD.push(this.userData).then(function () {
                _this.isSending = false;
                _this.userData = {
                    username: "",
                    nickName: "",
                    password: "",
                    passwordRepeat: "",
                    date: Date.now()
                };
                _this.validationMessage = "Client successfully created!!";
                _this.isPositiveMessage = true;
                _this.isValidated = false;
                setTimeout(function () { _this.isValidated = true; _this.isPositiveMessage = false; }, 5000);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], NewClientComponent);

var _a;
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

module.exports = "<app-users-modal \nclass='transition' [ngClass]=\"{'active': isModalOpen}\"\n(modalSender)=\"isModalOpen = $event\" (usersSender)=\"selectedUsers = $event\"></app-users-modal>\n\n<div class=\"full-container flex-v space-between\">\n\t<div class=\"form-container transition\">\n\t\t<div class=\"flex-h space-between\">\n\t\t\t<div class=\"flex-v\">\n\t\t\t\t<h3 class=\"title\">Create a new post</h3>\n\t\t\t</div>\n\t\t\t<div class=\"flex-h f-start light-button transition\" (click)=\"openModal()\">\n\t\t\t\t<div class='flex-h'>\n\t\t\t\t\t<div class=\"flex-v\">\n\t\t\t\t\t\t<p>Send to</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"flex-v\">\n\t\t\t\t\t\t<i class='f-22 ion-android-arrow-forward'></i>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<form action=\"#\" class='w-100 post-form'>\n\t\t\t<div class=\"flex-v f-start input-wrapper w-100\">\n\t\t\t\t<input id=\"title\" name=\"title\" type=\"text\" placeholder=\"post title\" [(ngModel)]=\"postData.title\" #name=\"ngModel\">\n\t\t\t</div>\n\t\t\t<textarea id=\"description\" name=\"description\" type=\"text\" placeholder=\"post description\" [(ngModel)]=\"postData.description\" #name=\"ngModel\" cols=\"30\" rows=\"5\" class='w-100'></textarea>\n\t\t\t<div class=\"flex-h space-between\">\n\t\t\t\t<div class=\"flex-h\">\n\t\t\t\t\t<p class=\"validation-message transition f-12\" [ngClass]=\"{'active': !isValidated, 'positive': isPositiveMessage}\" >{{validationMessage}}</p>\n\t\t\t\t</div>\n\t\t\t\t<div class='flex-h'>\n\t\t\t\t\t<div class=\"icon-button transition\">\n\t\t\t\t\t\t<i class='f-30 ion-android-attach'></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<app-switchable \n\t\t\t\t\tclass='f-30 flex-v' \n\t\t\t\t\ticonOn=\"ion-android-notifications\" \n\t\t\t\t\ticonOff=\"ion-android-notifications-off\"\n\t\t\t\t\t[state]=\"postData.notification\"\n\t\t\t\t\t(sender)=\"postData.notification = $event\"></app-switchable>\n\t\t\t\t\t<p>&nbsp;&nbsp;&nbsp;</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class='flex-h f-start'>\n\t\t\t\t<button class=\"gradient-button transition\" (click)=\"validate()\">send</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"loader-container flex-v full-container\" [ngClass]=\"{'active': isSending}\">\n\t<p class=\"t-center f-22\">Creating new post</p>\n\t<div class=\"c-container flex-h\">\n\t\t<div class=\"loader\"></div>\n\t</div>\n\t<div class='flex-h'>\n\t\t<button class=\"gradient-button transition negative\">cancel</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-post/new-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostComponent; });
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


var NewPostComponent = (function () {
    function NewPostComponent(af) {
        this.af = af;
        this.postData = {
            title: "",
            description: "",
            notification: false,
            receivers: [],
        };
        this.isValidated = true;
        this.isModalOpen = false;
        this.isSending = false;
        this.isPositiveMessage = false;
        this.selectedUsers = [];
        this.postsBD = af.list('/posts');
    }
    NewPostComponent.prototype.ngOnInit = function () {
    };
    NewPostComponent.prototype.openModal = function () {
        this.isModalOpen = true;
    };
    NewPostComponent.prototype.validate = function () {
        var _this = this;
        if (this.postData.title == "")
            this.validationMessage = "Form title is required";
        else if (this.postData.description == "")
            this.validationMessage = "Description is required";
        else if (!this.selectedUsers.length)
            this.validationMessage = "You need to select at least one destination user";
        else {
            this.postData.receivers = this.selectedUsers;
            this.isSending = true;
            this.postsBD.push(this.postData).then(function () {
                _this.isSending = false;
                _this.postData = {
                    title: "",
                    description: "",
                    notification: false,
                    receivers: []
                };
                _this.validationMessage = "Post successfully created!!";
                _this.isPositiveMessage = true;
                _this.isValidated = false;
                setTimeout(function () { _this.isValidated = true; _this.isPositiveMessage = false; }, 5000);
            });
            return;
        }
        this.isValidated = false;
        setTimeout(function () { _this.isValidated = true; }, 5000);
    };
    return NewPostComponent;
}());
NewPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new-post',
        template: __webpack_require__("../../../../../src/app/new-post/new-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-post/new-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], NewPostComponent);

var _a;
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

module.exports = "<div class='flex-v space-between h-100'>\n\t<div>\n\t\t<div \n\t\t*ngFor=\"let item of panelItems\" \n\t\t[ngClass]=\"{'active': activeElement == item.labelText.toLowerCase()}\"\n\t\tclass=\"panel-item transition\" \n\t\trouterLink=\"{{item.routerLink}}\" \n\t\t(click)=\"setActive(item)\">\n\t\t\t<div class=\"flex-h image-container\">\n\t\t\t\t<img src=\"{{item.mainImage}}\" alt=\"\">\n\t\t\t</div>\t\t\n\t\t\t<p class=\"t-center f-12\">{{item.labelText}}</p>\n\t\t</div>\n\t</div>\n\t<div>\n\t\t<div  class=\"panel-item transition\"  (click)=\"signOut()\">\n\t\t\t<div class=\"flex-h image-container\">\n\t\t\t\t<img src=\"./assets/images/logout.png\" alt=\"\">\n\t\t\t</div>\t\t\n\t\t\t<p class=\"t-center f-12\">Logout</p>\n\t\t</div>\n\t</div>\n</div>"

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
                labelText: 'Edit',
                routerLink: 'edit'
            },
            {
                mainImage: this.imagesPath + '/create.png',
                labelText: 'Create',
                routerLink: 'create'
            },
            {
                mainImage: this.imagesPath + '/settings.png',
                labelText: 'Settings',
                routerLink: 'settings'
            }
        ];
        this.activeElement = window.location.href.split('/')[4];
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    PanelComponent.prototype.setActive = function (newElement) {
        this.activeElement = newElement.labelText.toLowerCase();
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

module.exports = "<div class=\"flex-v full-container\">\n\t<p class=\"title t-center\">Whould you like to {{actionType}} a:</p>\n\t<div class=\"c-container flex-h\">\n\t\t<div class=\"flex-v\">\n\t\t\t<div class=\"flex-h\">\n\t\t\t\t<div *ngFor=\"let element of elements\"  class='flex-v router-element transition' routerLink=\"{{element.routerLink}}\">\n\t\t\t\t\t<div class=\"flex-h\">\n\t\t\t\t\t\t<img src=\"{{element.path}}\" alt=\"{{element.title}}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class='t-center f-14'>{{element.title}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

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

module.exports = "<div class=\"full-container flex-v space-between\">\n\t<div class=\"form-container\">\n\t\t<div class=\"flex-h space-between\">\n\t\t\t<div class=\"flex-v\">\n\t\t\t\t<h3 class=\"title\">Password change</h3>\n\t\t\t</div>\n\t\t</div>\n\t\t<form action=\"#\" class='w-90 post-form'>\n\t\t\t<div class=\"flex-v f-start input-wrapper w-100\">\n\t\t\t\t<input id=\"new-password\" name=\"new-password\" type=\"password\" placeholder=\"new password *\" [(ngModel)]=\"passwordData.newPassword\" #name=\"ngModel\">\n\t\t\t</div>\n\t\t\t<div class=\"flex-v f-start input-wrapper w-100\">\n\t\t\t\t<input id=\"new-password-repeat\" name=\"new-password-repeat\" type=\"password\" placeholder=\"repeat new password *\" [(ngModel)]=\"passwordData.newPasswordRepeat\" #name=\"ngModel\">\n\t\t\t</div>\n\t\t\t<div class=\"flex-h f-start\">\n\t\t\t\t<p class=\"validation-message transition f-12\" [ngClass]=\"{'active': !isValidated, 'positive': isPositiveMessage}\">{{validationMessage}}</p>\n\t\t\t</div>\n\t\t\t<div class='flex-h f-start'>\n\t\t\t\t<button class=\"gradient-button transition\" (click)=\"validate()\">update</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"loader-container flex-v full-container\" [ngClass]=\"{'active': isSending}\">\n\t<p class=\"t-center f-22\">Updating info</p>\n\t<div class=\"c-container flex-h\">\n\t\t<div class=\"loader\"></div>\n\t</div>\n</div>\n"

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

module.exports = "<div class=\"full-container flex-v\">\n\t<div class=\"form-container\">\n\t\t<div class=\"flex-h space-around\" id='header'>\n\t\t\t<div class=\"flex-v\">\n\t\t\t\t<p class=\"f22\">Select the users you need to get this post</p>\n\t\t\t</div>\n\t\t\t<div class=\"flex-v\">\n\t\t\t\t<i (click)=\"closeModal()\" class='ion-android-close f-22'></i>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"users-container\">\n\t\t\t<div class=\"flex-h f-end header\">\n\t\t\t\t<p class=\"f-16\" (click)=\"selectAll()\">Select all</p>\n\t\t\t</div>\n\t\t\t<div class=\"scroll-container\">\n\t\t\t\t<div *ngFor=\"let user of users; let i = index\"  class=\"user-container flex-h space-between\">\n\t\t\t\t\t<div class=\"flex-h f-start\">\n\t\t\t\t\t\t<div class=\"flex-v\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" [checked]=\"checkedArray[i]\" (change)=\"updateUsers(i)\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"flex-v\">\n\t\t\t\t\t\t\t<p class=\"f-18\">{{user.nickName}}</p>\n\t\t\t\t\t\t\t<p class='f-12'><b>{{user.username}}</b></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"flex-v\">\n\t\t\t\t\t\t<p class='f-12 t-right'>Created:</p>\n\t\t\t\t\t\t<p class=\"f-14 t-right grey-color\">{{humanDate(user.date)}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<p class=\"f-12\">{{totalSelected}} clientes selected</p>\n\t\t<div class='flex-h f-start'>\n\t\t\t<button class=\"gradient-button transition\" (click)=\"sendSelection()\">done</button>\n\t\t</div>\n\t</div>\n</div>\n"

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
        this.usersBD = af.list('/clients');
        this.usersBD.subscribe(function (resp) {
            _this.users = resp;
            for (var i = 0; i <= _this.users.length - 1; i++)
                _this.checkedArray[i] = false;
        });
    }
    UsersModalComponent.prototype.closeModal = function () {
        this.isModalOpen = false;
        this.modalSender.emit(this.isModalOpen);
    };
    UsersModalComponent.prototype.selectAll = function () {
        for (var i = 0; i <= this.checkedArray.length - 1; i++)
            this.checkedArray[i] = true;
        this.totalSelected = this.checkedArray.length;
    };
    UsersModalComponent.prototype.sendSelection = function () {
        this.selectedUsers = [];
        for (var i = 0; i <= this.checkedArray.length - 1; i++)
            if (this.checkedArray[i])
                this.selectedUsers.push(this.users[i].$key);
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