export class Lover{
    private _id: string
    private _name: string;
    private _zodiac: string;
    private _address: string;
    private _dOB: string;
    private _hobbies: string;


    constructor(id: string, name: string, zodiac: string, address: string, dOB: string, hobbies: string) {
        this._id = id;
        this._name = name;
        this._zodiac = zodiac;
        this._address = address;
        this._dOB = dOB;
        this._hobbies = hobbies;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get zodiac(): string {
        return this._zodiac;
    }

    set zodiac(value: string) {
        this._zodiac = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get dOB(): string {
        return this._dOB;
    }

    set dOB(value: string) {
        this._dOB = value;
    }

    get hobbies(): string {
        return this._hobbies;
    }

    set hobbies(value: string) {
        this._hobbies = value;
    }
}
