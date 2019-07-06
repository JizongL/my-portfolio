import React,{Component} from 'react'
import './Portfolio.css'
import DemoCarousel from '../../components/Carousel/Carousel'


export default class Portfolio extends Component{
  render(){
    return(
      <div className='Portfolio_Container'>        
        <DemoCarousel/>
      </div>
    )
  }
}