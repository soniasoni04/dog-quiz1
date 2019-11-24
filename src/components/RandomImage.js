import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRandomImage } from '../actions/index'

class RandomImages extends Component {
    state = {
        score: 0,
        count: 0,
       // answer: null
    }

    componentDidMount() {
        this.props.getRandomImage();
    }

    Score = (breed) => {
        if (this.props.answer === breed) {
            setTimeout(() => {
                this.setState({ answer: null });
                this.increaseScore()
                this.props.getRandomImage();
            }, 500)
        }
        else {
            this.decreaseScore();
            setTimeout(() => {
                //this.setState({ answer: "OOPS !! Wrong answer. Correct answer was : " + this.props.answer })
                this.props.getRandomImage();
            }, 500);
        }
    }

    increaseScore = () => {
        this.setState({
            score: this.state.score + 1,
            count: this.state.count + 1
        })
    }
    decreaseScore = () => {
        this.setState({
            score: this.state.score,
            count: this.state.count + 1
        })
    }

    render() {
        const { randomImage } = this.props
        return (
            <div>
                <h2>Random images Quiz...</h2>
                <h2>Check the image and give the correct answer :) </h2>
                <img src={randomImage} alt="dog" width="350px" height="400px" />

                <div>
                    <p>your current score : {this.state.score} </p>
                    <p>Your total attempts are  : {this.state.count}</p>
                </div>
                
                
                <div>
                    <button onClick={() => this.Score(this.props.breedListArray[0])}>
                        {this.props.breedListArray[0]}
                    </button>
                    <button onClick={() => this.Score(this.props.breedListArray[1])}>
                        {this.props.breedListArray[1]}
                    </button>
                    <button onClick={() => this.Score(this.props.breedListArray[2])}>
                        {this.props.breedListArray[2]}
                    </button>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const answer = state.randomImage.answer
    const option1 = state.breedList[Math.floor(Math.random() * (state.breedList.length - 1))]
    const option2 = state.breedList[Math.floor(Math.random() * (state.breedList.length - 1))]

    const breedListArray = []
    breedListArray.push(answer, option1, option2)
    breedListArray.sort()

    return {
        randomImage: state.randomImage.image,
        answer: state.randomImage.answer,
        breedListArray
    }
}

export default connect(mapStateToProps, { getRandomImage })(RandomImages)
