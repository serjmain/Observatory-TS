import IObservatory from "./IObservatory";

interface IBoughtExcursionsCardBalance {
    boughtExcursions: string[];
    cardBalance: number;
}

export default class User {
    protected _name: string;
    protected _email: string;
    protected _password: string;
    protected _cardBalance: number;
    protected _observatoryList: Array<IObservatory>;
    protected _boughtExcursions: Array<string>;

    public constructor(
        name: string,
        email: string,
        password: string,
        cardBalance: number
    ) {
        this._name = name;
        this._email = email;
        this._password = password;
        this._cardBalance = cardBalance;
        this._observatoryList = new Array<IObservatory>();
        this._boughtExcursions = new Array<string>();
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        if (name.length > 1 && name.length < 20) {
            this._name = name;
        }
    }

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        const validation: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (validation.test(email)) {
            this._email = email;
        }
    }

    public get password(): string {
        return this._password;
    }

    public set password(password: string) {
        if (password.length > 1 && password.length < 20) {
            this._password = password;
        }
    }

    public get cardBalance(): number {
        return this._cardBalance;
    }

    public get observatoryList(): IObservatory[] {
        return this._observatoryList.length > 0 ? this._observatoryList : [];
    }

    public addObservatory(observatory: IObservatory): void {
        const isObservatory: IObservatory[] = this._observatoryList.filter(observatoryListItem => {
            return observatoryListItem.name === observatory.name;
        });

        if (!isObservatory.length) {
            this._observatoryList.push(observatory);
        }
    }

    public buyExcursion(observatoryName: string): void {

        if (!this._observatoryList.length) {
            return;
        }

        const observatory: IObservatory | undefined = this._observatoryList.find(({ name, excursionPrice }) => name === observatoryName && this._cardBalance >= excursionPrice);

        if (observatory) {
            this._cardBalance = this._cardBalance - observatory.excursionPrice;
            this._boughtExcursions.push(observatoryName);
        }
    }

    public buyExcursionAsync(observatoryName: string, callback: (error: Error | null, data?: IBoughtExcursionsCardBalance) => void) {
        setTimeout(() => {
            if (!this._observatoryList.length) {
                return callback(new Error("some error"));
            }

            const observatory: IObservatory | undefined = this._observatoryList.find(({ name, excursionPrice }) => name === observatoryName && this._cardBalance >= excursionPrice)

            if (observatory) {
                this._cardBalance = this._cardBalance - observatory.excursionPrice;
                this._boughtExcursions.push(observatoryName);
                callback(null, { boughtExcursions: this._boughtExcursions, cardBalance: this._cardBalance });
            }
        }, 2000);
    }

    public buyExcursionAsyncPromise(observatoryName: string): Promise<IBoughtExcursionsCardBalance> {
        return new Promise<IBoughtExcursionsCardBalance>((resolve, reject) => {
            setTimeout(() => {
                if (!this.observatoryList.length) {
                    reject(new Error("no available excursion"));
                }
                const observatory: IObservatory | undefined = this.observatoryList.find(({ name, excursionPrice }) => name === observatoryName && this.cardBalance >= excursionPrice);

                if (observatory) {
                    this._cardBalance = this.cardBalance - observatory.excursionPrice;
                    this._boughtExcursions.push(observatoryName);
                    resolve({ boughtExcursions: this._boughtExcursions, cardBalance: this._cardBalance });
                }
                reject(new Error("not enough money or can't find observatory"));

            }, 2000);
        })
    }

    public get boughtExcursions(): Array<string> | null {
        return this._boughtExcursions.length > 0 ? this._boughtExcursions : null;
    }
};


