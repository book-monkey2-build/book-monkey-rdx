webpackJsonp([0,3],{

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_timer__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_timer__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ADD_ITEM = 'ADD_ITEM';
var REMOVE_ITEM = 'REMOVE_ITEM';

var CartActions = (function () {
    function CartActions(redux) {
        this.redux = redux;
    }
    CartActions.prototype.createSingle = function (book) {
        this.redux.dispatch({ type: ADD_ITEM, payload: book });
    };
    CartActions.prototype.removeSingle = function (book) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].timer(2000).subscribe(function () {
            _this.redux.dispatch({ type: REMOVE_ITEM, payload: book });
        });
    };
    CartActions = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_redux__["NgRedux"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_redux__["NgRedux"]) === 'function' && _a) || Object])
    ], CartActions);
    return CartActions;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/cart.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book(isbn, title, price) {
        this.isbn = isbn;
        this.title = title;
        this.price = price;
    }
    return Book;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/book.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ADD_BOOK = 'ADD_BOOK';
var BooksActions = (function () {
    function BooksActions(redux) {
        this.redux = redux;
    }
    BooksActions.prototype.addSingle = function (book) {
        this.redux.dispatch({ type: ADD_BOOK, payload: book });
    };
    BooksActions = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"]) === 'function' && _a) || Object])
    ], BooksActions);
    return BooksActions;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/books.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__books__ = __webpack_require__(310);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__books__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart__ = __webpack_require__(204);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__cart__["a"]; });


//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/index.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-root',
            template: __webpack_require__(655)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/app.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/environment.js.map

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 370;


/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(485);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/main.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_redux__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_book_form_book_form_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_book_item_book_item_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_cart_item_cart_item_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__containers_dashboard_dashboard_component__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__containers_cart_cart_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reducers_index__ = __webpack_require__(488);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule(ngRedux, devTools) {
        this.ngRedux = ngRedux;
        this.devTools = devTools;
        var enhancers = [];
        if (__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].production === false) {
            enhancers = enhancers.concat([devTools.enhancer()]);
        }
        this.ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_13__reducers_index__["a" /* reducer */], {}, [], enhancers);
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_book_form_book_form_component__["a" /* BookFormComponent */],
                __WEBPACK_IMPORTED_MODULE_11__containers_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_book_item_book_item_component__["a" /* BookItemComponent */],
                __WEBPACK_IMPORTED_MODULE_12__containers_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_cart_item_cart_item_component__["a" /* CartItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_redux__["NgReduxModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__actions__["a" /* BooksActions */],
                __WEBPACK_IMPORTED_MODULE_7__actions__["b" /* CartActions */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_redux__["DevToolsExtension"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_redux__["NgRedux"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_redux__["NgRedux"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_redux__["DevToolsExtension"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_redux__["DevToolsExtension"]) === 'function' && _b) || Object])
    ], AppModule);
    return AppModule;
    var _a, _b;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/app.module.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book__ = __webpack_require__(205);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookFormComponent = (function () {
    function BookFormComponent() {
        this.created = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BookFormComponent.prototype.submitted = function (form) {
        this.created.emit(new __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */](form.controls['isbn'].value, form.controls['title'].value, form.controls['price'].value));
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], BookFormComponent.prototype, "created", void 0);
    BookFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-book-form',
            template: __webpack_require__(656),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], BookFormComponent);
    return BookFormComponent;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/book-form.component.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book__ = __webpack_require__(205);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookItemComponent = (function () {
    function BookItemComponent() {
        this.added = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */]) === 'function' && _a) || Object)
    ], BookItemComponent.prototype, "book", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], BookItemComponent.prototype, "added", void 0);
    BookItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-book-item',
            template: __webpack_require__(657),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            styles: ['.ui.card.book { margin-bottom:8px; }']
        }), 
        __metadata('design:paramtypes', [])
    ], BookItemComponent);
    return BookItemComponent;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/book-item.component.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book__ = __webpack_require__(205);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartItemComponent = (function () {
    function CartItemComponent() {
        this.removed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */]) === 'function' && _a) || Object)
    ], CartItemComponent.prototype, "item", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], CartItemComponent.prototype, "removed", void 0);
    CartItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-cart-item',
            template: __webpack_require__(658),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            styles: ['.ui.red.card.item { margin-bottom:8px; }']
        }), 
        __metadata('design:paramtypes', [])
    ], CartItemComponent);
    return CartItemComponent;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/cart-item.component.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_cart__ = __webpack_require__(204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = (function () {
    function CartComponent(cart) {
        this.cart = cart;
    }
    CartComponent.prototype.removeItemFromCart = function (book) {
        this.cart.removeSingle(book);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__["select"])(function (state) { return state.cart.total; }), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"]) === 'function' && _a) || Object)
    ], CartComponent.prototype, "total$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__["select"])(function (state) { return state.cart.items; }), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"]) === 'function' && _b) || Object)
    ], CartComponent.prototype, "items$", void 0);
    CartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'bm-cart',
            template: __webpack_require__(659),
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__actions_cart__["a" /* CartActions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__actions_cart__["a" /* CartActions */]) === 'function' && _c) || Object])
    ], CartComponent);
    return CartComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/cart.component.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(311);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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
    function DashboardComponent(books, cart) {
        this.books = books;
        this.cart = cart;
    }
    DashboardComponent.prototype.addBook = function (book) {
        this.books.addSingle(book);
    };
    DashboardComponent.prototype.addBookToCart = function (book) {
        this.cart.createSingle(book);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__["select"])(function (state) { return state.books.all; }), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === 'function' && _a) || Object)
    ], DashboardComponent.prototype, "books$", void 0);
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-dashboard',
            template: __webpack_require__(660),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__actions__["a" /* BooksActions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__actions__["a" /* BooksActions */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__actions__["b" /* CartActions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__actions__["b" /* CartActions */]) === 'function' && _c) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/dashboard.component.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(312);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(479);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/index.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_books__ = __webpack_require__(310);
/* harmony export (immutable) */ __webpack_exports__["a"] = booksReducer;

var INITIAL_STATE = {
    all: []
};
function booksReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_books__["b" /* ADD_BOOK */]:
            return { all: state.all.concat([action.payload]) };
        default:
            return state;
    }
}
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/books.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_cart__ = __webpack_require__(204);
/* harmony export (immutable) */ __webpack_exports__["a"] = cartReducer;

var INITIAL_STATE = {
    items: [],
    total: 0
};
function cartReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_cart__["b" /* ADD_ITEM */]:
            var enhanced = state.items.concat([action.payload]);
            return {
                items: enhanced,
                total: enhanced.map(function (i) { return i.price; }).reduce(function (x, y) { return x + y; }, 0)
            };
        case __WEBPACK_IMPORTED_MODULE_0__actions_cart__["c" /* REMOVE_ITEM */]:
            var filtered = state.items.filter(function (book) { return book.isbn !== action.payload.isbn; });
            return {
                items: filtered,
                total: filtered.map(function (i) { return i.price; }).reduce(function (x, y) { return x + y; }, 0)
            };
        default:
            return state;
    }
}
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/cart.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(487);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });



var reducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    books: __WEBPACK_IMPORTED_MODULE_1__books__["a" /* booksReducer */],
    cart: __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* cartReducer */]
});
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/index.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey-rdx/src/polyfills.js.map

/***/ }),

/***/ 655:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui two column doublin stackable grid container\">\r\n  <div class=\"column\">\r\n    <bm-dashboard></bm-dashboard>\r\n  </div>\r\n  <div class=\"column\">\r\n    <bm-cart></bm-cart>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 656:
/***/ (function(module, exports) {

module.exports = "<form class=\"ui form\" #f=\"ngForm\" (ngSubmit)=\"submitted(f)\">\r\n  <div class=\"field\">\r\n    <label>ISBN</label>\r\n    <input type=\"text\" name=\"isbn\" placeholder=\"123-642378421-4\" ngModel>\r\n  </div>\r\n  <div class=\"field\">\r\n    <label>Title</label>\r\n    <input type=\"text\" name=\"title\" placeholder=\"Title\" ngModel>\r\n  </div>\r\n  <div class=\"field\">\r\n    <label>Price in Euro</label>\r\n    <input type=\"number\" name=\"price\" placeholder=\"Price in Euro\" ngModel>\r\n  </div>\r\n  <button class=\"ui button\" type=\"submit\">Add Book</button>\r\n</form>\r\n"

/***/ }),

/***/ 657:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui card book\">\r\n  <div class=\"content\">\r\n    <div class=\"header\">{{ book.title }}</div>\r\n    <div class=\"description\">ISBN: {{ book.isbn }}</div>\r\n     <div class=\"description\">{{ book.price | currency:'EUR':true:'2.2-4' }}</div>\r\n  </div>\r\n  <div class=\"extra content\">\r\n    <button class=\"ui button\" (click)=\"added.emit(book)\">\r\n      <i class=\"add icon\"></i> Add to cart\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 658:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui red card item\">\r\n  <div class=\"content\">\r\n    <div class=\"header\">{{ item.title }}</div>\r\n    <div class=\"description\">{{ item.price | currency:'EUR':true:'2.2-4' }}</div>\r\n  </div>\r\n    <div class=\"extra content\">\r\n      <button class=\"ui button\" (click)=\"removed.emit(item)\">Remove from cart</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

module.exports = "<h2>Cart</h2>\r\n<bm-cart-item [item]=\"cardItem\"\r\n              (removed)=\"removeItemFromCart($event)\"\r\n              *ngFor=\"let cardItem of items$ | async\">\r\n</bm-cart-item>\r\n<h4 class=\"ui header\">Total: {{ total$ | async | currency:'EUR':true:'2.2-4' }}</h4>\r\n"

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

module.exports = "<h2>Add a new book</h2>\r\n<bm-book-form (created)=\"addBook($event)\"></bm-book-form>\r\n\r\n<h2>Books</h2>\r\n<bm-book-item [book]=\"bookItem\"\r\n              (added)=\"addBookToCart($event)\"\r\n              *ngFor=\"let bookItem of books$ | async\"></bm-book-item>\r\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(371);


/***/ })

},[706]);
//# sourceMappingURL=main.bundle.map