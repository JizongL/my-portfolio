import React,{Component} from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import rendezvous_landing from '../../assets/landing_rendezvous.png'
import landing_strestrac from '../../assets/landing_strestrac.png'
class DemoCarousel extends Component{
  render(){
    return(
      <Carousel autoPlay infiniteLoop showThumbs={false}>
    <div className='app_demo_img'>
      
        <img src={rendezvous_landing} alt='landing_rendezvous'/>
      
      <a href='https://rendezvous-app.now.sh/landingPage'target="_blank" rel="noopener noreferrer">
      <p className='legend'>Rendezvous Dating App</p>
      </a>  
    </div>
   <div className='app_demo_img'>
      
        <img src={landing_strestrac} alt='strestrac'/>
     
      <a href='https://jizong-strestrac-app.now.sh/home' target="_blank" rel="noopener noreferrer">
      <p className='legend'>Strestrac App</p>
      </a> 
    </div>
     {/* 
    <div className='rendezvous_app_demo'>
      <a href='https://rendezvous-app.now.sh/landingPage'>
        <img src={rendezvous_landing} alt='landing_rendezvous'/>
      </a>  
      <p className='legend'>Rendezvous Dating App</p>
    </div> */}
  </Carousel>
    )  
  }
}
  
export default DemoCarousel;