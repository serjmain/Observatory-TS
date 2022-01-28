"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var typePlanet_1 = require("./typePlanet");
var typeAsteroids_1 = require("./typeAsteroids");
var typeComets_1 = require("./typeComets");
var SolarSystem = /** @class */ (function () {
    function SolarSystem() {
    }
    SolarSystem.prototype.showVision = function () {
        return __spreadArray(__spreadArray(__spreadArray([], SolarSystem.planets, true), SolarSystem.asteroids, true), SolarSystem.comets, true).join(", ");
    };
    SolarSystem.planets = [
        typePlanet_1.EPlanets.Mercury,
        typePlanet_1.EPlanets.Venus,
        typePlanet_1.EPlanets.Earth,
        typePlanet_1.EPlanets.Mars,
        typePlanet_1.EPlanets.Jupiter,
        typePlanet_1.EPlanets.Saturn,
        typePlanet_1.EPlanets.Uranus,
        typePlanet_1.EPlanets.Neptune,
    ];
    SolarSystem.asteroids = [
        typeAsteroids_1.EAsteroids.Eros,
        typeAsteroids_1.EAsteroids.Geographos,
        typeAsteroids_1.EAsteroids.Hathor,
        typeAsteroids_1.EAsteroids.Hermes,
    ];
    SolarSystem.comets = [
        typeComets_1.EComets.ArendRoland,
        typeComets_1.EComets.Biela,
        typeComets_1.EComets.Chiron,
        typeComets_1.EComets.Encke,
    ];
    return SolarSystem;
}());
exports["default"] = SolarSystem;
