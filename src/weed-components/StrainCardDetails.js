import React from 'react';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import config from '../config.json';
import axios from 'axios';
import {capitalizeWord} from './Strain';

class StrainCardDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            open: false,
            arrow: 'v',
            strainEffects: {},
            strainFlavors: [],
        }
    }

    myClickHandler = (event) =>{
        event.preventDefault();

        //Strain Effects
        try {
            axios.get(`http://strainapi.evanbusse.com/${config.api_key}/strains/data/effects/${this.props.strain.id}`)
            .then(res => {
                this.setState({strainEffects : {...this.state.strainEffects, ...res.data}});
                // console.log(this.state.strainEffects);
            });
        } catch(error) {
            console.log(error);
        }
        
        //Strain Flavor
        try {
            axios.get(`http://strainapi.evanbusse.com/${config.api_key}/strains/data/flavors/${this.props.strain.id}`)
            .then(res =>{
                this.setState({strainFlavors : [...this.state.strainFlavors, ...res.data]});
                //Flavor is an object with keys of numbers... maybe change it to an array
                // console.log(this.state.strainFlavors);
            });
        } catch(error){
            console.log(error);
        }

        //The Arrow
        this.setState({open: !this.state.open});
        if(this.state.arrow === 'v') {
            this.setState({arrow : '^'});
        } else {
            this.setState({arrow : 'v'});
        }
    }

    //

    render() {
        return(
            <div>
                <Collapse in={this.state.open}>
                    <ListGroup>
                        {Object.entries(this.state.strainEffects).map(effect => (
                            <ListGroup.Item>
                                {`${capitalizeWord(effect[0])} effects : ${effect[1]}`}
                            </ListGroup.Item>
                        ))}
                        <ListGroup.Item>
                            Flavors: {`${this.state.strainFlavors}`}
                        </ListGroup.Item>
                    </ListGroup>
                </Collapse>
                <br></br>
                <Button onClick={this.myClickHandler} variant="dark">{this.state.arrow}</Button>
            </div>
        );
    }
}
export default StrainCardDetails;