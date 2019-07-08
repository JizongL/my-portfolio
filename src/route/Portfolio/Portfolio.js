import React,{Component} from 'react'
import './Portfolio.css'
import DemoCarousel from '../../components/Carousel/Carousel'


export default class Portfolio extends Component{
  render(){
    return(
      
        <div className='portfolio_Container'> 
          <div className='carousel_container' aria-label="portfolio">       
            <DemoCarousel/>
          </div>
        </div>
      
    )
  }
}