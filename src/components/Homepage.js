import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './cute-dog.jpg'


class HomePage extends Component{

    render(){
        return(
        
            <div>
            <h1><i>Hello Dog Lovers... </i></h1>
            <h2><u> Welcome to Dog Images Quiz</u></h2><br></br> <br></br> 
            <h3><Link to ="/dogList"> Show me complete list of dog breeds </Link></h3>
            <h3><Link to ="/RandomImage/quiz"> Start Quiz here </Link></h3>
            <img src={logo} alt='lovely-dog' className='image1' />
       </div>)

    }

}

export default HomePage
