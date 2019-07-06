import React,{Component} from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import rendezvous_landing from '../../assets/landing_rendezvous.png'
class DemoCarousel extends Component{
  render(){
    return(
      <Carousel>
    <div className='rendezvous_app_demo'>
      
        <img src={rendezvous_landing} alt='landing_rendezvous'/>
      
      <a href='https://rendezvous-app.now.sh/landingPage'target="_blank" >
      <p className='legend'>Rendezvous Dating App</p>
      </a>  
    </div>
    {/* <div className='rendezvous_app_demo'>
      <a href='https://rendezvous-app.now.sh/landingPage'>
        <img src={rendezvous_landing} alt='landing_rendezvous'/>
      </a>  
      <p className='legend'>Rendezvous Dating App</p>
    </div>
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