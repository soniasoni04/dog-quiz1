import React,{Component} from 'react'
import { Link } from 'react-router-dom'


class HomePage extends Component{

    render(){
        return(
        
            <div>
            <h1>Hello Dog Lovers...</h1><br></br>
            <h2>Welcome to my Dog Game App</h2><br></br>  
            <h2><Link to ="/dogList"> List of dog breeds </Link></h2>
       </div>)

    }

}

export default HomePage
