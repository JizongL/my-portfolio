import React,{Component} from 'react'
import './LandingPage.css'
import TextLoop from 'react-text-loop'
import Particle from '../../components/Particle/Particle'
//import ParticleComponent from "../../ParticleComponent";
export default class LandingPage extends Component{
  render(){
    return(
      <div className='LandingPage_Container'>
       <TextLoop interval={5000} springConfig={{ stiffness: 280, damping: 15 }}> 
        <div className='LandingPage__welcome' id='text_1'>
            Welcome To My Portfolio        
        </div>
        <div className='LandingPage__welcome' id='text_2'>        
            I am happy to serve you!     
        </div>
      </TextLoop>                
      <Particle/>
      </div>
    )
  }
}