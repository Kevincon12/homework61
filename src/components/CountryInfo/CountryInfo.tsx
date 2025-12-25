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

            const newCountryData: CountryData = {
                countryName: countryData.name,
                capital: countryData.capital,
                population: countryData.population,
                borders: countryData.borders,
            }
            setCountry(newCountryData);

        } catch (e) {
            console.error(e);
        }

    }, [id]);

    useEffect(() => {
        void fetchCountry();
    }, [fetchCountry]);


    return (
        <div>
            {country && (
                <>
                    <h1 className='card-title mp-1'>Country: {country.countryName}</h1>
                    <p className='card-body'>Capital: {country.capital}</p>
                    <p className='card-body'>Population: {country.population}</p>
                    <span className='card-text'>Borders: {country.borders}</span>
                </>
            )}
        </div>
    );
};


export default CountryInfo