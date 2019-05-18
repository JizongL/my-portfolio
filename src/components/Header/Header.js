import React,{Component} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

class Header extends Component{
  render(){
    return(
      <div className='Header_container'>

        <Link
          
          to='/home'>
          Home
        </Link>
        <Link

          to='/portfolio'>
          Portfolio
        </Link>
        <Link
          
          to='/about'>
          About Me
        </Link>
        <Link
          
          to='/contact-me'>
          Contact Me     
        </Link>
      
      </div>
    )
  }
}

export default Header