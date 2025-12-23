import {useEffect, useState} from 'react'
import './App.css'
import Sidebar from "./components/Sidebar/Sidebar.tsx";

const App = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const COUNTRIES_URL = 'https://restcountries.com/v2/all?fields=alpha3Code,name';

    useEffect(() => {
        const loadCountries = async () => {
            const req = await fetch(COUNTRIES_URL);
            const reqInJson = await req.json();
            setCountries(reqInJson);
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