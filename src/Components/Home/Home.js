import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])

    const countryName = countries.slice(0,10);
    return (
        <div>
            {
                countryName.map(country => <Country country = {country}></Country>)
            }
        </div>
    );
};

export default Home;