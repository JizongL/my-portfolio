import React,{Component} from 'react'
import ContactMeForm from '../../components/ContactForm/contactMeForm'
import './ContactMe.css'
class ContactMe extends Component{

  onDirect = ()=>{
    const{history} = this.props
    history.push('/')
  }
  render(){
    return(
      <div className='contact_me_container'>
        <ContactMeForm  onDirect={this.onDirect}/>
      </div>
    )
  }
}

export default ContactMe;