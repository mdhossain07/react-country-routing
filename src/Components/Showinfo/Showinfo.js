import React from 'react';

const Showinfo = (props) => {
    const {official, region, capital} = props.info;
    console.log(props);

    return (
        <div>
            <h3> Official Name : {official} </h3>
            <p> Region : {region}</p>
            <p> Capital : {capital} </p>
        </div>
    );
};

export default Showinfo;