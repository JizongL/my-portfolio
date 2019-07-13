import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './project_2.css'
import a_1 from '../../assets/project_2/a-1.jpg'
import a_2 from '../../assets/project_2/a-2.jpg'
import a_3 from '../../assets/project_2/a-3.jpg'
import a_4 from '../../assets/project_2/a-4.jpg'
import a_5 from '../../assets/project_2/a-5.jpg'
import a_6 from '../../assets/project_2/a-6.jpg'
import a_7 from '../../assets/project_2/a-7.jpg'
import b_1 from '../../assets/project_2/b-1.jpg'
import b_2 from '../../assets/project_2/b-2.jpg'
import b_3 from '../../assets/project_2/b-3.jpg'
export default class Project_2 extends Component{
  render(){
    return(
      
        <div className='project_container'> 
          <div className='project_title'>
            StresTrac App
          </div>
          <div className='project_description'>
          StreSTrac is an experimental React application that allows user to document their
           stress events, with the goal of helping users to understand their stress pattern 
           and thus control it. It came as an inspiration tracing back to my memory where I 
           suffered anxiety and stress and panic attacks during my college years.
          <br/>
          <br/>
          Here in StresTrac you can journal your stress by creatin stress events and and assign
           score to different stress factors. In time, you can view charts that indicate your 
           stress patterns. Welcome to checkout <a href='https://stress-tracker-app.2015rpro.now.sh/home' target="_blank" rel="noopener noreferrer">Rendevous here</a> and
          its client <a href='https://github.com/JizongL/stressTrac-client' target="_blank" rel="noopener noreferrer">Github here</a>
          </div>
          <div className='project_tech_list'>
            <span>
            StresTrac is built with Node, Express, PostgreSQL, React
            </span>  
          <div className='tech_icons'> 
            <FontAwesomeIcon className='icon_project_1' icon={['fab', 'react']} />
            <FontAwesomeIcon className='icon_project_1' icon={['fab', 'node']} />
            <FontAwesomeIcon className='icon_project_1' icon={['fas', 'database']} />
          </div>
          </div>
          <div className='screen_shots'>
            <div className='mobile_first_title'>Mobile First Design</div>
            <div className='mobile_first_img'>
              <img className = 'project_screenshot_mobile' src={b_1} alt='screenshot_mobile'/>
              <img className = 'project_screenshot_mobile' src={b_2} alt='screenshot_mobile'/>
              <img className = 'project_screenshot_mobile' src={b_3} alt='screenshot_mobile'/>
            </div>
            <div className='desktop_version_title'>Desktop Version</div>
            <div className='destop_version_img'>  
              <img className = 'project_screenshot' src={a_1} alt='screenshot'/>
              <img className = 'project_screenshot' src={a_2} alt='screenshot'/>
              <img className = 'project_screenshot' src={a_3} alt='screenshot'/>
              <img className = 'project_screenshot' src={a_4} alt='screenshot'/>
              <img className = 'project_screenshot' src={a_5} alt='screenshot'/>
              <img className = 'project_screenshot' src={a_6} alt='screenshot'/>
              <img className = 'project_screenshot' src={a_7} alt='screenshot'/>
            </div>  
          </div>



        </div>
      
    )
  }
}