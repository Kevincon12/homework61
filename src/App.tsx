import {useEffect, useState} from 'react'
import './App.css'

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
        <div className='col-4'>
            <h1 className='card-title'>Список всех стран</h1>

            <div className='list-group overflow-auto' style={{maxHeight: '500px'}}>
                {countries.map((country) => (
                    <button key={country.alpha3Code} className='list-group-item list-group-item-action'>
                        {country.name}
                    </button>
                ))}
            </div>
        </div>
    </>
  )
};

export default App
