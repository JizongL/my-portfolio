import React,{Component} from 'react'
import './AboutMe.css'
import selfie from '../../assets/portfolio-profile.JPG'
// import Particle from '../../components/Particle/Particle'



class AboutMe extends Component{
  render(){
    const aboutMe = `I am a Full Stack Developer, I work with JS, HTML, CSS, React, Redux,
     Node.js, PostgreSQL, mongoDB and python. I have a background in Data Science and Math 
     and a passion for Blockchain Technology, outside coding I am also an artist. 
     Given my thirst for knowledge, I find the continuously changing world of programming alluring. 
     I am seeking an opportunity where I can work with a great team and combine my love for 
     technology, art and research with my strong interpersonal skills in order to make amazing things
      happen.`
  
    return(
      <div className='AboutMe_container'>
          <div className='AboutMe_selfie_container'>
            <img className = 'AboutMe__selfie' src={selfie} alt='selfie'/>
          </div>
          <p className='AboutMe__text'>
            {aboutMe}
          </p>
      </div>
    )
  }
}

export default AboutMe

