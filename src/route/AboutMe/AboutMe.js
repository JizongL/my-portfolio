import React,{Component} from 'react'
import './AboutMe.css'
import selfie from '../../assets/selfie.jpeg'
import Particle from '../../components/Particle/Particle'

class AboutMe extends Component{
  render(){
    const aboutMe = `Hi, I'm JSL. I'm a fullstack developer & UI/UX 
    enthusiast I am a web developer and recent graduate of the Engineer
    Immersion bootcamp at Thinkful. I love solving problems and thinking
     for design, it's very rewarding to see hard work becomes artwork. My
      speciality is in JS, Python, Node.JS, React, and MongoDB. I can manage
       frontend and backend to work seamlessly together.When I am not coding,
       I spend time learning the Blockchain Technology and its future and I 
       practice my Math for fun. Outside the tech, I also enjoy volunteering, 
       drawing and playing the piano. Also,I cook amazing Asian food.`
  
    return(
      <div className='AboutMe_container'>
          <div className='AboutMe_selfie_container'>
            <img className = 'AboutMe__selfie' src={selfie} alt='selfie'/>
          </div>
          <p className='AboutMe__text'>
            {aboutMe}
          </p>
          <Particle/>
      </div>
    )
  }
}

export default AboutMe

