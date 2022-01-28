"use strict";
exports.__esModule = true;
var Telescope = /** @class */ (function () {
    function Telescope(name, specifications, solarSystem) {
        this._name = name;
        this._specifications = specifications;
        this._solarSystem = solarSystem;
    }
    Object.defineProperty(Telescope.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (name.length > 1 && name.length < 20) {
                this._name = name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telescope.prototype, "specifications", {
        get: function () {
            return this._specifications;
        },
        set: function (specifications) {
            if (specifications.length > 1) {
                this._specifications = specifications;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telescope.prototype, "vision", {
        get: function () {
            return this._solarSystem.showVision();
        },
        enumerable: false,
        configurable: true
    });
    return Telescope;
}());
exports["default"] = Telescope;
