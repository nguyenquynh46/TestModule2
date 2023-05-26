"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lover = void 0;
var Lover = /** @class */ (function () {
    function Lover(id, name, zodiac, address, dOB, hobbies) {
        this._id = id;
        this._name = name;
        this._zodiac = zodiac;
        this._address = address;
        this._dOB = dOB;
        this._hobbies = hobbies;
    }
    Object.defineProperty(Lover.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lover.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lover.prototype, "zodiac", {
        get: function () {
            return this._zodiac;
        },
        set: function (value) {
            this._zodiac = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lover.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lover.prototype, "dOB", {
        get: function () {
            return this._dOB;
        },
        set: function (value) {
            this._dOB = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lover.prototype, "hobbies", {
        get: function () {
            return this._hobbies;
        },
        set: function (value) {
            this._hobbies = value;
        },
        enumerable: false,
        configurable: true
    });
    return Lover;
}());
exports.Lover = Lover;
