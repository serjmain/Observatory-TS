import ITelescopeForPrem from "./ITelescopeForPrem";
import User from "./user";
import IObservatoryForPrem from "./IObservatoryForPrem";
import IObservatory from "./IObservatory";
import ITelescope from "../lvl2/ITelescope";

export default class PremiumUser extends User {
    protected _cardBalance: number;
    protected _premiumAccess: boolean;
    protected _pickedTelescope: ITelescopeForPrem | null;

    public constructor(
        name: string,
        email: string,
        password: string,
        cardBalance: number
    ) {
        super(name, email, password, cardBalance);
        this._cardBalance = cardBalance;
        this._premiumAccess = false;
        this._pickedTelescope = null;
    }

    public isAvailablePremiumAccess(): boolean {
        return this._premiumAccess;
    }

    public buyPremium(observatory: IObservatoryForPrem): void {
        if (this._cardBalance < observatory.premiumPrice) {
            throw Error("not enough money");
        }

        this._cardBalance = this._cardBalance - observatory.premiumPrice;
        this._premiumAccess = true;
    }

    public pickTelescope(telescopeName: string, observatoryName: string) {
        if (!this._premiumAccess) {
            throw Error("u can pick telescope only if u have premium access");
        }

        const observatory: IObservatory | undefined = this.observatoryList.find(observatory => observatory.name === observatoryName);
        const telescope: ITelescope | undefined = observatory?.telescops.find(telescope => telescope.name === telescopeName);

        if (telescope) {
            this._pickedTelescope = telescope;
        }
    }

    public watchTelescope(): string | null {
        return this._pickedTelescope ? this._pickedTelescope.vision : null;
    }
}
