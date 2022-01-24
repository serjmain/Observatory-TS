import {EPlanets} from "./typePlanet";
import {EAsteroids} from "./typeAsteroids";
import {EComets} from "./typeComets";
import ISolarSystem from "../lvl3/ISolarSystem";

export default class SolarSystem implements ISolarSystem {
    static planets: EPlanets[] = [
        EPlanets.Mercury,
        EPlanets.Venus,
        EPlanets.Earth,
        EPlanets.Mars,
        EPlanets.Jupiter,
        EPlanets.Saturn,
        EPlanets.Uranus,
        EPlanets.Neptune,
    ];
    static asteroids: EAsteroids[] = [
        EAsteroids.Eros,
        EAsteroids.Geographos,
        EAsteroids.Hathor,
        EAsteroids.Hermes,
    ];
    static comets: EComets[] = [
        EComets.ArendRoland,
        EComets.Biela,
        EComets.Chiron,
        EComets.Encke,
    ];

    public showVision(): string {
        return [...SolarSystem.planets, ...SolarSystem.asteroids, ...SolarSystem.comets].join(", ");
    }
}
