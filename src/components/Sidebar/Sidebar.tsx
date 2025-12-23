import React from 'react';

interface Props {
    countries: Country[];

}

const Sidebar: React.FC<Props> = ({countries}) => {
    return (
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
    );
};

export default Sidebar;