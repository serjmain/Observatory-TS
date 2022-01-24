import ITelescope from "./ITelescope";
import IObservatory from "../lvl1/IObservatory";

export default class Observatory implements IObservatory {
    protected _name: string;
    protected _excursionPrice: number;
    protected _premiumPrice: number;
    protected _telescops: Array<ITelescope>;

    public constructor(
        name: string,
        excursionPrice: number,
        premiumPrice: number,
        telescops: Array<ITelescope>
    ) {
        this._name = name;
        this._excursionPrice = excursionPrice;
        this._premiumPrice = premiumPrice;
        this._telescops = telescops;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        if (name.length > 1 && name.length < 20) {
            this._name = name;
        }
    }

    public get excursionPrice(): number {
        return this._excursionPrice;
    }

    public set excursionPrice(excursionPrice: number) {
        this._excursionPrice = excursionPrice;

    }

    public get premiumPrice(): number {
        return this._premiumPrice;
    }

    public set premiumPrice(premiumPrice: number) {
        this._premiumPrice = premiumPrice;

    }

    public addTelescope(telescopeName: ITelescope): void {
        this._telescops.push(telescopeName);
    }

    public get telescops(): ITelescope[] {
        return this._telescops;
    }

    public deleteTelescopeByName(telescopeName: string): void {
        const telescopeIndex: number = this._telescops.findIndex((telescope) => telescope.name === telescopeName);
        if (telescopeIndex === -1) {
            return;
        } else {
            this._telescops.splice(telescopeIndex, 1);
        }

    }
}
