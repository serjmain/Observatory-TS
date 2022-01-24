import ITelescope from "../lvl2/ITelescope";

export default interface IObservatoryForPrem {
    readonly _premiumPrice: number;
    readonly ITelescope: ITelescope[];
    get premiumPrice(): number;
    get telescops(): ITelescope[];
}