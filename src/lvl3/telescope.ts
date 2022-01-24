import ISolarSystem from "../lvl4/solarSystem";
import ITelescope from "../lvl2/ITelescope";
import ITelescopeForPrem from "../lvl1/ITelescopeForPrem";

export default class Telescope implements ITelescope, ITelescopeForPrem {
    protected _name: string;
    protected _specifications: string;
    protected _solarSystem: ISolarSystem;

    public constructor(
        name: string,
        specifications: string,
        solarSystem: ISolarSystem
    ) {
        this._name = name;
        this._specifications = specifications;
        this._solarSystem = solarSystem;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        if (name.length > 1 && name.length < 20) {
            this._name = name;
        }
    }

    public get specifications(): string {
        return this._specifications;
    }

    public set specifications(specifications: string) {
        if (specifications.length > 1) {
            this._specifications = specifications;
        }
    }

    public get vision(): string {
        return this._solarSystem.showVision();
    }
}
