import {useEffect, useState} from 'react'
import './App.css'
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import axios from "axios";

const App = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const COUNTRIES_URL = 'https://restcountries.com/v2/all?fields=alpha3Code,name';

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

    console.log(countries);
  return (
    <>
        <Sidebar countries={countries}/>
    </>
  )
};

export default App