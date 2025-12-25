import React from "react";

interface Props {
    countries: Country[];
    onBtnClick: (code: string) => void;
}

const Sidebar: React.FC<Props> = ({countries, onBtnClick}) => {
    return (
        <div>
            <h1 className='card-title mb-2'>Список всех стран</h1>

            <div className='list-group overflow-auto' style={{maxHeight: '500px'}}>
                {countries.map((country) => (
                    <button
                        key={country.alpha3Code}
                        className='list-group-item list-group-item-action'
                        onClick={() => onBtnClick(country.alpha3Code)}
                    >
                        {country.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;