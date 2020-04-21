webpackJsonp([1,4],{

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}\r\n\r\n .selected {\r\n    background-color: #CFD8DC !important;\r\n    color: white;\r\n  }\r\n  .heroes {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n.treasures h2 {\r\n  text-decoration: underline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

module.exports = "<h1>Dark Souls <br />The board-savegame!</h1>\r\n<small>Version 0.3 - beta - still under development</small>\r\n<p>You need to write down the status of your current game? No! Input your data heroes,\r\n  save your data locally. Next time just upload the file move on.</p>\r\n<p>\r\nCriticism? Suggestions? Found a bug? Report it on GitHub:\r\n<a class=\"github-button\" href=\"https://github.com/kaito23/ds-boardgame-savegame/issues\" data-icon=\"octicon-issue-opened\" aria-label=\"Issue kaito23/ds-boardgame-savegame on GitHub\">Issue</a>\r\n</p>\r\n<p>\r\n  <a href=\"https://redd.it/6tg5zu\" target=\"_blank\"> We are on reddit\r\n    <img src=\"//www.redditstatic.com/spreddit4.gif\" alt=\"go to reddit\" border=\"0\" /> \r\n  </a>\r\n</p>\r\n\r\n<p>Like the app? Leave a star\r\n<a class=\"github-button\" href=\"https://github.com/kaito23/ds-boardgame-savegame\" data-icon=\"octicon-star\" aria-label=\"Star kaito23/ds-boardgame-savegame on GitHub\">Star</a>\r\n<div *ngIf=\"showUpload === true\">\r\n  <hr />\r\n  <p>Upload your savegame</p>\r\n  <input type=\"file\" name=\"File Upload\" id=\"txtFileUpload\" (change)=\"changeListener($event)\" accept=\".json\"/>\r\n  <hr />\r\n</div>\r\n<div *ngIf=\"showUpload === true\">\r\n<h2>General</h2>\r\nSelect the used heroes:<br />\r\n<ul>\r\n   <!--<li>All</li>-->\r\n  <li *ngFor=\"let hero of aviableHeroes\" (click)=\"newSelection(hero)\">{{hero}}</li>\r\n</ul>\r\n<br />\r\n</div>\r\n\r\n<div *ngIf=\"chosenHeroes.length !== 0\">\r\n  <app-character-editing [chosenHeroes]=\"chosenHeroes\" [selectedHero]=\"selectedHero\" [showUpload]=\"showUpload\" [aviableHeroes]=\"aviableHeroes\" [heroesHeadline]=\"heroesHeadline\"></app-character-editing>\r\n</div>\r\n<br />\r\n\r\n\r\nSouls: <input type=\"number\" min=\"0\" [(ngModel)]=\"gameData.souls\">\r\n\r\n\r\n<h2>Inventory:</h2>\r\n\r\n<div class=\"row treasures\">\r\n    <div class=\"column _12\">Click the headline for sorting</div>\r\n<div class=\"column _3\">\r\n  <h2 (click)=\"sortCommonTreasures()\">Common</h2>\r\n  <div class=\"box\" *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\" [class.selected]=\"isInList(hero)\">{{hero}}</div>\r\n</div>\r\n<div class=\"column _3\">\r\n  <h2 (click)=\"sortClassSpecificTreasures()\">Class specific</h2>\r\n  <div class=\"box\" *ngFor=\"let hero of classSpecificTreasures\" (click)=\"onSelect(hero)\" [class.selected]=\"isInList(hero)\">{{hero}}</div>\r\n</div>\r\n <div class=\"column _3\">\r\n    <h2 (click)=\"sortLegendaryTreasures()\">Legendary</h2>\r\n    <div class=\"box\" *ngFor=\"let hero of legendaryTreasures\" (click)=\"onSelect(hero)\" [class.selected]=\"isInList(hero)\">{{hero}}</div>\r\n  </div>\r\n\r\n  <div class=\"column _3\">\r\n    <h2 (click)=\"sortBossLoottreasures()\">Boss loot</h2>\r\n    <div class=\"box\" *ngFor=\"let hero of bossLoot\" (click)=\"onSelect(hero)\" [class.selected]=\"isInList(hero)\">{{hero}}</div>\r\n  </div>\r\n\r\n</div>\r\n<button type=\"button\" class=\"btn success btn-l\" (click)=\"save()\">Save</button>\r\n"

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"column _2\">\r\n    <h2>{{heroesHeadline}}</h2>\r\n\t\t<ul>\r\n\t\t\t<li *ngFor=\"let hero of chosenHeroes\">\r\n\t\t\t\t<span *ngIf=\"showUpload\" (click)=\"removeFromSelection(hero)\">(x)</span> <span (click)=\"heroSelect(hero)\">{{hero.character}} (click to edit)</span>\r\n\t\t\t</li>\r\n    </ul>\r\n  </div>\r\n\t<div *ngIf=\"editingHeroDeatils\" class=\"column _10\">\r\n    <div class=\"row\">\r\n    \t<div class=\"column _12\">\r\n        <h2>Details {{editingHeroDeatils.character}}</h2> \r\n        <p>Please select your inventory first!</p>\r\n        Player:\r\n\t\t\t\t<input [(ngModel)]=\"editingHeroDeatils.player\" placeholder=\"name\">\r\n\t\t\t\t<br /> Ember:\r\n        <input type=\"checkbox\" [(ngModel)]=\"editingHeroDeatils.ember\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"column _6\">\r\n        <table>\r\n\t\t\t\t\t<tr>\r\n            <th>Attribute</th>\r\n            <th>Base</th>\r\n\t\t\t\t\t\t<th>T1</th>\r\n\t\t\t\t\t\t<th>T2</th>\r\n\t\t\t\t\t\t<th>T3</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n            <td>Strength</td>\r\n            <td>\r\n\t\t\t\t\t\t\t<input name=\"strengthTier\" ng-control=\"strengthTier\" type=\"radio\" [value]=\"0\" [(ngModel)]=\"editingHeroDeatils.strengthTier\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input name=\"strengthTier\" ng-control=\"strengthTier\" type=\"radio\" [value]=\"1\" [(ngModel)]=\"editingHeroDeatils.strengthTier\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input name=\"strengthTier\" ng-control=\"strengthTier\" type=\"radio\" [value]=\"2\" [(ngModel)]=\"editingHeroDeatils.strengthTier\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input name=\"strengthTier\" ng-control=\"strengthTier\" type=\"radio\" [value]=\"3\" [(ngModel)]=\"editingHeroDeatils.strengthTier\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n            <td>Dexterity</td>\r\n            <td>\r\n\t\t\t\t\t\t\t<input name=\"dexterityTier\" ng-control=\"dexterityTier\" type=\"radio\" [value]=\"0\" [(ngModel)]=\"editingHeroDeatils.dexterityTier\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input name=\"dexterityTier\" ng-control=\"dexterityTier\" type=\"radio\" [value]=\"1\" [(ngModel)]=\"editingHeroDeatils.dexterityTier\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input name=\"dexterityTier\" ng-control=\"dexterityTier\" type=\"radio\" [value]=\"2\" [(ngModel)]=\"editingHeroDeatils.dexterityTier\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input name=\"dexterityTier\" ng-control=\"dexterityTier\" type=\"radio\" [value]=\"3\" [(ngModel)]=\"editingHeroDeatils.dexterityTier\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n            <td>Intelligence</td>\r\n            <td>\r\n\t\t\t\t\t\t\t<input name=\"intelligenceTier\" ng-control=\"intelligenceTier\" type=\"radio\" [value]=\"0\" [(ngModel)]=\"editingHeroDeatils.intelligenceTier\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input name=\"intelligenceTier\" ng-control=\"intelligenceTier\" type=\"radio\" [value]=\"1\" [(ngModel)]=\"editingHeroDeatils.intelligenceTier\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input name=\"intelligenceTier\" ng-control=\"intelligenceTier\" type=\"radio\" [value]=\"2\" [(ngModel)]=\"editingHeroDeatils.intelligenceTier\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input name=\"intelligenceTier\" ng-control=\"intelligenceTier\" type=\"radio\" [value]=\"3\" [(ngModel)]=\"editingHeroDeatils.intelligenceTier\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n            <td>Faith</td>\r\n            <td>\r\n\t\t\t\t\t\t\t<input name=\"faithTier\" ng-control=\"faithTier\" type=\"radio\" [value]=\"0\" [(ngModel)]=\"editingHeroDeatils.faithTier\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input name=\"faithTier\" ng-control=\"faithTier\" type=\"radio\" [value]=\"1\" [(ngModel)]=\"editingHeroDeatils.faithTier\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input name=\"faithTier\" ng-control=\"faithTier\" type=\"radio\" [value]=\"2\" [(ngModel)]=\"editingHeroDeatils.faithTier\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input name=\"faithTier\" ng-control=\"faithTier\" type=\"radio\" [value]=\"3\" [(ngModel)]=\"editingHeroDeatils.faithTier\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"column _6\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>L-Weapon 1</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<select [(ngModel)]=\"editingHeroDeatils.leftHand1\">\r\n\t\t\t\t\t\t\t\t<option></option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let option of selectedHero\" [ngValue]=\"option\">{{option}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>L-Weapon 2</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<select [(ngModel)]=\"editingHeroDeatils.leftHand2\">\r\n\t\t\t\t\t\t\t\t<option></option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let option of selectedHero\" [ngValue]=\"option\">{{option}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>L-Weapon 3</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<select [(ngModel)]=\"editingHeroDeatils.leftHand3\">\r\n\t\t\t\t\t\t\t\t<option></option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let option of selectedHero\" [ngValue]=\"option\">{{option}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>R-Weapon 1</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<select [(ngModel)]=\"editingHeroDeatils.rightHand1\">\r\n\t\t\t\t\t\t\t\t<option></option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let option of selectedHero\" [ngValue]=\"option\">{{option}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>R-Weapon 2</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<select [(ngModel)]=\"editingHeroDeatils.rightHand2\">\r\n\t\t\t\t\t\t\t\t<option></option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let option of selectedHero\" [ngValue]=\"option\">{{option}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>R-Weapon 3</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<select [(ngModel)]=\"editingHeroDeatils.rightHand3\">\r\n\t\t\t\t\t\t\t\t<option></option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let option of selectedHero\" [ngValue]=\"option\">{{option}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t</table>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"column _6\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Inventory 1</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<select [(ngModel)]=\"editingHeroDeatils.inventory1\">\r\n\t\t\t\t\t\t\t\t<option></option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let option of selectedHero\" [ngValue]=\"option\">{{option}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Inventory 2</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<select [(ngModel)]=\"editingHeroDeatils.inventory2\">\r\n\t\t\t\t\t\t\t\t<option></option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let option of selectedHero\" [ngValue]=\"option\">{{option}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Inventory 3</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<select [(ngModel)]=\"editingHeroDeatils.inventory3\">\r\n\t\t\t\t\t\t\t\t<option></option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let option of selectedHero\" [ngValue]=\"option\">{{option}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"column _6\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Amour 1</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<select [(ngModel)]=\"editingHeroDeatils.amour1\">\r\n\t\t\t\t\t\t\t\t<option></option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let option of selectedHero\" [ngValue]=\"option\">{{option}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Amour 2</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<select [(ngModel)]=\"editingHeroDeatils.amour2\">\r\n\t\t\t\t\t\t\t\t<option></option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let option of selectedHero\" [ngValue]=\"option\">{{option}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Amour 3</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<select [(ngModel)]=\"editingHeroDeatils.amour3\">\r\n\t\t\t\t\t\t\t\t<option></option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let option of selectedHero\" [ngValue]=\"option\">{{option}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t</table>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

module.exports = "nothin"

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(75);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Character; });
var Character = (function () {
    function Character() {
    }
    return Character;
}());

//# sourceMappingURL=character.js.map

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 74;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(92);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_common_treasure_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_legendary_treasure_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_class_specific_treasure_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_boss_loot_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_game_data__ = __webpack_require__(87);
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
    function AppComponent(commonTreasureService, legendaryTreasureService, classSpecificTreasureService, bossLootService) {
        this.commonTreasureService = commonTreasureService;
        this.legendaryTreasureService = legendaryTreasureService;
        this.classSpecificTreasureService = classSpecificTreasureService;
        this.bossLootService = bossLootService;
        this.aviableHeroes = ["Herald", "Knight", "Assassin", "Warrior"];
        this.chosenHeroes = [];
        this.showUpload = true;
        this.heroesHeadline = "Edit details";
        this.selectedHero = [];
        this.sortCommonTreasuresDefault = false;
        this.sortClassSpecificTreasuresDefault = false;
        this.sortLegendaryTreasuresDefault = false;
        this.sortBossLottTreasuresDefault = false;
        this.selectedHero;
        this.gameData = new __WEBPACK_IMPORTED_MODULE_6__models_game_data__["a" /* GameData */]();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    AppComponent.prototype.newSelection = function (hero) {
        console.log(hero);
        var index = this.aviableHeroes.indexOf(hero);
        if (index > -1) {
            this.aviableHeroes.splice(index, 1);
        }
        var newCharacter = new __WEBPACK_IMPORTED_MODULE_1__models_character__["a" /* Character */]();
        newCharacter.character = hero;
        this.chosenHeroes.push(newCharacter);
    };
    AppComponent.prototype.onSelect = function (hero) {
        if (!this.isInList(hero)) {
            this.selectedHero.push(hero);
        }
        else {
            var index = this.selectedHero.indexOf(hero);
            if (index > -1) {
                this.selectedHero.splice(index, 1);
            }
        }
    };
    AppComponent.prototype.getHeroes = function () {
        this.heroes = this.commonTreasureService.getHeroes();
        this.sortCommonTreasures();
        this.legendaryTreasures = this.legendaryTreasureService.getHeroes();
        this.sortLegendaryTreasures();
        this.classSpecificTreasures = this.classSpecificTreasureService.getHeroes();
        this.sortClassSpecificTreasures();
        this.bossLoot = this.bossLootService.getBossLoot();
        this.sortBossLoottreasures();
    };
    AppComponent.prototype.isInList = function (hero) {
        for (var i = 0; i < this.selectedHero.length; i++) {
            if (this.selectedHero[i] === hero) {
                return true;
            }
        }
        return false;
    };
    AppComponent.prototype.save = function () {
        //var data = this.selectedHero; 
        this.gameData.inventory = this.selectedHero;
        this.gameData.characters = this.chosenHeroes;
        var data = JSON.stringify(this.gameData);
        var filename = "save.json";
        var type = "json";
        var file = new Blob([data], { type: type });
        if (window.navigator.msSaveOrOpenBlob)
            window.navigator.msSaveOrOpenBlob(file, filename);
        else {
            var a = document.createElement("a"), url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    };
    AppComponent.prototype.changeListener = function ($event) {
        this.upload($event.target);
    };
    AppComponent.prototype.upload = function (inputValue) {
        var _this = this;
        var dataARR = this.selectedHero;
        var data = null;
        var file = inputValue.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var contents = e.target;
            var csvData = reader.result;
            data = csvData;
            if (data && data.length > 0) {
                console.log('Imported -' + data + '- rows successfully!');
            }
            else {
                alert('No data to import!');
            }
        };
        reader.readAsText(file);
        reader.onerror = function () {
            alert('Unable to read ' + file);
        };
        reader.onloadend = function (e) {
            //this.selectedHero = extractData(data, dataARR);
            console.log("---");
            console.log("import:");
            //console.log(data);
            var test = JSON.parse(data);
            console.log(test.souls);
            //this.gameData.souls = test.souls;
            _this.gameData.souls = test.souls;
            for (var i = 0; i < test.inventory.length; i++) {
                console.log(test.inventory[i]);
                var we = test.inventory[i];
                _this.onSelect(we);
            }
            for (var i = 0; i < test.characters.length; i++) {
                console.log("i: " + i);
                var newCharacter = new __WEBPACK_IMPORTED_MODULE_1__models_character__["a" /* Character */]();
                newCharacter.character = test.characters[i].character;
                newCharacter.player = test.characters[i].player;
                newCharacter.ember = test.characters[i].ember;
                newCharacter.strengthTier = test.characters[i].strengthTier;
                newCharacter.dexterityTier = test.characters[i].dexterityTier;
                newCharacter.intelligenceTier = test.characters[i].intelligenceTier;
                newCharacter.faithTier = test.characters[i].faithTier;
                newCharacter.leftHand1 = test.characters[i].leftHand1;
                newCharacter.leftHand2 = test.characters[i].leftHand2;
                newCharacter.leftHand3 = test.characters[i].leftHand3;
                newCharacter.rightHand1 = test.characters[i].rightHand1;
                newCharacter.rightHand2 = test.characters[i].rightHand2;
                newCharacter.rightHand3 = test.characters[i].rightHand3;
                newCharacter.amour1 = test.characters[i].amour1;
                newCharacter.amour2 = test.characters[i].amour2;
                newCharacter.amour3 = test.characters[i].amour3;
                newCharacter.inventory1 = test.characters[i].inventory1;
                newCharacter.inventory2 = test.characters[i].inventory2;
                newCharacter.inventory3 = test.characters[i].inventory3;
                _this.chosenHeroes.push(newCharacter);
            }
        };
        this.showUpload = false;
        this.heroesHeadline = "Choice";
    };
    AppComponent.prototype.sortCommonTreasures = function () {
        if (!this.sortCommonTreasuresDefault) {
            this.heroes.sort();
            this.sortCommonTreasuresDefault = true;
        }
        else {
            this.heroes.reverse();
        }
    };
    AppComponent.prototype.sortClassSpecificTreasures = function () {
        if (!this.sortClassSpecificTreasuresDefault) {
            this.classSpecificTreasures.sort();
            this.sortClassSpecificTreasuresDefault = true;
        }
        else {
            this.classSpecificTreasures.reverse();
        }
    };
    AppComponent.prototype.sortLegendaryTreasures = function () {
        if (!this.sortLegendaryTreasuresDefault) {
            this.legendaryTreasures.sort();
            this.sortLegendaryTreasuresDefault = true;
        }
        else {
            this.legendaryTreasures.reverse();
        }
    };
    AppComponent.prototype.sortBossLoottreasures = function () {
        if (!this.sortBossLottTreasuresDefault) {
            this.bossLoot.sort();
            this.sortBossLottTreasuresDefault = true;
        }
        else {
            this.bossLoot.reverse();
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(148),
        styles: [__webpack_require__(145)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_common_treasure_service__["a" /* CommonTreasureService */], __WEBPACK_IMPORTED_MODULE_3__services_legendary_treasure_service__["a" /* LegendaryTreasureService */], __WEBPACK_IMPORTED_MODULE_4__services_class_specific_treasure_service__["a" /* ClassSpecificTreasureService */], __WEBPACK_IMPORTED_MODULE_5__services_boss_loot_service__["a" /* BossLootService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_common_treasure_service__["a" /* CommonTreasureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_common_treasure_service__["a" /* CommonTreasureService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_legendary_treasure_service__["a" /* LegendaryTreasureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_legendary_treasure_service__["a" /* LegendaryTreasureService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_class_specific_treasure_service__["a" /* ClassSpecificTreasureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_class_specific_treasure_service__["a" /* ClassSpecificTreasureService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_boss_loot_service__["a" /* BossLootService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_boss_loot_service__["a" /* BossLootService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero_detail_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inventory_inventory_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__character_editing_character_editing_component__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__hero_detail_component__["a" /* HeroDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_6__inventory_inventory_component__["a" /* InventoryComponent */],
            __WEBPACK_IMPORTED_MODULE_7__character_editing_character_editing_component__["a" /* CharacterEditingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterEditingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharacterEditingComponent = (function () {
    function CharacterEditingComponent() {
    }
    CharacterEditingComponent.prototype.heroSelect = function (hero) {
        this.editingHeroDeatils = hero;
    };
    CharacterEditingComponent.prototype.removeFromSelection = function (hero) {
        var index = this.chosenHeroes.indexOf(hero);
        if (index > -1) {
            this.chosenHeroes.splice(index, 1);
        }
        this.aviableHeroes.push(hero.character);
    };
    CharacterEditingComponent.prototype.ngOnInit = function () {
    };
    return CharacterEditingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], CharacterEditingComponent.prototype, "chosenHeroes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], CharacterEditingComponent.prototype, "selectedHero", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], CharacterEditingComponent.prototype, "aviableHeroes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], CharacterEditingComponent.prototype, "heroesHeadline", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], CharacterEditingComponent.prototype, "showUpload", void 0);
CharacterEditingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-character-editing',
        template: __webpack_require__(149),
        styles: [__webpack_require__(146)]
    }),
    __metadata("design:paramtypes", [])
], CharacterEditingComponent);

//# sourceMappingURL=character-editing.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroDetailComponent = (function () {
    function HeroDetailComponent() {
    }
    return HeroDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_character__["a" /* Character */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_character__["a" /* Character */]) === "function" && _a || Object)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'hero-detail',
        template: "\n    <div *ngIf=\"hero\">\n      <h2>{{hero.name}} details!</h2>\n      <div><label>id: </label>{{hero.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  "
    })
], HeroDetailComponent);

var _a;
//# sourceMappingURL=hero-detail.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InventoryComponent = (function () {
    function InventoryComponent() {
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    return InventoryComponent;
}());
InventoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-inventory',
        template: __webpack_require__(150),
        styles: [__webpack_require__(147)]
    }),
    __metadata("design:paramtypes", [])
], InventoryComponent);

//# sourceMappingURL=inventory.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameData; });
var GameData = (function () {
    function GameData() {
    }
    return GameData;
}());

//# sourceMappingURL=game-data.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BossLootService; });
/* unused harmony export LOOT */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BossLootService = (function () {
    function BossLootService() {
    }
    BossLootService.prototype.getBossLoot = function () {
        return LOOT;
    };
    return BossLootService;
}());
BossLootService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], BossLootService);

var LOOT = [
    'Winged Knight Armour',
    'Dancers Enchanted Swords',
    'Soothing Sunlight',
    'Dancer Armour',
    'Titanite',
    'Titanite Catch Pole',
    'Gargoyle Tail Axe',
    'Gargoyle\'s Halberd',
    'Gargoyle\'s Shield',
    'Irithyll Rapier',
    'Outrider Armour',
    'Dragonslayer Spear',
    'Smoug\'s Hammer',
    'Dragonslayer Armour',
    'Smoug\'s Armour',
    'Irithyll Straight Sword',
    'Winged Knight Twin Axes',
    'Winged Knight Halberd'
];
//# sourceMappingURL=boss-loot.service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassSpecificTreasureService; });
/* unused harmony export TREASURES */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClassSpecificTreasureService = (function () {
    function ClassSpecificTreasureService() {
    }
    ClassSpecificTreasureService.prototype.getHeroes = function () {
        return TREASURES;
    };
    return ClassSpecificTreasureService;
}());
ClassSpecificTreasureService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ClassSpecificTreasureService);

var TREASURES = [
    'Dragonslayer\'s Axe',
    'Balder Side Sword',
    'Great Machete',
    'Silver Knight Shield',
    'Spiked Mace',
    'Great Wooden Hammer',
    'Warpick',
    'Fallen Knight Armour',
    'Knight slayer\'s Ring',
    'Caestus',
    'Sun Princess Ring',
    'Falachion',
    'Lothric Knight Armour',
    'Elite Knight Armour',
    'Faarm Armour',
    'Blue Tearstone Ring',
    'Spider Shield',
    'Black Iron Greatshield',
    'Broadsword',
    'Twin Dragon Greatshield',
    'Replenishment',
    'Tiny Being\'s Ring',
    'Cathedral Knight Armour',
    'Golden Wing Crest Shield',
    'Partizan',
    'Saint Bident',
    'Bountful Sunlight',
    'Grass Crest Shield',
    'Bountiful Light',
    'Lothric\'s Holy Sword',
    'Hornet Ring',
    'Spotted Whip',
    'Composite Bow',
    'Umbral Dagger',
    'Alva Armour',
    'Lucerne',
    'Carthus Curved Sword',
    'Rotten Ghru Dagger',
    'ElkHorn Rounded Shield',
    'Shadow Armour'
];
//# sourceMappingURL=class-specific-treasure.service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonTreasureService; });
/* unused harmony export HEROES */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CommonTreasureService = (function () {
    function CommonTreasureService() {
    }
    CommonTreasureService.prototype.getHeroes = function () {
        return HEROES;
    };
    return CommonTreasureService;
}());
CommonTreasureService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], CommonTreasureService);

var HEROES = [
    'Morning Star',
    'Sunset Armour',
    'Rapier',
    'Titanite Shard (1)',
    'Titanite Shard (2)',
    'Titanite Shard (3)',
    'Titanite Shard (4)',
    'Blood Gem',
    'Simple Gem',
    'Heavy Gem',
    'Lighning Gem',
    'Deacon Robes',
    'Great Magic Weapon',
    'Zweihander',
    'Heard Leather Armour',
    'Soulstream',
    'Poison Mist',
    'Master\'s Attirf',
    'Drang Armour',
    'East-West Shield',
    'Pierce Shield',
    'Exile Armour',
    'Kukris',
    'Worker Armour',
    'Heal Aid',
    'Ember (1)',
    'Ember (2)',
    'Ember (3)',
    'Ember (4)',
    'Reinfoced Club',
    'Murakumo',
    'Black Armour',
    'Heal',
    'Sunless Armour',
    'Effigy Shield',
    'Dragon Crest Shield',
    'Blessed Gem',
    'Sharp Gem',
    'Eastern Iron Shield',
    'Crystal Gem',
    'Court Corcerer Robes',
    'Sorcerer\'s Staff',
    'Fireball',
    'Shortsword',
    'Halberd',
    'Firelink Armour',
    'Scimitar',
    'Silver Eagle Kite Shield',
    'Brigand Axe',
    'Firebombs',
    'Claymore',
    'Poison Gem',
    'Greataxe',
    'Winged Spear',
    'Thrall Axe',
    'Great Mace',
    'Force',
    'Silver Knight Straight Sword',
    'Chloranthy Ring',
    'Soul Arrow'
];
//# sourceMappingURL=common-treasure.service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegendaryTreasureService; });
/* unused harmony export HEROES */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LegendaryTreasureService = (function () {
    function LegendaryTreasureService() {
    }
    LegendaryTreasureService.prototype.getHeroes = function () {
        return HEROES;
    };
    return LegendaryTreasureService;
}());
LegendaryTreasureService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], LegendaryTreasureService);

var HEROES = [
    'Dragon Tooth',
    'Avelyn',
    'Gotthard Twinswords',
    'Fume Ultra Greatsword',
    'Santier\'s Spear',
    'Sunlight Straight Sword',
    'Washing Pole',
    'Moonlight Greatsword',
    'Dark Sword',
    'Drake Sword'
];
//# sourceMappingURL=legendary-treasure.service.js.map

/***/ }),

/***/ 92:
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

/***/ })

},[180]);
//# sourceMappingURL=main.bundle.js.map