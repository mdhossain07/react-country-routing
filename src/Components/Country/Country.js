import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {region, capital} = props.country;
    const {common} = props.country.name;
    const history = useHistory();

    const handleButton = (cName) => {
        history.push(`/name/${cName}`); 
    }



    const countryStyle = {
        border : '2px solid red',
        borderRadius : '50px',
        margin : '20px',
        padding : '20px'
    }
    return (
        <div style={countryStyle}>
            <h2> Name : {common}</h2>
            <p> Region : {region}</p>
            <p> Capital : {capital} </p>
            <Link to={`/name/${common}`}>See Details</Link>
            <br />
            <button onClick={() => handleButton(common)}> See Details </button>
        </div>
    );
};

export default Country;