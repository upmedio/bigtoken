webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bigtoken/verificationScreen/verificationScreen.module": [
		"../../../../../src/app/bigtoken/verificationScreen/verificationScreen.module.ts",
		"verificationScreen.module"
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
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.browser.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
/*
From : https://malcoded.com/posts/angular-fundamentals-universal-server-side-rendering

The browser app module is very simple. All we need to do here, is to call BrowserModule.withServerTransition.
This method tells angular, that we are using server side rendering and that the view has to be swapped,
once the full framework is loaded. This method expects an object with a key called appId.
You can enter any string here. Just make sure, the string in our browser app module matches the one in the server app module.
 */
var AppBrowserModule = /** @class */ (function () {
    function AppBrowserModule() {
    }
    AppBrowserModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({
                    appId: 'app-root'
                }),
                app_module_1.AppModule,
                animations_1.BrowserAnimationsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent],
        })
    ], AppBrowserModule);
    return AppBrowserModule;
}());
exports.AppBrowserModule = AppBrowserModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar-filler {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n    <div class=\"page-content\" >\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var language_service_1 = __webpack_require__("../../../../../src/app/lib/i18n/language/language.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var common_2 = __webpack_require__("../../../common/esm5/common.js");
// component
var ga_1 = __webpack_require__("../../../../angulartics2/ga/index.js");
var ngx_logger_1 = __webpack_require__("../../../../../src/app/lib/ngx-logger/index.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(location, log, router, languageService, platformId, angulartics2GoogleAnalytics) {
        var _this = this;
        this.log = log;
        this.router = router;
        this.languageService = languageService;
        this.platformId = platformId;
        this.log.debug('Language:', languageService.getLocale());
        router.events.subscribe(function (val) {
            if (_this.locationPath !== location.path()) {
                _this.locationPath = location.path();
                // On a route change event, scroll to the top (for client platforms only)
                if (common_2.isPlatformBrowser(_this.platformId)) {
                    _this.log.debug('Scroll to the top...');
                    var scrollableElement = document.querySelector('.page-content');
                    if (scrollableElement) {
                        scrollableElement.scrollTop = 0;
                    }
                }
            }
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __param(4, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [common_1.Location,
            ngx_logger_1.NGXLogger,
            router_1.Router,
            language_service_1.LanguageService,
            Object,
            ga_1.Angulartics2GoogleAnalytics])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var core_2 = __webpack_require__("../../../../@ngx-meta/core/@ngx-meta/core.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var ngx_logger_1 = __webpack_require__("../../../../../src/app/lib/ngx-logger/index.ts");
var ng2_scroll_to_1 = __webpack_require__("../../../../../src/app/lib/ng2-scroll-to/index.ts");
var language_module_1 = __webpack_require__("../../../../../src/app/lib/i18n/language/language.module.ts");
var angulartics2_1 = __webpack_require__("../../../../angulartics2/index.js");
var ga_1 = __webpack_require__("../../../../angulartics2/ga/index.js");
// ---- login part -----
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app.routing.module.ts");
// available everywhere in the app
var const_service_1 = __webpack_require__("../../../../../src/app/lib/services/const.service.ts");
var language_service_1 = __webpack_require__("../../../../../src/app/lib/i18n/language/language.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                // ngScrollTo
                ng2_scroll_to_1.ScrollTo
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({
                    appId: 'app-root'
                }),
                http_1.HttpClientModule,
                // angular forms
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                // material
                material_1.MatSidenavModule,
                material_1.MatButtonModule,
                material_1.MatToolbarModule,
                material_1.MatIconModule,
                material_1.MatListModule,
                material_1.MatCardModule,
                material_1.MatMenuModule,
                material_1.MatFormFieldModule,
                material_1.MatInputModule,
                material_1.MatSelectModule,
                app_routing_module_1.AppRoutingModule,
                // common component
                language_module_1.LanguageModule,
                // meta
                core_2.MetaModule.forRoot(),
                // loger
                ngx_logger_1.LoggerModule.forRoot({ level: ngx_logger_1.NgxLoggerLevel.TRACE, serverLogLevel: ngx_logger_1.NgxLoggerLevel.ERROR }),
                // added to imports
                angulartics2_1.Angulartics2Module.forRoot([ga_1.Angulartics2GoogleAnalytics])
            ],
            providers: [
                const_service_1.ConstResolver, language_service_1.LanguageService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var core_2 = __webpack_require__("../../../../@ngx-meta/core/@ngx-meta/core.es5.js");
var const_service_1 = __webpack_require__("../../../../../src/app/lib/services/const.service.ts");
var appRoutes = [
    {
        path: '',
        canActivateChild: [core_2.MetaGuard],
        resolve: {
            constResolved: const_service_1.ConstResolver
        },
        children: [
            {
                path: 'verification',
                loadChildren: './bigtoken/verificationScreen/verificationScreen.module#VerificationScreenModule'
            },
            {
                path: '**',
                redirectTo: 'verification'
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/lib/i18n/language/language-select.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n.paddingl3em {\r\n    width: 1.2em;\r\n}\r\na:hover {\r\n\r\n    text-decoration: none;\r\n}\r\n</style>\r\n\r\n<ng-container *ngIf=\"type=='mat-menu-item'\">\r\n    <button mat-menu-item [matMenuTriggerFor]=\"Languages\">\r\n        <mat-icon>language</mat-icon>\r\n        <span i18n>Languages</span>\r\n    </button>\r\n    \r\n</ng-container>\r\n<ng-container *ngIf=\"type=='mat-icon-button'\">\r\n    <button mat-icon-button [matMenuTriggerFor]=\"Languages\">\r\n        <mat-icon>language</mat-icon>\r\n    </button>\r\n</ng-container>\r\n<mat-menu #Languages=\"matMenu\">\r\n    <!-- if production -->\r\n    <ng-container >\r\n        <a \r\n                mat-menu-item \r\n                *ngFor=\"let lang of languageService.getList()\" \r\n                [attr.href]=\"lang.url\" \r\n                [disabled]=\"lang.locale==languageService.getLocale()\">\r\n            <img class=\"paddingl3em\" [src]=\"lang.imgUrl\">\r\n            {{lang.label}}\r\n        </a>\r\n    </ng-container>\r\n\r\n   \r\n</mat-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/lib/i18n/language/language-select.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ngx_logger_1 = __webpack_require__("../../../../../src/app/lib/ngx-logger/index.ts");
var language_service_1 = __webpack_require__("../../../../../src/app/lib/i18n/language/language.service.ts");
var SelectLanguageComponent = /** @class */ (function () {
    function SelectLanguageComponent(log, languageService) {
        this.log = log;
        this.languageService = languageService;
        this.log.debug('instantiated:');
    }
    SelectLanguageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SelectLanguageComponent.prototype, "type", void 0);
    SelectLanguageComponent = __decorate([
        core_1.Component({
            selector: 'app-language-select',
            template: __webpack_require__("../../../../../src/app/lib/i18n/language/language-select.component.html"),
        }),
        __metadata("design:paramtypes", [ngx_logger_1.NGXLogger,
            language_service_1.LanguageService])
    ], SelectLanguageComponent);
    return SelectLanguageComponent;
}());
exports.SelectLanguageComponent = SelectLanguageComponent;


/***/ }),

/***/ "../../../../../src/app/lib/i18n/language/language.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var language_select_component_1 = __webpack_require__("../../../../../src/app/lib/i18n/language/language-select.component.ts");
var LanguageModule = /** @class */ (function () {
    function LanguageModule() {
    }
    LanguageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatMenuModule,
                material_1.MatButtonModule,
                material_1.MatIconModule,
                material_1.MatSelectModule
            ],
            declarations: [
                language_select_component_1.SelectLanguageComponent
            ],
            providers: [],
            exports: [
                language_select_component_1.SelectLanguageComponent
            ]
        })
    ], LanguageModule);
    return LanguageModule;
}());
exports.LanguageModule = LanguageModule;


/***/ }),

/***/ "../../../../../src/app/lib/i18n/language/language.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var core_2 = __webpack_require__("../../../core/esm5/core.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ngx_logger_1 = __webpack_require__("../../../../../src/app/lib/ngx-logger/index.ts");
var common_2 = __webpack_require__("../../../common/esm5/common.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var LanguageService = /** @class */ (function () {
    function LanguageService(location, log, router, localeId, platformId) {
        var _this = this;
        this.location = location;
        this.log = log;
        this.router = router;
        this.localeId = localeId;
        this.platformId = platformId;
        this.production = false;
        this.languageData = {
            current: 'en-US',
            list: [],
            enabled: {},
            static: [{
                    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/15px-Flag_of_the_United_Kingdom.svg.png',
                    label: 'English',
                    locale: 'en-US',
                    url: '',
                    enabled: true
                },
                {
                    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/15px-Flag_of_France.svg.png',
                    label: 'Français',
                    locale: 'fr-FR',
                    url: '',
                    enabled: true
                },
                {
                    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/15px-Flag_of_Germany.svg.png',
                    label: 'Deutsche',
                    locale: 'de-DE',
                    url: '',
                    enabled: false
                },
                {
                    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/15px-Flag_of_Indonesia.svg.png',
                    label: 'Bahasa Indonesia',
                    locale: 'id-ID',
                    url: '',
                    enabled: false
                },
                {
                    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/15px-Flag_of_the_People%27s_Republic_of_China.svg.png',
                    label: 'Chinese',
                    locale: 'zh-CN',
                    url: '',
                    enabled: false
                },
                {
                    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/15px-Flag_of_Japan.svg.png',
                    label: '日本語',
                    locale: 'ja-JP',
                    url: '',
                    enabled: true
                },
                {
                    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/15px-Flag_of_South_Korea.svg.png',
                    label: 'Korean',
                    locale: 'ko-KO',
                    url: '',
                    enabled: false
                },
                {
                    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/15px-Flag_of_Russia.svg.png',
                    label: 'русский',
                    locale: 'ru-RU',
                    url: '',
                    enabled: false
                },
                {
                    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/15px-Flag_of_Vietnam.svg.png',
                    label: 'Vietnamese',
                    locale: 'vi-VN',
                    url: '',
                    enabled: false
                },
                {
                    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/15px-Flag_of_Thailand.svg.png',
                    label: 'Thai',
                    locale: 'th-TH',
                    url: '',
                    enabled: true
                },
                {
                    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/15px-Flag_of_Portugal.svg.png',
                    label: 'Português',
                    locale: 'pt-PO',
                    url: '',
                    enabled: false
                }
            ]
        };
        this.production = environment_1.environment.developpement;
        // get the language from the param of the url, ugly but just for testing/dev
        // only from the browser part, client side
        if (environment_1.environment.developpement && common_1.isPlatformBrowser(this.platformId)) {
            this.log.debug('This is dev env...');
            var params = this.getUrlParams();
            this.languageData.current = params['lang'];
            if (!this.languageData.current) {
                this.languageData.current = localeId; // default one
            }
        }
        else {
            // get the locale from the build
            this.languageData.current = localeId; // default one
        }
        this.log.debug('not production extract from parameters:', this.languageData.current);
        this.messageSource = new BehaviorSubject_1.BehaviorSubject(this.languageData.current);
        this.currentLocaleObs = this.messageSource.asObservable();
        this.languageData.static.forEach(function (lang) {
            if (lang.enabled) {
                _this.languageData.list.push(lang);
                _this.languageData.enabled[lang.locale] = true;
            }
        });
        router.events.subscribe(function (val) {
            if (_this.locationPath !== location.path()) {
                _this.locationPath = location.path();
                var _locationPrefix_1 = _this.locationPath.replace(_this.languageData.current, '');
                _this.log.debug('location without locale:', _locationPrefix_1);
                _this.languageData.list.forEach(function (lang) {
                    if (!environment_1.environment.developpement) {
                        // prepare url to swith to other language
                        if (lang.locale === 'en-US') {
                            lang.url = _locationPrefix_1;
                        }
                        else {
                            lang.url = '/' + lang.locale + _locationPrefix_1;
                        }
                    }
                    else {
                        if (lang.locale === 'en-US') {
                            lang.url = _locationPrefix_1;
                        }
                        else {
                            lang.url = _locationPrefix_1 + '?lang=' + lang.locale;
                        }
                    }
                });
                _this.log.debug('languageData:', _this.languageData);
            }
        });
    }
    LanguageService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    LanguageService.prototype.getLocale = function () {
        // this.log.debug('getLocale:', this.languageData.current);
        return this.languageData.current;
    };
    LanguageService.prototype.getList = function () {
        //
        return this.languageData.list;
    };
    /**
     *  Change the current locale under dev env
     * @param lang
     *
     */
    LanguageService.prototype.changeLang = function (lang) {
        this.log.debug('dev:changeLang:', lang);
        this.languageData.current = lang.locale;
        // publish the new value - for later usage in a ngrx store
        this.changeMessage(this.languageData.current);
    };
    /**
     * JavaScript Get URL Parameter
     *
     * @param String prop The specific URL parameter you want to retreive the value for
     * @return String|Object If prop is provided a string value is returned, otherwise an object of all properties is returned
     */
    LanguageService.prototype.getUrlParams = function () {
        var search = decodeURIComponent(window.location.href.slice(window.location.href.indexOf('?') + 1));
        var definitions = search.split('&');
        var params = {};
        definitions.forEach(function (val, key) {
            var parts = val.split('=', 2);
            params[parts[0]] = parts[1];
        });
        return params;
    };
    LanguageService = __decorate([
        core_2.Injectable(),
        __param(3, core_1.Inject(core_1.LOCALE_ID)),
        __param(4, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [common_2.Location,
            ngx_logger_1.NGXLogger,
            router_1.Router, String, Object])
    ], LanguageService);
    return LanguageService;
}());
exports.LanguageService = LanguageService;


/***/ }),

/***/ "../../../../../src/app/lib/ng2-scroll-to/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ScrollTo = /** @class */ (function () {
    function ScrollTo(el) {
        this.el = el;
    }
    ScrollTo.prototype.onClick = function (event) {
        event.preventDefault();
        var scrollEnd;
        if (this.scrollYTarget) {
            if (isNaN(Number(this.scrollYTarget))) {
                throw 'scrollYTarget must have numerical values';
            }
            scrollEnd = this.scrollYTarget;
        }
        var target;
        if (scrollEnd == null) {
            target = this.getTarget();
            if (!target) {
                console.warn('target element do not exist');
                return;
            }
            scrollEnd = target.offsetTop;
        }
        var scrollingElement = this.getScrollableElement(target);
        try {
            if (scrollingElement === document.body) {
                this.smoothScroll(document.documentElement, scrollEnd);
            }
        }
        catch (e) {
            console.warn(e);
        }
        this.smoothScroll(scrollingElement, scrollEnd);
    };
    ScrollTo.prototype.getScrollableElement = function (target) {
        var scrollableElement;
        if (this.scrollableElementSelector) {
            scrollableElement = document.querySelector(this.scrollableElementSelector);
        }
        else if (target != null) {
            scrollableElement = this.findScrollableParent(target);
        }
        else {
            scrollableElement = this.findMainScrollableElement();
        }
        return scrollableElement;
    };
    ScrollTo.prototype.getTarget = function () {
        var target;
        if (this.scrollTargetSelector) {
            target = document.querySelector(this.scrollTargetSelector);
        }
        else if (this.el.nativeElement.href) {
            var href = '#' + this.el.nativeElement.href.split('#')[1];
            target = document.querySelector(href);
        }
        return target;
    };
    ScrollTo.prototype.smoothScroll = function (element, end) {
        var _this = this;
        var duration = 500;
        var clock = Date.now();
        var requestAnimationFrame = window.requestAnimationFrame || function (fn) {
            window.setTimeout(fn, 15);
        };
        var offset = 0;
        if (this.scrollOffSet) {
            if (isNaN(Number(this.scrollOffSet))) {
                throw 'scrollOffSet must have numerical values';
            }
            end -= this.scrollOffSet;
        }
        var start = element.scrollTop;
        var step = function () {
            var elapsed = Date.now() - clock;
            var position = _this.position(start, end, elapsed, duration);
            element.scrollTop = position;
            if (elapsed > duration) {
            }
            else {
                requestAnimationFrame(step);
            }
        };
        step();
    };
    // ease in out function thanks to:
    // http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
    ScrollTo.prototype.easeInOutCubic = function (t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };
    /**
      * calculate the scroll position we should be in
      * given the start and end point of the scroll
      * the time elapsed from the beginning of the scroll
      * and the total duration of the scroll (default 500ms)
      */
    ScrollTo.prototype.position = function (start, end, elapsed, duration) {
        if (elapsed > duration) {
            return end;
        }
        ;
        return start + (end - start) * this.easeInOutCubic(elapsed / duration); // <-- you can change the easing funtion there
        // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll
    };
    /**
      * finds scrollable parent of an element
      * @method findScrollableParent
      * @param {HTMLElement} element
      * @returns {HTMLElement} element
      */
    ScrollTo.prototype.findScrollableParent = function (element) {
        var isBody, hasScrollableSpace, hasVisibleOverflow;
        do {
            element = element.parentElement;
            // set condition variables
            isBody = element === document.body;
            hasScrollableSpace = element.clientHeight < element.scrollHeight;
            hasVisibleOverflow = getComputedStyle(element, null).overflow === 'visible';
        } while (!isBody && !(hasScrollableSpace && !hasVisibleOverflow));
        return element;
    };
    /**
      * finds scrollable parent of an element
      * @method findMainScrollableElement
      * @returns {HTMLElement} element
      */
    ScrollTo.prototype.findMainScrollableElement = function () {
        var element = this.findScrollableChild(document.body);
        if (element != null) {
            return element;
        }
        return document.body;
    };
    ScrollTo.prototype.isScrollable = function (element) {
        var hasScrollableSpace = element.clientHeight < element.scrollHeight;
        var hasVisibleOverflow = getComputedStyle(element, null).overflow === 'visible';
        return hasScrollableSpace && !hasVisibleOverflow;
    };
    ScrollTo.prototype.isScriptTag = function (element) {
        return element.nodeName === 'SCRIPT';
    };
    ScrollTo.prototype.findScrollableChild = function (inputElement) {
        var scrollableElement;
        var i = 0;
        if (this.isScriptTag(inputElement)) {
            return null;
        }
        while (scrollableElement == null && i < inputElement.childElementCount) {
            var element = inputElement.children[i];
            if (this.isScrollable(element)) {
                scrollableElement = element;
                return element;
            }
            scrollableElement = this.findScrollableChild(element);
            i++;
        }
        return scrollableElement;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ScrollTo.prototype, "scrollableElementSelector", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ScrollTo.prototype, "scrollTargetSelector", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ScrollTo.prototype, "scrollYTarget", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ScrollTo.prototype, "scrollOffSet", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], ScrollTo.prototype, "onClick", null);
    ScrollTo = __decorate([
        core_1.Directive({
            selector: '[scrollTo]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ScrollTo);
    return ScrollTo;
}());
exports.ScrollTo = ScrollTo;


/***/ }),

/***/ "../../../../../src/app/lib/ngx-logger/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var logger_service_1 = __webpack_require__("../../../../../src/app/lib/ngx-logger/logger.service.ts");
var logger_service_mock_1 = __webpack_require__("../../../../../src/app/lib/ngx-logger/logger.service.mock.ts");
__export(__webpack_require__("../../../../../src/app/lib/ngx-logger/logger.service.mock.ts"));
__export(__webpack_require__("../../../../../src/app/lib/ngx-logger/logger.service.ts"));
var LoggerModule = /** @class */ (function () {
    function LoggerModule() {
    }
    LoggerModule_1 = LoggerModule;
    LoggerModule.forRoot = function (config) {
        return {
            ngModule: LoggerModule_1,
            providers: [
                { provide: logger_service_1.LoggerConfig, useValue: config || {} },
                logger_service_1.NGXLogger,
                logger_service_mock_1.NGXLoggerMock
            ]
        };
    };
    LoggerModule = LoggerModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule
            ]
        })
    ], LoggerModule);
    return LoggerModule;
    var LoggerModule_1;
}());
exports.LoggerModule = LoggerModule;


/***/ }),

/***/ "../../../../../src/app/lib/ngx-logger/logger.service.mock.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var NGXLoggerMock = /** @class */ (function () {
    function NGXLoggerMock() {
    }
    NGXLoggerMock.prototype.trace = function (message) {
    };
    NGXLoggerMock.prototype.debug = function (message) {
    };
    NGXLoggerMock.prototype.info = function (message) {
    };
    NGXLoggerMock.prototype.log = function (message) {
    };
    NGXLoggerMock.prototype.warn = function (message) {
    };
    NGXLoggerMock.prototype.error = function (message) {
    };
    NGXLoggerMock = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], NGXLoggerMock);
    return NGXLoggerMock;
}());
exports.NGXLoggerMock = NGXLoggerMock;


/***/ }),

/***/ "../../../../../src/app/lib/ngx-logger/logger.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var LoggerConfig = /** @class */ (function () {
    function LoggerConfig() {
    }
    return LoggerConfig;
}());
exports.LoggerConfig = LoggerConfig;
var NgxLoggerLevel;
(function (NgxLoggerLevel) {
    NgxLoggerLevel[NgxLoggerLevel["TRACE"] = 0] = "TRACE";
    NgxLoggerLevel[NgxLoggerLevel["DEBUG"] = 1] = "DEBUG";
    NgxLoggerLevel[NgxLoggerLevel["INFO"] = 2] = "INFO";
    NgxLoggerLevel[NgxLoggerLevel["LOG"] = 3] = "LOG";
    NgxLoggerLevel[NgxLoggerLevel["WARN"] = 4] = "WARN";
    NgxLoggerLevel[NgxLoggerLevel["ERROR"] = 5] = "ERROR";
    NgxLoggerLevel[NgxLoggerLevel["OFF"] = 6] = "OFF";
})(NgxLoggerLevel = exports.NgxLoggerLevel || (exports.NgxLoggerLevel = {}));
var Levels = [
    'TRACE',
    'DEBUG',
    'INFO',
    'LOG',
    'WARN',
    'ERROR',
    'OFF'
];
var NGXLogger = /** @class */ (function () {
    function NGXLogger(http, platformId, options) {
        this.http = http;
        this.platformId = platformId;
        this.options = options;
        if (!this.options) {
            this.options = {
                level: NgxLoggerLevel.OFF,
                serverLogLevel: NgxLoggerLevel.OFF
            };
        }
        this._serverLogLevel = this.options.serverLogLevel;
        this._clientLogLevel = this.options.level;
        this._isIE = common_1.isPlatformBrowser(platformId) &&
            !!(navigator.userAgent.indexOf('MSIE') !== -1 || navigator.userAgent.match(/Trident\//) || navigator.userAgent.match(/Edge\//));
    }
    NGXLogger.prototype.trace = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
        this._log(NgxLoggerLevel.TRACE, true, message, additional);
    };
    NGXLogger.prototype.debug = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
        this._log(NgxLoggerLevel.DEBUG, true, message, additional);
    };
    NGXLogger.prototype.info = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
        this._log(NgxLoggerLevel.INFO, true, message, additional);
    };
    NGXLogger.prototype.log = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
        this._log(NgxLoggerLevel.LOG, true, message, additional);
    };
    NGXLogger.prototype.warn = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
        this._log(NgxLoggerLevel.WARN, true, message, additional);
    };
    NGXLogger.prototype.error = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
        this._log(NgxLoggerLevel.ERROR, true, message, additional);
    };
    NGXLogger.prototype._timestamp = function () {
        return new Date().toISOString();
    };
    NGXLogger.prototype._logOnServer = function (level, message, additional) {
        var _this = this;
        if (!this.options.serverLoggingUrl) {
            return;
        }
        // if the user provides a serverLogLevel and the current level is than that do not log
        if (level < this._serverLogLevel) {
            return;
        }
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        this.http.post(this.options.serverLoggingUrl, {
            level: Levels[level],
            message: message,
            additional: additional,
            timestamp: this._timestamp()
        }, {
            headers: headers
        })
            .subscribe(function (res) { return null; }, function (error) { return _this._log(NgxLoggerLevel.ERROR, false, 'FAILED TO LOG ON SERVER'); });
    };
    NGXLogger.prototype._logIE = function (level, message, additional) {
        switch (level) {
            case NgxLoggerLevel.WARN:
                console.warn.apply(console, [this._timestamp() + " [" + Levels[level] + "] ", message].concat(additional));
                break;
            case NgxLoggerLevel.ERROR:
                console.error.apply(console, [this._timestamp() + " [" + Levels[level] + "] ", message].concat(additional));
                break;
            case NgxLoggerLevel.INFO:
                console.info.apply(console, [this._timestamp() + " [" + Levels[level] + "] ", message].concat(additional));
                break;
            default:
                console.log.apply(console, [this._timestamp() + " [" + Levels[level] + "] ", message].concat(additional));
        }
    };
    NGXLogger.prototype._log = function (level, logOnServer, message, additional) {
        if (additional === void 0) { additional = []; }
        if (!message) {
            return;
        }
        // Allow logging on server even if client log level is off
        if (logOnServer) {
            this._logOnServer(level, message, additional);
        }
        // if no message or the log level is less than the environ
        if (level < this._clientLogLevel) {
            return;
        }
        if (typeof message === 'object') {
            try {
                message = JSON.stringify(message, null, 2);
            }
            catch (e) {
                additional = [message].concat(additional);
                message = 'circular object in message. ';
            }
        }
        // Coloring doesn't work in IE
        if (this._isIE) {
            return this._logIE(level, message, additional);
        }
        var color1;
        var defaultColor = this.options.enableDarkTheme ? 'white' : 'black';
        if (common_1.isPlatformBrowser(this.platformId)) {
            switch (level) {
                case NgxLoggerLevel.TRACE:
                    color1 = 'blue';
                    break;
                case NgxLoggerLevel.DEBUG:
                    color1 = 'green';
                    break;
                case NgxLoggerLevel.INFO:
                case NgxLoggerLevel.LOG:
                    color1 = 'gray';
                    break;
                case NgxLoggerLevel.WARN:
                    color1 = 'orange';
                    break;
                case NgxLoggerLevel.ERROR:
                    color1 = 'red';
                    break;
                case NgxLoggerLevel.OFF:
                default:
                    return;
            }
        }
        else {
            defaultColor = '\x1b[0m';
            switch (level) {
                case NgxLoggerLevel.TRACE:
                    color1 = '\x1b[36m';
                    break;
                case NgxLoggerLevel.DEBUG:
                    color1 = '\x1b[32m';
                    break;
                case NgxLoggerLevel.INFO:
                case NgxLoggerLevel.LOG:
                    color1 = '\x1b[34m';
                    break;
                case NgxLoggerLevel.WARN:
                    color1 = '\x1b[33m';
                    break;
                case NgxLoggerLevel.ERROR:
                    color1 = '\x1b[31m';
                    break;
                case NgxLoggerLevel.OFF:
                default:
                    return;
            }
        }
        // only on the client side
        if (common_1.isPlatformBrowser(this.platformId)) {
            console.log.apply(console, ["%c" + this._timestamp() + " [" + Levels[level] + "] %c" + message, "color:" + color1, "color:" + defaultColor].concat(additional));
        }
        else {
            console.log.apply(console, ["%s" + this._timestamp() + " [" + Levels[level] + "] %s" + message, "" + color1, "" + defaultColor].concat(additional));
        }
    };
    NGXLogger = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(core_1.PLATFORM_ID)),
        __param(2, core_1.Optional()),
        __metadata("design:paramtypes", [http_1.HttpClient, Object, LoggerConfig])
    ], NGXLogger);
    return NGXLogger;
}());
exports.NGXLogger = NGXLogger;


/***/ }),

/***/ "../../../../../src/app/lib/services/const.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var Rx_1 = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var ngx_logger_1 = __webpack_require__("../../../../../src/app/lib/ngx-logger/index.ts");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var ConstResolver = /** @class */ (function () {
    function ConstResolver(log, http) {
        this.log = log;
        this.http = http;
        this.apiServer = {
            protocol: environment_1.environment.appServer.protocol,
            host: environment_1.environment.appServer.host,
            port: environment_1.environment.appServer.port,
            getUrl: function () {
                return this.protocol + '://' + this.host + ':' + this.port;
            }
        };
        this.log.info('apiServer:', this.apiServer.getUrl());
    }
    ConstResolver.prototype.get = function () {
        return this.currentConst;
    };
    ConstResolver.prototype.resolve = function (route, state) {
        var _this = this;
        this.log.debug('ConstResolver 1 ...');
        var obs = new Rx_1.Observable(function (observer) {
            _this.log.debug('ConstResolver 2 ...');
            //
            var req = _this.getJSON()
                .subscribe(function (response) {
                _this.log.debug('ConstResolver 3:', response.data);
                //
                observer.next(response.data);
                observer.complete();
            });
        });
        return obs;
    };
    /**
     *
     * Add the filters ? maybe not needed only 491 lines after all
     *
     */
    ConstResolver.prototype.getJSON = function () {
        var _this = this;
        this.log.debug('Run getList:', this.currentConst);
        var req;
        if (this.currentConst != null) {
            this.log.debug('Return cached result ...');
            req = Rx_1.Observable.of({
                data: this.currentConst
            });
        }
        else {
            var apiUrl = this.apiServer.getUrl() + '/api/app/ico/const';
            this.log.debug('apiUrl:', apiUrl);
            req = this.http
                .get(apiUrl)
                .catch(this.handleHttpError.bind(this))
                .share();
            req.subscribe(function (response) {
                if (response.success) {
                    _this.currentConst = response.data;
                    _this.log.debug('Record the const on the cache:', _this.currentConst);
                }
                else {
                    _this.log.warn(' error:', response);
                }
            });
        }
        return req;
    };
    /**
     *
     * handle the http error and app error
     *
     * @param err
     * @returns {Observable<{success: boolean; message: any}>}
     */
    ConstResolver.prototype.handleHttpError = function (err) {
        this.log.warn('handleHttpError:', err);
        this.log.warn('handleHttpError:', err.error);
        var errorMsg;
        // application error no need to unwrap
        if (err.error && err.error.AuthError) {
            errorMsg = err.error.message;
        }
        else {
            // try to unwrap the error
            try {
                var data = JSON.parse(err.error);
                errorMsg = data.message;
                this.log.warn('Application error:', data);
            }
            catch (e) {
                // other error, generic one
                this.log.error('Not an application error:', e);
                errorMsg = 'Server is not responding please try again later';
            }
        }
        return Rx_1.Observable.of({
            success: false,
            message: errorMsg
        });
    };
    ConstResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ngx_logger_1.NGXLogger, http_1.HttpClient])
    ], ConstResolver);
    return ConstResolver;
}());
exports.ConstResolver = ConstResolver;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: true,
    developpement: false,
    apiServer: {
        protocol: 'https',
        host: 'apikycuat.icoconsulting.asia',
        port: 443
    },
    appServer: {
        protocol: 'https',
        host: 'apikycuat.icoconsulting.asia',
        port: 443
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_browser_module_1 = __webpack_require__("../../../../../src/app/app.browser.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_browser_module_1.AppBrowserModule);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map