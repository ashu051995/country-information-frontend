

interface Languge {
    eng:string
}

interface CurrencyObject {
    name:string;
    symbol:string
}

interface Currency {
    XCD:CurrencyObject
}

 export interface CountryDetailInterface  {
    name:Record<string,any>;
    capital:any[];
    flags:any;
    languages:Languge;
    region:string;
    population:number;
    cca2:string;
    continents:any[];
    currencies:Currency,
    timezones:string[],
    code:string;
}



