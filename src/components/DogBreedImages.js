import React, { Component } from "react";
import { connect } from 'react-redux';
import { getBreedimages } from '../actions/index'
import { Link } from 'react-router-dom'

class DogBreedImages extends Component {
    state = {
        dogBreedImages: null
    };

    componentDidMount() {
        const { breed } = this.props.match.params
        this.props.getBreedimages(breed)
    }

    render() {
        const { breed } = this.props.match.params
        //console.log("images : ", this.props.breedImages)
        const { breedImages } = this.props
        return (
            <div>
                <h2> Images of breed : {breed}</h2>
                {this.props.breedImages === null && "Loading..."}
                <ul>
                    {breedImages.map((image, index) => {
                        return <li key={index}><img src={image} alt='dog-images' width='350px' height='250px' /></li>
                    })}
                </ul>
                <p>
                    <Link to='/'><button className='center'> Go Back </button></Link>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log('state with breed images : ', state.breedImages)
    return {
        breedImages: state.breedImages
    }
}

export default connect(mapStateToProps, { getBreedimages })(DogBreedImages)