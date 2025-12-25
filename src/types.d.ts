interface Country {
    name: string;
    alpha3Code: string;
}

interface CountryData {
    name: string;
    capital: string;
    population: number;
    borders?: string[];
}