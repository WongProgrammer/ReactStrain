import React from 'react';
import Card from 'react-bootstrap/Card';
import StrainCardDetails from './StrainCardDetails';

function capitalizeWord(word) {
    let result = '';
    result += word.charAt(0).toUpperCase() + word.substring(1);
    return result;
}

const Strain = ({ strainArray, isSearched, isFound }) => {
    // console.log(strainArray);
    if (isSearched === true && isFound === true) {
        return (
            <div>
                <h3>{strainArray.length} result(s) found</h3>
                {strainArray.map(strain => (
                    <Card key={strain.id}>
                        <Card.Body>
                            <Card.Title>{strain.name}</Card.Title>
                            <Card.Subtitle>Race: {capitalizeWord(strain.race)}</Card.Subtitle>
                            <Card.Text>{strain.desc}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <StrainCardDetails strain={strain} />
                        </Card.Footer>
                    </Card>
                ))}
            </div>
        );
    } else if (isSearched === true && isFound === false) {
        return (
            <Card text={'danger'}>
                <Card.Body>
                    <Card.Text>No results found. Please try a different input.</Card.Text>
                </Card.Body>
            </Card>
        );
    } else {
        return (null);
    }
}

export { Strain, capitalizeWord };