import {useEffect, useState} from 'react'
import './App.css'
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import axios from "axios";
import CountryInfo from "./components/CountryInfo/CountryInfo.tsx";

const App = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const COUNTRIES_URL = 'https://restcountries.com/v2/all?fields=alpha3Code,name';

    const [selectedCountryCode, setSelectedCountryCode ] = useState<string | null>(null);

    useEffect(() => {
        const loadCountries = async () => {
            try {
                const response = await axios(COUNTRIES_URL);
                setCountries(response.data);

            } catch (error) {
                console.error('Не удалось загрузить страны:', error)
                alert('Произошла ошибка при загрузке стран. Попробуйте позже.')
            }
        }
        loadCountries();
    }, []);

    const selectCountry = (code: string) => {
        setSelectedCountryCode(code);
    };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-3'>
                <Sidebar countries={countries} onBtnClick={selectCountry}/>
            </div>
            <div className='col-9'>
                <CountryInfo id={selectedCountryCode}/>
            </div>
        </div>

    </div>
  )
};

export default App