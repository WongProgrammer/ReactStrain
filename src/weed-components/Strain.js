import React from 'react';

const Strain = ({ name, race, desc }) => {
    console.log(`${name} ${race} ${desc}`);
    let tempDesc = `A description is unavailable for the strain "${name}".`;
    if(desc) {
        tempDesc = desc;
    }

    if(name == null && race == null && desc == null) {
        return(
            <div>
                <p>
                    Search a Strain!
                </p>
            </div>
        );
    } else {
        return (
            <div>
                <p>
                    Search another Strain!
                </p>
                <h1>Weed Facts</h1>
                <h2>Name: {name}</h2>
                <h2>Race: {race}</h2>
                <p>Description: {tempDesc}</p>
            </div>
        );
    }
   
};

export default Strain;