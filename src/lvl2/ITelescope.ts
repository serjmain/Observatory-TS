export default interface ITelescope {
    readonly name: string;
    readonly specifications: string;
    get vision(): string;
}
