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
exports.__esModule = true;
var user_1 = require("./user");
var PremiumUser = /** @class */ (function (_super) {
    __extends(PremiumUser, _super);
    function PremiumUser(name, email, password, cardBalance) {
        var _this = _super.call(this, name, email, password, cardBalance) || this;
        _this._cardBalance = cardBalance;
        _this._premiumAccess = false;
        _this._pickedTelescope = null;
        return _this;
    }
    PremiumUser.prototype.isAvailablePremiumAccess = function () {
        return this._premiumAccess;
    };
    PremiumUser.prototype.buyPremium = function (observatory) {
        if (this._cardBalance < observatory.premiumPrice) {
            throw Error("not enough money");
        }
        this._cardBalance = this._cardBalance - observatory.premiumPrice;
        this._premiumAccess = true;
    };
    PremiumUser.prototype.pickTelescope = function (telescopeName, observatoryName) {
        if (!this._premiumAccess) {
            throw Error("u can pick telescope only if u have premium access");
        }
        var observatory = this.observatoryList.find(function (observatory) { return observatory.name === observatoryName; });
        var telescope = observatory === null || observatory === void 0 ? void 0 : observatory.telescops.find(function (telescope) { return telescope.name === telescopeName; });
        if (telescope) {
            this._pickedTelescope = telescope;
        }
    };
    PremiumUser.prototype.watchTelescope = function () {
        return this._pickedTelescope ? this._pickedTelescope.vision : null;
    };
    return PremiumUser;
}(user_1["default"]));
exports["default"] = PremiumUser;
