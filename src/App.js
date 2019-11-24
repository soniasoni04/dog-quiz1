import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import HomePage from './components/Homepage'
import DogList from './components/DogsList'
import DogBreedImages from './components/DogBreedImages'

function App() {
  return (
    <React.Fragment>
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/dogList" exact component={DogList} />
        <Route path="/dogList/:breed" exact component={DogBreedImages} />
      </div>
    </React.Fragment>

  );
}

export default App;
