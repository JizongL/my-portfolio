import React,{Component} from 'react'
import './Portfolio.css'

export default class Portfolio extends Component{
  render(){
    return(
      <div className='Portfolio_Container'>        
        <div className='Portfoelio__left'>          
              left        
        </div>      
        <div className='Portfoelio__right'>          
              right  
        </div>      
      </div>
    )
  }
}