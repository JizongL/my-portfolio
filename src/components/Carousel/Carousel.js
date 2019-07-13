import React,{Component} from 'react';
import {Carousel} from 'react-responsive-carousel';
import {Link} from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import rendezvous_landing from '../../assets/landing_rendezvous.png'
import landing_strestrac from '../../assets/landing_strestrac.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Carousel/Carousel.css'
import spaceRepetition from '../../assets/project_3/a-0.png'
class DemoCarousel extends Component{
  // state={
  //   intro:''
  // }
  // updateBriefIntro=(array)=>{
    
  //   if(array.length===0){
  //     array=['a','b']
  //   }
  //   this.setState({intro:array.pop()})
  // }

  render(){
    
    return(
      <div>
        {/* <div className='intro'>
          {this.state.intro}
        </div> */}
      <Carousel interval={10000} autoPlay  infiniteLoop showThumbs={true} showStatus={false}>
    <div className='app_demo_img'>
      <a className='test_link' href='https://github.com/thinkful-ei-bee/EastCoast-Team-Project-Client' target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon className='icon_carousel' icon={['fab', 'github']} />
      </a>
      <img src={rendezvous_landing} alt='landing_rendezvous'/>
      <Link to='/project_1'>
      <p className='legend'>Rendezvous Dating App (built with react,nodeJs,postgreSQL)</p>
      </Link>
      
    </div>
   <div className='app_demo_img'>
   <a className='test_link' href='https://github.com/JizongL/stressTrac-client' target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon className='icon_carousel' icon={['fab', 'github']} />
      </a>
        <img src={landing_strestrac} alt='strestrac'/>
     
      <Link to='/project_2'>
      <p className='legend'>Strestrac App (built with react,nodeJs,postgreSQL)</p>
      </Link>
    </div>
    {/* <div className='app_demo_img'>
   <a className='test_link' href='https://github.com/JizongL/stressTrac-client' target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon className='icon_carousel' icon={['fas', 'info-circle']} />
      </a>
        <img src={landing_strestrac} alt='strestrac'/>
     
      <Link to='/project_2'>
      <p className='legend'>Strestrac App</p>
      </Link>
    </div>  */}
    <div className='app_demo_img'>
      
    <a className='test_link' href='https://github.com/JizongL/spaceRepetitionClient' target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon className='icon_carousel' icon={['fab', 'github']} /> 
      </a>
        <img src={spaceRepetition} alt='strestrac'/>
     
      <Link to='/project_3'>
      <p className='legend'>Space Repetition App(built with react,nodeJs,postgreSQL)</p>
      </Link>
    </div>
     
  </Carousel>
  </div>
    )  
  }
}
  
export default DemoCarousel;