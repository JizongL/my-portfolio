import React,{Component} from 'react'
import './LandingPage.css'
import Particle from '../../components/Particle/Particle'
//import ParticleComponent from "../../ParticleComponent";
export default class LandingPage extends Component{
  render(){
    return(
      <div className='LandingPage_Container'>
        
        <div className='LandingPage__welcome'>
          
            Welcome To Jizong's Portfolio
          
        </div>
        <Particle/>
      </div>
    )
  }
}