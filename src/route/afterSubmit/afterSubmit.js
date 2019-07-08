import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './afterSubmit.css'

class AfterSubmit extends Component{
  render(){
  
    return(
      <div className='after_submit_container'>
        <div className='thank_you_message'>
          <FontAwesomeIcon className='icon_after_submit' icon={['far', 'smile']} />                
          <p>Thank you,I will get back to you within 24 hours!</p>
          <button className='back_to_home'>Back</button>
        </div>
      </div>
    )
  }
}

export default AfterSubmit

