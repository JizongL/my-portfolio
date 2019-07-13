import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './project_3.css'
import a_1 from '../../assets/project_3/a-0.png'
import a_2 from '../../assets/project_3/a-1.png'
import a_3 from '../../assets/project_3/a-2.png'
import a_4 from '../../assets/project_3/a-3.png'
import a_5 from '../../assets/project_3/a-4.png'

export default class Project_3 extends Component{
  render(){
    return(
      
        <div className='project_container'> 
          <div className='project_title'>
            StresTrac App
          </div>
          <div className='project_description'>
          Space Repetition is a project that allows users to practice their language skill. The default language pair is 
          Chinese and English in this version. The backend employs an algorithm that relies on the data structure "Linked List"
          and 'queue' to keep track of user's accuracy and queue them accordingly. This helps users to focus on practicing words that they 
          get wrong with higher frequency. 

          <br/>
          <br/>
          Welcome to checkout <a href='https://space-repetition-app-jkk8z1vcn.now.sh/register' target="_blank" rel="noopener noreferrer">Rendevous here</a> and
          its client <a href='https://github.com/JizongL/spaceRepetitionClient' target="_blank" rel="noopener noreferrer">Github here</a>
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
            
            
            <div className='desktop_version_title'>Desktop Version</div>
            <div className='destop_version_img'>  
              <img className = 'project_screenshot' src={a_1} alt='screenshot'/>
              <img className = 'project_screenshot' src={a_2} alt='screenshot'/>
              <img className = 'project_screenshot' src={a_3} alt='screenshot'/>
              <img className = 'project_screenshot' src={a_4} alt='screenshot'/>
              <img className = 'project_screenshot' src={a_5} alt='screenshot'/>
            
            </div>  
          </div>



        </div>
      
    )
  }
}