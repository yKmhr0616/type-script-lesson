"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = exports.getFormattedValue = exports.tax = exports.test2 = exports.test1 = void 0;
function test1() {
    return 'test1';
}
exports.test1 = test1;
function test2() {
    return { value: 'test2' };
}
exports.test2 = test2;
function tax(amount) {
    return Math.pow(amount, 2);
}
exports.tax = tax;
function getFormattedValue(value) {
    if (value === null)
        return "-- pt";
    return value.toFixed() + " pt";
}
exports.getFormattedValue = getFormattedValue;
function greet(name) {
    return "" + (name === null || name === void 0 ? void 0 : name.toUpperCase());
}
exports.greet = greet;
var Creature = /** @class */ (function () {
    function Creature() {
    }
    Creature.prototype.breathe = function () { };
    return Creature;
}());
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Animal.prototype.shakeTail = function () { };
    return Animal;
}(Creature));
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Human.prototype.greet = function () { };
    return Human;
}(Creature));
function action(creature) {
    var c0 = creature;
    c0.breathe();
    if (creature instanceof Animal) {
        var c1 = creature;
        return c1.shakeTail();
    }
    var c2 = creature;
    if (creature instanceof Human) {
        var c3 = creature;
        return c3.greet();
    }
    var c4 = creature;
    return c4.breathe();
}
