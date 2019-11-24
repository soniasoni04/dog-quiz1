import React, { Component } from "react";

export default class DogsList extends Component {
    state = {
        dogBreeds: null
    };
    
    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(res => res.json())
            .then(data => {
                const breeds = // transform `data` to an array of strings
                    this.updateBreeds(data);
            })
            .catch(console.error);
    }

    updateBreeds(breeds) {
        this.setState({
            dogBreeds: breeds
        })
    console.log(this.state)
    }

    render() {


        return (
            <div className="dogs-list">
                <h1>Dogs List</h1>
                {/* if state dogbreeds is null, display 'Loading' */}
                {this.state.dogBreeds === null && "Loading..."}
            </div>
        );
    }
}