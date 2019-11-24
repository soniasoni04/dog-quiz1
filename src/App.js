import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import { updateBreeds } from './actions/index'
import HomePage from './components/Homepage'
import DogList from './components/DogsList'
import DogBreedImages from './components/DogBreedImages'
import RandomImage from './components/RandomImage'

class App extends React.Component {
  componentDidMount() {
    this.props.updateBreeds()
}

  render(){
    return (
      <React.Fragment>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/dogList" exact component={DogList} />
          <Route path="/dogList/:breed" exact component={DogBreedImages} />
          <Route path="/RandomImage/quiz" exact component={RandomImage} />
        </div>
      </React.Fragment>
  
    );

  }
  
}

export default connect(null, { updateBreeds })(App)
