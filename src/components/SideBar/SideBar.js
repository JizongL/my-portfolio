import React,{Component} from 'react'
import './SideBar.css'

class SideBar extends Component{
  render(){
    return(
      <div className='SideBar_Container'>
        <div className='SideBar__Home'>
          Home
        </div>
        <div className='SideBar__Portfolio'>
          Portfolio          
        </div>
        <div className='SideBar__About'>
          About Me
        </div>
        <div className='SideBar__Contact'>
          Contact Me
        </div>
      
      </div>
    )
  }
}

export default SideBar