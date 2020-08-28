import React from 'react';
import config from '../config.json';
import axios from 'axios';
import {Strain} from './Strain';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

class StrainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strainInput: '',
            strainResult: [],
            strainFound: false,
            searched: false,
        };
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }

    mySubmitHandler = (event) => {
        event.preventDefault(); //Page won't refresh
        try {
            axios.get(`http://strainapi.evanbusse.com/${config.api_key}/strains/search/name/${this.state.strainInput}`)
                .then(res => {
                    this.setState({searched : true});
                    // If no strains found => tell user that no strains were found
                    if(res.data.length > 0){
                        this.setState({strainFound : true});
                        this.setState({ strainResult: [] });
                        this.setState({
                            strainResult: [...this.state.strainResult, ...res.data]
                        });
                    } else {
                        this.setState({strainFound : false});
                    }
                    console.log(this.state.strainFound);
                    console.log(this.state.strainResult);
                })

        } catch (error) {
            alert(error);
            console.log(error);
        }
    }

    myChangeHandler = (event) => {
        this.setState({ strainInput: event.target.value });
    }

    render() {
        return (
            <div className="StrainForm">
                <Jumbotron>
                    <h1>Weed App</h1>
                    <Form onSubmit={this.mySubmitHandler}>
                        <Form.Row>
                            <Col xs={11}>
                                <Form.Control onChange={this.myChangeHandler} type="text" placeholder="Enter name of Strain" />
                            </Col>
                            <Col>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                    <br></br>
                    <Strain isSearched={this.state.searched} isFound={this.state.strainFound} strainArray={this.state.strainResult} />
                </Jumbotron>
            </div>
        );
    }
}

export default StrainForm;
// ReactDom.render(<StrainForm/>, document.getElementById('root'));