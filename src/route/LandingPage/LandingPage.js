import React,{Component} from 'react'
import './LandingPage.css'
import Particle from '../../components/Particle/Particle'
//import ParticleComponent from "../../ParticleComponent";
export default class LandingPage extends Component{
  render(){
    return(
      <div className='LandingPage_Container'>
        
        <div className='LandingPage__welcome' id='text_1'>
          
            Welcome To My Portfolio
          
        </div>
        <div className='LandingPage__welcome' id='text_2'>
          
          I value your time and always at your service
        
      </div>
        <Particle/>
      </div>
    )
  }
}