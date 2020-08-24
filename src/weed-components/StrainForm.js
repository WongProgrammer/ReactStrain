import React from 'react';
import config from '../config.json';
import axios from 'axios';
import Strain from './Strain';
class StrainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strainInput: '',
            strainDetails: {},
            searched : false
        };
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }

    mySubmitHandler = (event) => {
        event.preventDefault(); //Page won't refresh
        try {
            axios.get(`http://strainapi.evanbusse.com/${config.api_key}/strains/search/name/${this.state.strainInput}`)
                .then(res => {
                    console.log(res.data[0]);
                    console.log(res.data)
                    this.setState({ strainDetails: res.data[0] });
                    this.setState({searched : true});
                })

        } catch (error) {
            alert(error);
            console.log(error);
        }
    }

    myChangeHandler = (event) => {
        console.log(this.state.searched);
        this.setState({ strainInput: event.target.value });
    }

    render() {
        const isSearched = this.state.searched;
        let strainView;
        if(isSearched) {
            strainView = <Strain
                name = {this.state.strainDetails.name}
                race = {this.state.strainDetails.race}
                desc = {this.state.strainDetails.desc}
            />;
        }
        else {
            strainView = <Strain />
        }

        return (
            <div className="StrainForm">
                <form class="d-flex justify-content-center" onSubmit={this.mySubmitHandler}>
                    <input
                        class="form-control"
                        type="text"
                        onChange={this.myChangeHandler}
                    />
                    <button 
                        type="submit"
                        class = "btn btn-primary"
                        
                    > Submit
                    </button>
                </form>
                {strainView}
            </div>
        );
    }
}

export default StrainForm;
// ReactDom.render(<StrainForm/>, document.getElementById('root'));