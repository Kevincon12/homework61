import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";

interface Props {
    id: string | null;
}

const CountryInfo: React.FC<Props> = ({id}) => {
    const [country, setCountry] = useState<CountryData | null>(null);

    const fetchCountry = useCallback(async () => {
        if (!id) return;

        try {
            const response = await axios<CountryData>(`https://restcountries.com/v2/alpha/${id}`);
            const countryData = response.data;
            setCountry(countryData);
            const newCountryData: CountryData = {
                name: countryData.name,
                capital: countryData.capital,
                population: countryData.population,
                borders: countryData.borders,
            }

            console.log(newCountryData);
        } catch (e) {
            console.error(e);
        }



    }, [id]);

    useEffect(() => {
        void fetchCountry();
    }, [fetchCountry]);


    return (
        <div>
            инфа о стране
        </div>
    );
};

export default CountryInfo;