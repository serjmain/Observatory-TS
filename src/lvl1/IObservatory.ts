import ITelescope from "../lvl2/ITelescope";

export default interface IObservatory {
    readonly name: string;
    readonly excursionPrice: number;
    readonly telescops: Array<ITelescope>;
}
