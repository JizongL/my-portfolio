import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {Link} from 'react-router-dom'

import './Footer.css'


export default class Footer extends Component{
  render(){
    return(
      <div className='footer'>
      
        <div className='social_icon_group'>
       
       <a href='https://github.com/JizongL'aria-label="github_icon" target="_blank" rel="noopener noreferrer">               
         <FontAwesomeIcon className='social_icon' icon={['fab', 'github']} />       
       </a>
       
       <a href='https://www.linkedin.com/in/d-liang/'aria-label="linkedin_icon"  target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='social_icon' icon={['fab', 'linkedin']} />
        </a>
        <a href='https://medium.com/@jizongliang' aria-label="medium_icon" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='social_icon' icon={['fab', 'medium']} />
        </a>
        <a href='https://twitter.com/TmmGeek' aria-label="twitter_icon" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='social_icon' icon={['fab', 'twitter']} />
        </a>
        </div>
        
        <p className="copyright-text">Copyright &copy; 2019 All Rights Reserved
          
            </p>
      </div>

      
    )
  }
}