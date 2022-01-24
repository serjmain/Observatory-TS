"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(name, email, password, cardBalance) {
        this._name = name;
        this._email = email;
        this._password = password;
        this._cardBalance = cardBalance;
        this._observatoryList = new Array();
        this._boughtExcursions = new Array();
    }
    Object.defineProperty(User.prototype, "name", {
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
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            var validation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (validation.test(email)) {
                this._email = email;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (password) {
            if (password.length > 1 && password.length < 20) {
                this._password = password;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "cardBalance", {
        get: function () {
            return this._cardBalance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "observatoryList", {
        get: function () {
            return this._observatoryList.length > 0 ? this._observatoryList : [];
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.addObservatory = function (observatory) {
        var isObservatory = this._observatoryList.filter(function (observatoryListItem) {
            return observatoryListItem.name === observatory.name;
        });
        if (!isObservatory.length) {
            this._observatoryList.push(observatory);
        }
    };
    User.prototype.buyExcursion = function (observatoryName) {
        var _this = this;
        if (!this._observatoryList.length) {
            return;
        }
        var observatory = this._observatoryList.find(function (_a) {
            var name = _a.name, excursionPrice = _a.excursionPrice;
            return name === observatoryName && _this._cardBalance >= excursionPrice;
        });
        if (observatory) {
            this._cardBalance = this._cardBalance - observatory.excursionPrice;
            this._boughtExcursions.push(observatoryName);
        }
    };
    User.prototype.buyExcursionAsync = function (observatoryName, callback) {
        var _this = this;
        setTimeout(function () {
            if (!_this._observatoryList.length) {
                return callback(new Error("some error"));
            }
            var observatory = _this._observatoryList.find(function (_a) {
                var name = _a.name, excursionPrice = _a.excursionPrice;
                return name === observatoryName && _this._cardBalance >= excursionPrice;
            });
            if (observatory) {
                _this._cardBalance = _this._cardBalance - observatory.excursionPrice;
                _this._boughtExcursions.push(observatoryName);
                callback(null, { boughtExcursions: _this._boughtExcursions, cardBalance: _this._cardBalance });
            }
        }, 2000);
    };
    Object.defineProperty(User.prototype, "boughtExcursions", {
        get: function () {
            return this._boughtExcursions.length > 0 ? this._boughtExcursions : null;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports["default"] = User;
;
