import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, region, population,flag } = props.country;
    const handleAddToCountry = props.handleAddToCountry;
    return (
        <div className="country-display">
            <div>
            <img src={flag} alt=""/>
            </div>
            <div>
                <h4>This is {name}</h4>
                <p>population: {population}</p>
                <p><small>Region:{region}</small></p>
                <button onClick={() => handleAddToCountry(props)}>Add to country</button>
            </div>
        </div>
    );
};

export default Country;