import React from 'react';

const Strain = ({name, race, desc}) => {
    console.log(`${name} ${race} ${desc}`)
    if(name == null || race == null || desc == null) {
        return(
        <div>
            <p>
                Go search a strain brudda!
            </p>
        </div>
        );
    }
    return(
        <div>
            <h1>Weed Facts</h1>
            <h2>Name: {name}</h2>
            <h2>Race: {race}</h2>
            <p>Description: {desc}</p>
        </div>
    );
};

export default Strain;