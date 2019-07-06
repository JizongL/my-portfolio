import React,{Component} from 'react'
import ContactMeForm from '../../components/ContactForm/contactMeForm'
import './ContactMe.css'
class ContactMe extends Component{
  render(){
    return(
      <div className='contact_me_container'>
        <ContactMeForm />
      </div>
    )
  }
}

export default ContactMe;