import React, { Component } from "react";
import { connect } from 'react-redux';
import { updateBreeds } from '../actions/index'


class DogsList extends Component {
    state = {
        dogBreeds: null
    };

    componentDidMount() {
        this.props.updateBreeds()
    }

    render() {
        const { breedList } = this.props
        return (
            <div className="dogs-list">
                <h1>Dogs List</h1>
                {/* if state dogbreeds is null, display 'Loading' */}
                {this.props.dogBreeds === null && "Loading..."}
                <ol>
                    {breedList.map((breeds, index) => {
                        return <li key={index}>{breeds}</li>
                    })}
                </ol>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state with breedList : ', state.breedList)
    return {
        breedList: state.breedList

    }
}

export default connect(mapStateToProps, { updateBreeds })(DogsList)