import React,{Component} from 'react'
import './contactMeForm.css'
class ContactMeForm extends Component{
  state={
    error:null
  }

  handleSubmit=ev=>{
    ev.preventDefault()
    // const {contact_name,contact_email,contact_message} = ev.target;
    
  }
  
  render(){
    return(
      <div className='contact_form_container'>
        <form 
          className='contact_form'
          onSubmit = {this.handleSubmit}
        >
          <div className='contact_form_name'> 
            <label
              htmlFor='contact_name'
            >
              Name:
            </label>  
            <input
              name='name'
              type='text'
              placeholder='Enter name'
              required
              id='contact_name'
            >          
            </input>
        </div>
        <div className='contact_form_email'> 
            <label
              htmlFor='contact_email'
            >
              Email:
            </label>  
            <input
              name='email'
              type='text'
              placeholder='Enter email'
              required
              id='contact_email'
            >          
            </input>
          <div className='contact_form_message'> 
            <label
              htmlFor='contact_message'
            >
              Message:
            </label>  
            <textarea
              name='message'
              type='text'
              placeholder='Enter message here!'
              required
              id='contact_message'
            >          
            </textarea>
          </div>
        </div>
        <button className='contact_form_submit' type='submit'>
          Submit
        </button>  
        </form>
      </div>
    )
  }
}

export default ContactMeForm;