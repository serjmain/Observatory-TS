"use strict";
exports.__esModule = true;
var Observatory = /** @class */ (function () {
    function Observatory(name, excursionPrice, premiumPrice, telescops) {
        this._name = name;
        this._excursionPrice = excursionPrice;
        this._premiumPrice = premiumPrice;
        this._telescops = telescops;
    }
    Object.defineProperty(Observatory.prototype, "name", {
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
    Object.defineProperty(Observatory.prototype, "excursionPrice", {
        get: function () {
            return this._excursionPrice;
        },
        set: function (excursionPrice) {
            this._excursionPrice = excursionPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Observatory.prototype, "premiumPrice", {
        get: function () {
            return this._premiumPrice;
        },
        set: function (premiumPrice) {
            this._premiumPrice = premiumPrice;
        },
        enumerable: false,
        configurable: true
    });
    Observatory.prototype.addTelescope = function (telescopeName) {
        this._telescops.push(telescopeName);
    };
    Object.defineProperty(Observatory.prototype, "telescops", {
        get: function () {
            return this._telescops;
        },
        enumerable: false,
        configurable: true
    });
    Observatory.prototype.deleteTelescopeByName = function (telescopeName) {
        var telescopeIndex = this._telescops.findIndex(function (telescope) { return telescope.name === telescopeName; });
        if (telescopeIndex === -1) {
            return;
        }
        else {
            this._telescops.splice(telescopeIndex, 1);
        }
    };
    return Observatory;
}());
exports["default"] = Observatory;
