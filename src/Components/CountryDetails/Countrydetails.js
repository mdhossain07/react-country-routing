import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Showinfo from '../Showinfo/Showinfo';

const Countrydetails = () => {
    
    const {common} = useParams();
    const url = `https://restcountries.com/v3.1/name/${common}`;
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])

    return (
        <div style={{margin : '30px', padding : '30px'}}>
            <h2> Country Name : {common}</h2>
            {/* <h3> Name : {countries.region}Malta</h3> */}
            {/* {
                countries.map(country => <Showinfo info = {countries}> </Showinfo>)
            } */}

            {
                countries.map(country => 
                <h3> Region : {country.region} <p> Official Name : {country.name.official}</p> <p> Capital :  {country.capital} </p></h3>)
            }
        </div>
    );
};

export default Countrydetails;