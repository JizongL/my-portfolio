import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './project_1.css'
import a_1 from '../../assets/project_1/a-1.png'
import a_2 from '../../assets/project_1/a-2.png'
import a_3 from '../../assets/project_1/a-3.png'
import a_4 from '../../assets/project_1/a-4.png'
import a_5 from '../../assets/project_1/a-5.png'
import a_6 from '../../assets/project_1/a-6.png'
import a_7 from '../../assets/project_1/a-7.png'

export default class Project_1 extends Component{
  render(){
    return(
      
        <div className='project_container'> 
          <div className='project_title'>
            Rendezvous Dating App
          </div>
          <div className='project_description'>
          Rendezvous is a web app that let singles meet their perfect mate by eventifying 
          their dating experience! My team and I found that many dating apps are connecting 
          people without helping them knowing each other, thus often resulted in bad first date
          experience. 
          <br/>
          <br/>
          Here you can create events and send to your potential dates,and if they are interested 
          in your offer and accept your dates, then you are matched and
          can connect. Welcome to checkout <a href='https://rendezvous-app.now.sh/landingPage' target="_blank" rel="noopener noreferrer">Rendevous here</a> and
          its client <a href='https://github.com/thinkful-ei-bee/EastCoast-Team-Project-Client' target="_blank" rel="noopener noreferrer">Github here</a>
          </div>
          <div className='project_tech_list'>
            <span>
            Rendezvous is built with Node, Express, PostgreSQL, React
            </span>  
          <div className='tech_icons'> 
            <FontAwesomeIcon className='icon_project_1' icon={['fab', 'react']} />
            <FontAwesomeIcon className='icon_project_1' icon={['fab', 'node']} />
            <FontAwesomeIcon className='icon_project_1' icon={['fas', 'database']} />
          </div>
          </div>
          <div className='screen_shots'>
            <img className = 'project_screenshot' src={a_1} alt='screenshot'/>
            <img className = 'project_screenshot' src={a_2} alt='screenshot'/>
            <img className = 'project_screenshot' src={a_3} alt='screenshot'/>
            <img className = 'project_screenshot' src={a_4} alt='screenshot'/>
            <img className = 'project_screenshot' src={a_5} alt='screenshot'/>
            <img className = 'project_screenshot' src={a_6} alt='screenshot'/>
            <img className = 'project_screenshot' src={a_7} alt='screenshot'/>
          </div>



        </div>
      
    )
  }
}